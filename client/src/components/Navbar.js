import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="nav-link navbar-brand">Logo</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            {/* <a class="nav-link" href="#">About</a> */}
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/login" className="nav-link">Account</Link>
                        </li>
                        <li class="nav-item">
                            {/* <a class="nav-link" href="#">Contact</a> */}
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>


    );
};

export default Navbar;