import React from "react";
import useFetch from "../hooks/useFetch";
import "./Features.css";

const Features = () => {
	const { data, loading, error } = useFetch(
		"http://localhost:8000/api/hotels/countByCity?cities=stambul,berlin,london"
	);

	return (
		<div className="features">
			{loading ? (
				"Loading please wait..."
			) : (
				<>
					<div className="featuresItem">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/4/42/Samuel_Beckett_Bridge_At_Sunset_Dublin_Ireland_%2897037639%29_%28cropped%29.jpeg"
							alt=""
							className="featuresImage"
						/>
						<div className="featuresTitle">
							<h1>Berlin</h1>
							<h2>{data[0]} properties</h2>
						</div>
					</div>
					<div className="featuresItem">
						<img
							src="https://a.cdn-hotels.com/gdcs/production180/d495/d6bc9f7d-98d9-4c49-a97f-1c101e966878.jpg"
							alt=""
							className="featuresImage"
						/>
						<div className="featuresTitle">
							<h1>Madrid</h1>
							<h2>{data[1]} properties</h2>
						</div>
					</div>
					<div className="featuresItem">
						<img
							src="https://travelnevada.com/wp-content/uploads/2021/01/Reno17-1024x739.jpg"
							alt=""
							className="featuresImage"
						/>
						<div className="featuresTitle">
							<h1>London</h1>
							<h2>{data[2]} properties</h2>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Features;
