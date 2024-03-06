import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className="headerContainer">
                    <h1> PIZZA GUY'S </h1>
                    <p> PIZZA WITH GOOD TASTE</p>

                    {/* LINKED INTO MENU PAGES */}
                    <Link to="/menu">
                        <button> ORDER NOW </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
