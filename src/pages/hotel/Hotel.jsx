//@ts-nocheck
import {
	faCircleArrowRight,
	faLocationDot,
	faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./Hotel.css";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import useFetch from "../../components/hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
const Hotel = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];

	const { data, loading, error } = useFetch(
		`http://localhost:8000/api/hotels/find/${id}`
	);
	const { dates } = useContext(SearchContext);
	const [slideIndex, setSlideIndex] = useState(0);
	const [open, setOpen] = useState(false);

	const handleSlide = (index) => {
		setSlideIndex(index);
		setOpen(true);
	};

	const handleMove = (direction) => {
		console.log(direction, slideIndex);
		let newSlideIndex;
		if (direction === "l") {
			newSlideIndex = slideIndex === 0 ? 5 : slideIndex - 1;
		} else {
			newSlideIndex = slideIndex === 5 ? 0 : slideIndex + 1;
		}
		setSlideIndex(newSlideIndex);
	};
	return (
		<div>
			<Navbar />
			<Header type="list" />
			{loading ? (
				"Loading..."
			) : (
				<div className="hotelContainer">
					{open && (
						<div className="slider">
							<FontAwesomeIcon
								icon={faCircleXmark}
								className="close"
								onClick={() => setOpen(false)}
							/>
							<FontAwesomeIcon
								icon={faCircleArrowLeft}
								className="arrow"
								onClick={() => handleMove("l")}
							/>
							<div className="sliderWrapper">
								<img
									src={data.photos[slideIndex]}
									alt=""
									className="sliderImg"
								/>
							</div>
							<FontAwesomeIcon
								icon={faCircleArrowRight}
								className="arrow"
								onClick={() => handleMove("r")}
							/>
						</div>
					)}
					<div className="hotelWrapper">
						<button className="bookNow">Reserve or Book Now!</button>
						<h1 className="hotelTitle">{data.name}</h1>
						<div className="hotelAddress">
							<FontAwesomeIcon icon={faLocationDot} />
							<span>{data.address}</span>
						</div>
						<span className="hotelDistance">
							Excellent location - {data.distance}m from center
						</span>
						<span className="hotelPriceHighlight">
							Book a stay over a ${data.cheapestPrice} at this property and get
							a free airport taxi
						</span>
						<div className="hotelImages">
							{data.photos?.map((image, index) => (
								<div className="hotelImgWrapper" key={index}>
									<img
										src={image}
										alt=""
										className="hotelImg"
										onClick={() => handleSlide(index)}
									/>
								</div>
							))}
						</div>
						<div className="hotelDetails">
							<div className="hotelDetailsTexts">
								<h1 className="hotelTitle">{data.title}</h1>
								<p className="hotelDesc">{data.description}</p>
							</div>
							<div className="hotelDetailsPrice">
								<h1>Perfect for a 9-night stay!</h1>
								<span>
									Located in the real heard of Krakow, this property has and
									excellent location score of 9.8!
								</span>
								<h2>
									<b>$945</b> (9 nights)
								</h2>
								<button>Reserve or Book Now!</button>
							</div>
						</div>
					</div>
					<MailList />
					<Footer />
				</div>
			)}
		</div>
	);
};

export default Hotel;
