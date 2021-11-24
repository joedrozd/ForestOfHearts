import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import classNames from "classnames";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { BarChart } from "@material-ui/icons";

import globe from "../../../assets/img/globe.jpg";
const useStyles = makeStyles(styles);
/* eslint-disable no-unused-vars */
export default function ProductSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgFluid);
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
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>How can we help?</h2>
            <h3 className={classes.title}>
              Nature Positive and Community Building
            </h3>
            <h5 className={classes.description}>
              Help us plant trees to provide wildlife friendly hedges that help
              to sequester CO2, reduce pollution and give back to the local
              community. Below are five ways you can help to improve the green
              spaces in the UK and improve wellbeing with Forest of Hearts
              projects at Stratford upon Avon Hospital and other sites in the
              UK. All funds raised go to our health and wellbeing projects
              benefiting people experiencing anxiety, depression and mental
              health difficulties.
            </h5>
            <h3 className={classes.title}>Net-Zero tracking and reporting</h3>
            <h5 className={classes.description}>
              We are developing a web based application where you can track your
              carbon footprint (this website), which then gives you several
              achieveable goals to reduce your carbon footprint. The tool tracks
              your efforts and shows you, on paper, how you can reduce carbon
              levels and tracks your progress.
            </h5>
            <h3 className={classes.title}>Sustainable Development Goals</h3>
            <h5 className={classes.description}>
              We are using the Sustainable Development Goals (SDG) framework
              created by the UN to create a reporting system to allow for full
              transparency of our efforts and goals for the charity. The main
              Sustainable Development goals hit by our charity are as follows:
            </h5>
          </GridItem>
        </GridContainer>
        <Card>
          <CardBody>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div>
                  <h3 className={classes.title}>Forest of Hearts Targets:</h3>
                  <ul>
                    <li>Good Health and Wellbeing</li>
                    <li>Quality Education</li>
                    <li>Life on Land</li>
                    <li>Climate Action</li>
                    <li>Responsible Consumption and Production</li>
                  </ul>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <img
                  src={globe}
                  className="responsive
                "
                  component="img"
                  alt="..."
                />
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Email available"
              description="Feel free to use our emailing system for any queries or talk to a Forest of Hearts representative for more information on using our services for your company."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Data Analysis"
              description="We use complex algorithms and APIs to calculate your carbon footprint and then where you can save on carbon. Fully researched and scientific sources used."
              icon={BarChart}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="We aim only to save data about you on things that involve carbon outside of traffic analysis. We comply with all modern UK standards in terms of data protection."
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
/* eslint-disable no-unused-vars */
