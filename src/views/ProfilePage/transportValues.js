import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import CollapsibleTable from "./carbonfootprinttable";

const useStyles = makeStyles(styles);
/* eslint-disable no-unused-vars */
export default function TransportValues() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgFluid);
  return (
    <div>
      <h3 className={classes.title}>Transport</h3>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <CollapsibleTable />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h3 className={classes.title}>Positives and Negatives</h3>
          <SnackbarContent
            message={
              <span>
                <b>SUCCESS:</b> You have an electric car! Woooo!
              </span>
            }
            close
            color="success"
            icon={Check}
          />
          <SnackbarContent
            message={
              <span>
                <b>WARNING:</b> You are driving quite a lot! Can you cut it
                back?
              </span>
            }
            close
            color="warning"
            icon={Warning}
          />
          <SnackbarContent
            message={
              <span>
                <b>DANGER:</b> You have 3 vehicles! That is a lot!
              </span>
            }
            close
            color="danger"
            icon="info_outline"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
