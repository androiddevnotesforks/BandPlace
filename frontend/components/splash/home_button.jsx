import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => (
    <span className="home-button">
        <div className="bandplace-star"/>
        <Link to='/'>
            bandplace
        </Link>
    </span>
);

export default HomeButton;