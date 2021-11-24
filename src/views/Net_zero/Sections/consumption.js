import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
/* eslint-disable no-unused-vars */
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import consumption_img from "../../../assets/img/consumption.jpg";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import Slider from "nouislider";
const useStyles = makeStyles(styles);

export default function Consumption() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgFluid);
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular3")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular3"), {
        start: [0],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  });
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular4")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular4"), {
        start: [0],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  });
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular5")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular5"), {
        start: [0],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  });
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular6")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular6"), {
        start: [0],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  });
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular7")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular7"), {
        start: [0],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  });
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Consumption</h2>
      <div>
        <h3 className={classes.title}>Introduction</h3>
        <img src={consumption_img} className={imageClasses} />
        <h3 className={classes.title}>
          What percentage of your food is locally sourced?{" "}
        </h3>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div id="sliderRegular3" className="slider-primary" />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>How much meat do you eat on average? </h3>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "meat_value",
                id: "uncontrolled-native",
              }}
            >
              <option value={0}>Zero</option>
              <option value={1}>1-2 Portions a day</option>
              <option value={2}>3-4 Portions a day</option>
              <option value={3}>5-6 Portions a day</option>
            </NativeSelect>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>Do you cook in batches at all? </h3>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox defaultUnchecked />}
                label="Yes"
              />
              <FormControlLabel
                control={<Checkbox defaultUnchecked />}
                label="Sometimes"
              />
              <FormControlLabel
                control={<Checkbox defaultUnchecked />}
                label="No"
              />
            </FormGroup>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>How much dairy do you consume? </h3>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "dairy_value",
                id: "uncontrolled-native",
              }}
            >
              <option value={0}>Zero</option>
              <option value={1}>1-2 Portions a day</option>
              <option value={2}>3-4 Portions a day</option>
              <option value={3}>5-6 Portions a day</option>
            </NativeSelect>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>
          Where possible do you avoid palm oil products?{" "}
        </h3>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox defaultUnchecked />}
                label="Yes"
              />
              <FormControlLabel
                control={<Checkbox defaultUnchecked />}
                label="Sometimes"
              />
              <FormControlLabel
                control={<Checkbox defaultUnchecked />}
                label="No"
              />
            </FormGroup>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>
          Do you buy waste free packages? Including taking your own bagging to
          shops{" "}
        </h3>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox defaultUnchecked />}
                label="Yes"
              />
              <FormControlLabel
                control={<Checkbox defaultUnchecked />}
                label="Sometimes"
              />
              <FormControlLabel
                control={<Checkbox defaultUnchecked />}
                label="No"
              />
            </FormGroup>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>
          Are the clothes you buy sustainably source?{" "}
        </h3>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div id="sliderRegular4" className="slider-primary" />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>Are the clothes you buy second hand? </h3>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div id="sliderRegular5" className="slider-primary" />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>Do you avoid single use plastics? </h3>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox defaultUnchecked />}
                label="Yes"
              />
              <FormControlLabel
                control={<Checkbox defaultUnchecked />}
                label="Sometimes"
              />
              <FormControlLabel
                control={<Checkbox defaultUnchecked />}
                label="No"
              />
            </FormGroup>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>
          How much do you recycle your waste packaging?{" "}
        </h3>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div id="sliderRegular6" className="slider-primary" />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>
          Do you reuse containers, water bottles and other things?{" "}
        </h3>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div id="sliderRegular7" className="slider-primary" />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>
          Have you ever repurposed furniture items (upcycle) or brought
          second-hand appliances or furniture?{" "}
        </h3>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox defaultUnchecked />}
                label="Yes"
              />
              <FormControlLabel
                control={<Checkbox defaultUnchecked />}
                label="Sometimes"
              />
              <FormControlLabel
                control={<Checkbox defaultUnchecked />}
                label="No"
              />
            </FormGroup>
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
