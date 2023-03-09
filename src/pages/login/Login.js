import React, { useState, useContext } from "react";
import "./Login.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
	});
	const navigate = useNavigate();
	const { user, loading, error, dispatch } = useContext(AuthContext);
	//input change handler ; e.target.id = username || password
	const handleChange = (e) => {
		setCredentials((prevValue) => ({
			...prevValue,
			[e.target.id]: e.target.value,
		}));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			const res = await axios.post(
				"https://booking-place.onrender.com/api/auth/login",
				credentials
			);
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
			navigate("/");
		} catch (error) {
			dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
		}
	};

	return (
		<div className="login">
			<div className="lContainer">
				<input
					type="text"
					className="lInput"
					placeholder="username"
					id="username"
					onChange={handleChange}
				/>
				<input
					type="password"
					className="lInput"
					placeholder="password"
					id="password"
					onChange={handleChange}
				/>
				<button className="lButton" disabled={loading} onClick={handleClick}>
					Login
				</button>
				{error && <span>{error.message}</span>}
			</div>
		</div>
	);
};

export default Login;
