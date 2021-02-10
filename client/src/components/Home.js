import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>

            <Navbar/>

            <div className="jumbotron mt-5 w-50 text-center">
                <h1>Landing Page</h1>
            </div>



        </div>

    );
};

export default Home;