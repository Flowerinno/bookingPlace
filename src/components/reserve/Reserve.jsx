import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../hooks/useFetch";
import "./Reserve.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {
	const [selectedRooms, setSelectedRooms] = useState([]);
	
	//fetch available rooms for a chosen hotel
	const { data, loading, error } = useFetch(
		`http://localhost:8000/api/hotels/room/${hotelId}`
	);
	const navigate = useNavigate();
	//get dates from context
	const { dates } = useContext(SearchContext);
		
	const getDatesInRange = (startDate, endDate) => {
		const start = new Date(startDate);
		const end = new Date(endDate);
		
		const date = new Date(start.getTime());

		let list = [];

		while (date <= end) {
			list.push(new Date(date).getTime());
			date.setDate(date.getDate() + 1);
		}
		//get list of dates from start to end date
		return list;
	};

	const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);
	// checks whether roomNumber is available or not
	const isAvailable = (roomNumber) => {
		//room is found(if) with all unavailable dates
		const isFound = roomNumber.unavailableDates.some((date) =>
			allDates.includes(new Date(date).getTime())
		);
		//return only available ones
		return !isFound;
	};
	//function for selecting dates to make them unavailable
	const handleSelect = (e) => {
		//check rooms
		const checked = e.target.checked;
		//get the room number via e.target.value
		const value = e.target.value;
		//setSelectedRooms[] of all checked rooms
		// if checked we push it to the array , else filters checked values from unchecked ones
		setSelectedRooms(
			checked
				? [...selectedRooms, value]
				: selectedRooms.filter((item) => item !== value)
		);
	};
	//submition function to reserve rooms 
	const handleClick = async () => {
		try {
			//Promise.all to update all selected rooms 
			await Promise.all(
				selectedRooms.map((roomId) => {
					const response = axios.put(
						`http://localhost:8000/api/rooms/availability/${roomId}`,
						{
							dates: allDates,
						}
					);
					return response.data;
				})
			);
			setOpen(false);
			navigate("/");
		} catch (error) {}
	};
	return (
		<div className="reserve">
			<div className="rContainer">
				<FontAwesomeIcon
					icon={faCircleXmark}
					className="rClose"
					onClick={() => setOpen(false)}
				/>
				<span>Select your roooms: </span>
				{data.map((item) => (
					<div className="rItem" key={item._id}>
						<div className="rItemInfo">
							<div className="rTitle">{item.title}</div>
							<div className="rDesc">{item.description}</div>
							<div className="rMax">
								Max people: <b>{item.maxPeople}</b>
							</div>
							<div className="rPrice">Price: {item.Price}</div>
						</div>
						<div className="rSelectRooms">
							{item.roomNumbers.map((roomNumber) => (
								<div className="room" key={roomNumber._id}>
									<label>{roomNumber.number}</label>
									<input
										type="checkbox"
										value={roomNumber._id}
										onChange={handleSelect}
										disabled={!isAvailable(roomNumber)}
									/>
								</div>
							))}
						</div>
					</div>
				))}
				<button className="rButton" onClick={handleClick}>
					Reserve now!
				</button>
			</div>
		</div>
	);
};

export default Reserve;
