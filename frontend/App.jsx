import React from "react";
// import NavBarContainer from "./components/nav_bar_container";
import LoginFormContainer from "./components/auth/login_form_container";
import ArtistSignupFormContainer from "./components/auth/artist_signup_form_container";
import FanSignupFormContainer from "./components/auth/fan_signup_form_container";
import SplashContainer from "./components/splash/splash_container";
import Modal from "./components/auth/modal";
import { Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "./util/route_util";

const App = () => (
    <div>
        <div className="main-body">
            <Modal />
            <Switch>
                <AuthRoute path='/login' component={LoginFormContainer} />
                <AuthRoute path='/signup' component={ArtistSignupFormContainer} />
                <AuthRoute path='/fansignup' component={FanSignupFormContainer} />
                <Route path='/' component={SplashContainer} />
            </Switch>
        </div>
    </div>
)

export default App;