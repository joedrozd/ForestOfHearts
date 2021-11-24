import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);
/* eslint-disable no-unused-vars */
export default function ProductSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgFluid);
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            Let{"'"}s talk Community Building and Nature Positive Actions
          </h2>
          <h3 className={classes.title}>
            Everyone{"'"}s talking about it, everyone{"'"}s concerned about it,
            but what is it?
          </h3>
          <h5 className={classes.description}>
            Your carbon footprint is the amount of carbon that you (or a person)
            creates with every aspect of their life. From the amount of carbon
            it takes to put food on the table, to the clothes you wear, to the
            car you drive. Our aim is to reduce your carbon footprint to be net
            zero.
          </h5>
          <h3 className={classes.title}>But why does it matter?</h3>
          <h5 className={classes.description}>
            The human impact on the environment in the past 200 years has become
            significant. By producing excess carbon into the atmosphere we are
            heating our planet up by means of the greenhouse effect. It has
            gotten to a stage that if we continue, there will be catastrophic
            effects. It is down to everybody to take steps to reduce their
            carbon and convince their repsentatives to commit to change.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
/* eslint-disable no-unused-vars */
