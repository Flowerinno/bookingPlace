import React from "react";
import "./SearchItem.css";

const SearchItem = () => {
	return (
		<div className="searchItem">
			<img
				src="https://media.istockphoto.com/id/1284639151/uk/%D1%84%D0%BE%D1%82%D0%BE/3d-%D1%80%D0%B5%D0%BD%D0%B4%D0%B5%D1%80%D0%B8%D0%BD%D0%B3-%D1%80%D0%BE%D0%B7%D0%BA%D1%96%D1%88%D0%BD%D0%B8%D0%B9-%D0%BA%D0%BB%D0%B0%D1%81%D0%B8%D1%87%D0%BD%D0%B8%D0%B9-%D1%81%D1%83%D1%87%D0%B0%D1%81%D0%BD%D0%B8%D0%B9-%D1%81%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9-%D0%BB%D1%8E%D0%BA%D1%81-%D0%B2-%D0%B3%D0%BE%D1%82%D0%B5%D0%BB%D1%96.jpg?s=612x612&w=0&k=20&c=1fGbMCRiuKSlyv-p2gUBZ0aVbwV6Ujy3qaLWM1TIW3k="
				alt=""
				className="siImg"
			/>
			<div className="siDesc">
				<h1 className="siTitle">Tower Street Apartments</h1>
				<span className="siDistance">500m from center</span>
				<span className="siTaxiOp">Free airport taxi</span>
				<span className="siSubtitle">
					Studio Apartment with Air conditioning
				</span>
				<span className="siFeatures">
					Entire studio - 1 bathroom - 21m² - 1 full bed
				</span>
				<span className="siCancelOp">Free cancellation</span>
				<span className="siCancelOpSubtitle">
					You can cancel later, so lock in this great price today!
				</span>
			</div>
			<div className="siDetails">
				<div className="siRating">
					<span>Excellent</span>
					<button>8.9</button>
				</div>
				<div className="siDetailText">
					<span className="siPrice">$123</span>
					<span className="siTaxOps">Includes taxes and fees</span>
					<button className="siCheckButton">See availability</button>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
