import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Reserve.css";
const Reserve = ({ setOpen, hotelId }) => {
	return (
		<div className="reserve">
			<div className="rContainer">
				<FontAwesomeIcon icon={faCircleXmark} />
			</div>
		</div>
	);
};

export default Reserve;
