import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);
/* eslint-disable no-unused-vars */
const WelcomeInfo = () => {
  const classes = useStyles();

  /* eslint-enable no-unused-vars */
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            Welcome to our Net-Zero Carbon Quiz!
          </h2>
          <h5 className={classes.description}>
            Welcome to our Net-Zero carbon questionnaire. Below you will find
            all the questions that can calculate your carbon footprint then
            assess where you can make the biggest changes and impacts in
            reducing your carbon footprint. We are using data from the
            University of Berkeley to calculate your footprint based on the
            information you give us.
          </h5>
          <h5 className={classes.description}>
            We hope to give you 3-5 achievable goals on reducing your carbon
            footprint. You can then come back to your profile later to change
            the goals once you feel you have achieved these goals, which will
            then recalculate your carbon footprint and give you even more goals!
          </h5>
          <h5 className={classes.description}>
            We hope you enjoy your time saving the environment with us! Feel
            free to use the contact form at the bottom if you become stuck, are
            unsure, or there is a bug on the page.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default WelcomeInfo;
