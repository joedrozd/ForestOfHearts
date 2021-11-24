import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk carbon footprint</h2>
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
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
