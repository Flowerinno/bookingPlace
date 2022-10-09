//@ts-nocheck
import "./Home.css";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Features from "../../components/features/Features";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="homeContainer">
				<Features />
			</div>
		</div>
	);
};

export default Home;
