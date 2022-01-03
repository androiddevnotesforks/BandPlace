import React from "react";
import NavBar from "./components/nav_bar";
import LoginFormContainer from "./components/auth/login_form_container";
import SignupFormContainer from "./components/auth/artist_signup_form_container";
import Splash from "./components/splash";
import { Route, Switch } from "react-router-dom";

const App = () => (
    <div>
        <header>
            <h1>BandPlace: A Place for Bands</h1>
            <NavBar />
        </header>
        <Switch>
            <Route path='/login' component={LoginFormContainer} />
            <Route path='/signup' component={SignupFormContainer} />
            <Route path='/' component={Splash} />
        </Switch>
    </div>
)

export default App;