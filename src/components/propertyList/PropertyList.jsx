//@ts-nocheck
import React from "react";
import "./PropertyList.css";
import useFetch from "../hooks/useFetch";

const PropertyList = () => {
	const { data, loading, error } = useFetch(
		"https://booking-place.onrender.com/api/hotels/countByType"
	);

	const images = [
		"https://media.istockphoto.com/photos/hotel-room-condominium-or-apartment-doorway-picture-id1165738696?k=20&m=1165738696&s=612x612&w=0&h=glThQeKk3IgE5RXN2IpeaQxQCnb4gBTMTu2lL1vmq3Y=",
		"https://media.istockphoto.com/id/1382394262/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%84%D0%B0%D1%81%D0%B0%D0%B4-%D0%BD%D1%8C%D1%8E-%D0%B9%D0%BE%D1%80%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=yKz7HmfUWySEfMiIbQvDtmimpIEiLYra6Uo5i2Yp7yM=",
		"https://media.istockphoto.com/id/130408168/uk/%D1%84%D0%BE%D1%82%D0%BE/folded-towels-on-lounge-chairs-beside-pool.jpg?s=612x612&w=0&k=20&c=IOolKQsAkvcgbeTpsEEy9tcP5RUAwaRQNnOfrQhTcWQ=",
		"https://media.istockphoto.com/id/1311356176/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%83%D1%87%D0%B0%D1%81%D0%BD%D0%B8%D0%B9-%D1%80%D0%BE%D0%B7%D0%BA%D1%96%D1%88%D0%BD%D0%B8%D0%B9-%D1%96%D0%BD%D1%82%D0%B5%D1%80%D1%94%D1%80-%D0%B1%D1%83%D0%B4%D0%B8%D0%BD%D0%BA%D1%83.jpg?s=612x612&w=0&k=20&c=3f9ks13Bw-CdnVygV1jWgTpKtm7X7K2rSofLhxPn_Qo=",
		"https://media.istockphoto.com/id/1355723504/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BE%D1%82%D0%B5%D0%B4%D0%B6%D0%BD%D1%96-%D0%B1%D1%83%D0%B4%D0%B8%D0%BD%D0%BA%D0%B8-%D1%81%D0%B5%D0%BB%D0%B0-%D1%82%D1%80%D0%B0%D0%B4%D0%B8%D1%86%D1%96%D0%B9%D0%BD%D0%BE%D1%97-%D0%B0%D1%80%D1%85%D1%96%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B8-%D0%B7%D0%B0%D1%82%D0%B8%D1%88%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B1%D1%83%D0%B4%D0%B8%D0%BD%D0%BA%D1%83-%D0%B2-%D0%B3%D0%BE%D1%80%D0%B0%D1%85-%D0%BD%D0%BE%D1%80%D0%B2%D0%B5%D0%B3%D1%96%D1%97.jpg?s=612x612&w=0&k=20&c=TBCSBFrXcvTCJGo1KM3tHoKbL-vSeO4v0DzPg-stLPs=",
	];
	return (
		<div className="pList">
			{loading && data.length === 0 ? (
				"Loading please wait"
			) : (
				<>
					{!loading &&
						data.length !== 0 &&
						images.map((image, index) => (
							<div className="pListItem" key={index}>
								<img src={image} alt="" className="pListImage" />
								<div className="pListTitles">
									<h1>{data[index]?.type}s</h1>
									<h2>
										{data[index]?.count} {data[index]?.type}s
									</h2>
								</div>
							</div>
						))}
				</>
			)}
		</div>
	);
};

export default PropertyList;
