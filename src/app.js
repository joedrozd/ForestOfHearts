import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "views/LoginPage/LoginPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import useToken from "useToken";
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import NetZero from "views/Net_zero/base.js";
import CarbonOffsetting from "views/Carbon_offsetting/LandingPage.js";
import SignUpPage from "views/LoginPage/LoginPage2";

export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/community-building" component={CarbonOffsetting} />
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/login-page">
              <LoginPage setToken={setToken} />
            </Route>
            <Route path="/signup-page">
              <SignUpPage setToken={setToken} />
            </Route>
            <Route path="/net-zero" component={NetZero} />
            <Route path="/" component={Components} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/community-building" component={CarbonOffsetting} />
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/Profile-page">
              <ProfilePage />
            </Route>
            <Route path="/net-zero" component={NetZero} />
            <Route path="/" component={Components} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
