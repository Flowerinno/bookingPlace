//@ts-nocheck
import "./Home.css";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Features from "../../components/features/Features";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturesProperties from "../../components/featuresProperties/FeaturesProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="homeContainer">
				<Features />
				<h1 className="homeTitle">Browse by property type</h1>
				<PropertyList />
				<h1 className="homeTitle">Home guests love</h1>
				<FeaturesProperties />
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
