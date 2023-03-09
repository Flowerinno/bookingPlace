//@ts-nocheck
import React from "react";
import "./FeaturesProperties.css";
import useFetch from "../hooks/useFetch";
const FeaturesProperties = () => {
	const { data, loading, error } = useFetch(
		"https://booking-place.onrender.com/api/hotels?features=true&limit=3"
	);

	return (
		<div className="fp">
			{loading ? (
				"Loading..."
			) : (
				<>
					{data.map((item, index) => (
						<div className="fpItem" key={item._id}>
							{item.photos.length > 0 && (
								<img src={item.photos[0]} alt="" className="fpImage" />
							)}
							<span className="fpName">{item.name}</span>
							<span className="fpCity">{item.city}</span>
							<span className="fpPrice">
								Starting from ${item.cheapestPrice}
							</span>
							{item.rating && (
								<div className="fpRating">
									<button>{item.rating}</button>
									<span>Excellent</span>
								</div>
							)}
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default FeaturesProperties;
