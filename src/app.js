import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "views/LoginPage/LoginPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import useToken from "useToken";
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import CarbonOffsetting from "views/Carbon_offsetting/LandingPage.js";
import SignUpPage from "views/LoginPage/LoginPage2";
import NetZeroBusiness from "views/Net-zero-business/base";

export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/net-zero" component={NetZeroBusiness} />
            <Route path="/community-building" component={CarbonOffsetting} />
            <Route path="/lol" component={Components} />
            <Route path="/login-page">
              <LoginPage setToken={setToken} />
            </Route>
            <Route path="/signup-page">
              <SignUpPage setToken={setToken} />
            </Route>
            <Route path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/net-zero" component={NetZeroBusiness} />
            <Route path="/community-building" component={CarbonOffsetting} />
            <Route path="/lol" component={Components} />
            <Route path="/Profile-page">
              <ProfilePage />
            </Route>
            <Route path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
