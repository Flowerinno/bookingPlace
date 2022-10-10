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


const Hotel = () => {
	const images = [
		{
			src: "https://preview.redd.it/dr5cbbya3md01.jpg?auto=webp&s=cbd5d6f66f57ddb1f57ab44284960f6efbb35866",
		},
		{
			src: "https://s1.1zoom.me/b5050/744/330559-moril_1920x1080.jpg",
		},
		{
			src: "https://s1.1zoom.me/big0/506/331038-svetik.jpg",
		},
		{
			src: "https://www.1zoom.me/big2/937/330275-moril.jpg",
		},
		{
			src: "https://s1.1zoom.me/big0/314/327887-svetik.jpg",
		},
		{
			src: "https://s1.1zoom.me/big0/569/329954-moril.jpg",
		},
	];
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
							<img src={images[slideIndex].src} alt="" className="sliderImg" />
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
					<h1 className="hotelTitle">Grand Hotel</h1>
					<div className="hotelAddress">
						<FontAwesomeIcon icon={faLocationDot} />
						<span>Elton St 125 New York</span>
					</div>
					<span className="hotelDistance">
						Excellent location - 500m from center
					</span>
					<span className="hotelPriceHighlight">
						Book a stay over a $114 at this property and get a free airport taxi
					</span>
					<div className="hotelImages">
						{images.map((image, index) => (
							<div className="hotelImgWrapper" key={index}>
								<img
									src={image.src}
									alt=""
									className="hotelImg"
									onClick={() => handleSlide(index)}
								/>
							</div>
						))}
					</div>
					<div className="hotelDetails">
						<div className="hotelDetailsTexts">
							<h1 className="hotelTitle">Stay in the heart of Krakow</h1>
							<p className="hotelDesc">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
								cum aliquam eligendi culpa. Doloribus nisi autem deserunt
								repellendus repudiandae similique laboriosam. Nemo a laudantium
								molestiae quo saepe! Eveniet, sit saepe?
							</p>
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
		</div>
	);
};

export default Hotel;
