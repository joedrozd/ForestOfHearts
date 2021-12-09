import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// @material-ui/icons
/* eslint-disable no-unused-vars */
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import Slider from "nouislider";
const useStyles = makeStyles(styles);

export default function Reduce_energy() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  return (
    <div className={classes.section}>
      <div>
        <h3 className={classes.title}>Reducing energy usage</h3>
        <h5 className={classes.description}>
          <br />
        </h5>
        <h3 className={classes.title}>
          How much gas and electric do you use per year in your house?
        </h3>
        <br />
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Electric used kWh per year"
              id="float"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Gas used kWh per year"
              id="float"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>

        <h3 className={classes.title}>Do you have a smart meter?</h3>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={checkedA}
                  onChange={(event) => setCheckedA(event.target.checked)}
                  value="checkedA"
                  classes={{
                    switchBase: classes.switchBase,
                    checked: classes.switchChecked,
                    thumb: classes.switchIcon,
                    iconChecked: classes.switchIconChecked,
                    track: classes.switchBar,
                  }}
                />
              }
              classes={{
                label: classes.label,
              }}
              label="Smart meter?"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
/* eslint-disable no-unused-vars */
