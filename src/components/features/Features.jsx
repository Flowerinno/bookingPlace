import React from "react";
import "./Features.css";
const Features = () => {
	return (
		<div className="features">
			<div className="featuresItem">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/4/42/Samuel_Beckett_Bridge_At_Sunset_Dublin_Ireland_%2897037639%29_%28cropped%29.jpeg"
					alt=""
					className="featuresImage"
				/>
				<div className="featuresTitle">
					<h1>Dublin</h1>
					<h2>123 properties</h2>
				</div>
			</div>
			<div className="featuresItem">
				<img
					src="https://a.cdn-hotels.com/gdcs/production180/d495/d6bc9f7d-98d9-4c49-a97f-1c101e966878.jpg"
					alt=""
					className="featuresImage"
				/>
				<div className="featuresTitle">
					<h1>Austin</h1>
					<h2>123 properties</h2>
				</div>
			</div>
			<div className="featuresItem">
				<img
					src="https://travelnevada.com/wp-content/uploads/2021/01/Reno17-1024x739.jpg"
					alt=""
					className="featuresImage"
				/>
				<div className="featuresTitle">
					<h1>Reno</h1>
					<h2>123 properties</h2>
				</div>
			</div>
		</div>
	);
};

export default Features;
