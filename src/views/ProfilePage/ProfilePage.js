import React from "react";
/* eslint-disable no-unused-vars */
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import profile from "assets/img/faces/FoH.jpg";
import { Box } from "@mui/system";
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import axios from "axios";
import PropTypes from "prop-types";
import SettingsIcon from "@mui/icons-material/Settings";

import Bolt from "@mui/icons-material/Bolt";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import WaveBorder from "./WaveBorder";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import CollapsibleTable from "./carbonfootprinttable";
import { Link } from "react-router-dom";
import { ContactSupport } from "@material-ui/icons";
import ContactSection from "./WorkSection";
import TransportValues from "./transportValues";

const useStyles = makeStyles(styles);

function populateHeader(obj) {
  const userInfo = document.getElementById("UserInfo");
  const myH2 = document.createElement("h2");
  const userDataParsed = "Welcome " + obj["data"]["message"]["name"];
  myH2.textContent = userDataParsed;
  userInfo.replaceWith(myH2);
}

const stylez = (theme) => ({
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});
export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(classes.imgRaised, classes.imgFluid);
  const email = localStorage.getItem("email");
  const { theme } = props;
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  axios
    .post("http://localhost:8000/api/userget/", {
      email: email,
    })
    .then(function (response) {
      const userData = response;
      populateHeader(userData);
      console.log(userData);
      return;
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <div>
      <Header
        color="transparent"
        brand="Forest of Hearts"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <WaveBorder
          upperColor="#90EE90"
          lowerColor="#FFFFFF"
          className={classes.waveBorder}
          animationNegativeDelay={2}
        />
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <div id="UserInfo"></div>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <div>
                  <h5 className={classes.title}>
                    Welcome to your profile page. We’re really excited to be
                    working with you to save our environment and reduce our
                    carbon footprints!
                  </h5>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h5 className={classes.title}>
                  This page is designed to show you the results of your Carbon
                  Footprint Net-Zero questionnaire. It tracks all your answers
                  and then calculates your footprint. The application then takes
                  your answers and gives you a list of goals based on your
                  activities.
                </h5>
                <GridContainer
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <GridItem xs={12} sm={12} md={2}>
                    <Link to={"/net-zero-business"}>
                      <Button color="primary" round>
                        Net-Zero Quiz
                      </Button>
                    </Link>
                  </GridItem>
                </GridContainer>
                <h5 className={classes.title}>
                  You can change answers in the quiz at any point if your
                  answers change. This can then recalculate your goals and
                  change the resources to your new and improved answers.
                </h5>
              </GridItem>
            </GridContainer>
            <Box m={4}>
              <NavPills
                vertical={{
                  tabsGrid: { xs: 12, sm: 4, md: 2 },
                  contentGrid: { xs: 12, sm: 8, md: 10 },
                }}
                color="info"
                tabs={[
                  {
                    tabButton: "Goals and Settings",
                    tabIcon: SettingsIcon,
                    tabContent: (
                      <div>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <Card>
                              <CardBody>
                                <h3 className={classes.title}>
                                  Achieveable Goals
                                </h3>
                                <div>
                                  <ul>
                                    <li>Insulate my house</li>
                                    <li>Reduce meat consumption</li>
                                    <li>Install solar panels</li>
                                    <li>Recycle more</li>
                                    <li>Switch off not standby</li>
                                  </ul>
                                </div>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </div>
                    ),
                  },
                  {
                    tabButton: "Transport",
                    tabIcon: DirectionsCarIcon,
                    tabContent: <TransportValues />,
                  },
                  {
                    tabButton: "Reducing Energy",
                    tabIcon: Bolt,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardBody>
                              <h3 className={classes.title}>Resources</h3>
                              <div>
                                <ul>
                                  <li>How to insulate a house</li>
                                  <li>Best vegan alternatives</li>
                                  <li>How to apply for green homes grant</li>
                                  <li>What can you recycle?</li>
                                </ul>
                              </div>
                            </CardBody>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: "Contact Us",
                    tabIcon: ContactSupport,
                    tabContent: <ContactSection />,
                  },
                ]}
              />
            </Box>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
ProfilePage.propTypes = {
  theme: PropTypes.object,
};
/* eslint-disable no-unused-vars */
