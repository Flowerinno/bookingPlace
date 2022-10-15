import React from "react";
import "./SearchItem.css";
import { Link } from "react-router-dom";
const SearchItem = ({ item }) => {
	return (
		<div className="searchItem">
			<img src={item.photos[0]} alt="" className="siImg" />
			<div className="siDesc">
				<h1 className="siTitle">{item.name}</h1>
				<span className="siDistance">{item.distance}m from center</span>
				<span className="siTaxiOp">Free airport taxi</span>
				<span className="siSubtitle">
					Studio Apartment with Air conditioning
				</span>
				<span className="siFeatures">{item.description}</span>
				<span className="siCancelOp">Free cancellation</span>
				<span className="siCancelOpSubtitle">
					You can cancel later, so lock in this great price today!
				</span>
			</div>
			<div className="siDetails">
				{item.rating && (
					<div className="siRating">
						<span>Excellent</span>
						<button>{item.rating}</button>
					</div>
				)}
				<div className="siDetailText">
					<span className="siPrice">${item.cheapestPrice}</span>
					<span className="siTaxOps">Includes taxes and fees</span>
					<Link
						to={`/hotels/${item._id}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						<button className="siCheckButton">See availability</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
