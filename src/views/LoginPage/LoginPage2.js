import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import PropTypes from "prop-types";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";

const useStyles = makeStyles(styles);

async function signUpUser(credentials) {
  return fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function SignUpPage({ setToken }) {
  const [cardAnimaton2, setCardAnimation2] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation2("");
  }, 700);
  const classes = useStyles();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    const data = document.getElementById("name").value;
    const data2 = document.getElementById("email").value;
    const data3 = document.getElementById("password").value;
    const passValid = data3.length;
    if (passValid > 22) {
      alert("Password too long!");
      return;
    }
    const user = await signUpUser({
      name: data,
      email: data2,
      password: data3,
    });
    setToken(user);
    console.log(user);
  };
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Forest of Hearts"
        rightLinks={<HeaderLinks />}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton2]}>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Log in</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Username"
                      id="name"
                      name={username}
                      onChange={(e) => setUserName(e.target.value)}
                      formControlProps={{
                        fullWidth: true,
                        required: true,
                      }}
                      inputProps={{
                        type: "text",

                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Email address"
                      id="email"
                      name={email}
                      onChange={(e) => setEmail(e.target.value)}
                      formControlProps={{
                        fullWidth: true,
                        required: true,
                      }}
                      inputProps={{
                        type: "email",

                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="password"
                      name={password}
                      onChange={(e) => setPassword(e.target.value)}
                      formControlProps={{
                        fullWidth: true,
                        required: true,
                      }}
                      inputProps={{
                        type: "password",

                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <BrowserRouter forceRefresh={true}>
                      <Switch>
                        <Link to="/login-page">
                          <Button color="primary" size="lg">
                            Log in
                          </Button>
                        </Link>
                      </Switch>
                    </BrowserRouter>
                    <Button type="submit" color="primary" size="lg">
                      Sign Up
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
SignUpPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
