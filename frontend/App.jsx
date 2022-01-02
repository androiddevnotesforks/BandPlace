import React from "react";
import NavBar from "./components/nav_bar";
import LoginFormContainer from "./components/login_form_container";
import SignupFormContainer from "./components/artist_signup_form_container";
import Switch from "react-router-dom";

const App = () => (
    <div>
        <header>
            <h1>BandPlace: A Place for Bands</h1>
            <NavBar />
        </header>
        {/* <Switch>

        </Switch> */}
        <LoginFormContainer />
    </div>
)

export default App;