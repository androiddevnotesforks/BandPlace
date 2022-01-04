import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => (
    <span className="home-button">
        <Link to='/'>bandplace</Link>
    </span>
);

export default HomeButton;