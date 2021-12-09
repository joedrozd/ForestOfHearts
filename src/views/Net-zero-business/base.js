import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import PropTypes from "prop-types";
import NavPills from "components/NavPills/NavPills.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
// Sections for this page
import StartingInfo from "./Sections/StartingInfo";

import Reduce_energy from "./Sections/reduce_energy";
import Transport from "./Sections/transport";
import WelcomeInfo from "./Sections/welcome";
import Bolt from "@mui/icons-material/Bolt";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function NetZeroBusiness(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Forest of Hearts"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/bg-nzc.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                Net Zero Carbon Reporting Questionnaire
              </h1>
              <h4>
                Welcome to the Forest of Hearts net zero carbon reporting
                questionnaire. We will ask you 24 questions all surrounding your
                life. Such as home, work, car use, and food consumption. Using
                the values you give us, we will then calculate your Carbon
                Footprint. Then after analysing your data we will give you
                easily achievable goals and targets to turn your Carbon
                Footprint Net Zero.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <WelcomeInfo />
          <NavPills
            color="info"
            tabs={[
              {
                tabButton: "Reducing Energy",
                tabIcon: Bolt,
                tabContent: <Reduce_energy />,
              },
              {
                tabButton: "Transport",
                tabIcon: DirectionsCarIcon,
                tabContent: <Transport />,
              },
            ]}
          />
          <StartingInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
}
NavPills.defaultProps = {
  active: 0,
  color: "primary",
};

NavPills.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.func,
      tabContent: PropTypes.node,
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
  ]),
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object,
  }),
  alignCenter: PropTypes.bool,
};
