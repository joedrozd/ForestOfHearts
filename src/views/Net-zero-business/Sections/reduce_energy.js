import React from "react";

import { useState } from "react";
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
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import energy_solar from "../../../assets/img/energy-solar.jpg";
import Slider from "nouislider";
const useStyles = makeStyles(styles);

export default function Reduce_energy() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgFluid);
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  const [values, setValues] = useState({
    electric_type: "",
    gas_type: "",
    smart_meter: "",
    fuel_type: "",
    solar_panel: "",
    average_rating: "",
    standby: "",
  });
  const saveFormData = async () => {
    const response = await fetch("https://beta2.api.climatiq.io/estimate", {
      method: "POST",
      dataType: "jsonp",
      headers: {
        Authorization: "Bearer 	086418AGFV4QHCN9E55CJTQ9JHTV",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      await saveFormData();
      alert("Your registration was successfully submitted!");
      setValues({
        electric_type: "",
        gas_type: "",
        smart_meter: "",
        fuel_type: "",
        solar_panel: "",
        average_rating: "",
        standby: "",
      });
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  };
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular2")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular2"), {
        start: [0],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  });
  return (
    <div className={classes.section}>
      <div>
        <h2 className={classes.title}>Reducing energy usage</h2>
        <h5 className={classes.description}>
          Reducing your energy usage is a great way to reduce your carbon
          footprint. Heating a house and running appliances creates carbon
          emissions by means of gas burning or energy generation. A great way to
          monitor your energy use is by a smart meter. These can get installed
          for free with most major energy providers. They monitor energy by what
          is currently being used in your house. It is attached to your energy
          meter. By checking how much energy you’re currently using we can give
          you an estimate on how much energy you can save by comparing averages
          to national figures.
        </h5>
        <br />
        <img src={energy_solar} className={imageClasses} />
        <h3 className={classes.title}>How to reduce your energy</h3>
        <br />
        <h5 className={classes.description}>
          There are lots of different ways to reduce your energy usage, such as
          not leaving appliances on standby, buying energy efficient appliances
          and white goods, turning lights off when leaving the room, and many
          more. If you fill in the below section it will add your current use to
          your profile, where we calculate your carbon footprint and look for
          key areas where you can reduce your impact on the environment.
          <br />
        </h5>
        <br />
        <form id="energy" onSubmit={onSubmit}>
          <h3 className={classes.title}>
            How much gas and electric do you use per year in your house?
          </h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Electric used kWh per year"
                id="float"
                value={values.electric_use}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Gas used kWh per year"
                id="float"
                value={values.gas_use}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </GridContainer>

          <h3 className={classes.title}>Do you have a smart meter?</h3>
          <GridContainer justify="center">
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
          </GridContainer>
          <h3 className={classes.title}>
            What is the main energy type your provider uses?{" "}
          </h3>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Energy type
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  value={values.fuel_type}
                  inputProps={{
                    name: "energy_type",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Nuclear</option>
                  <option value={5}>Renewable</option>
                  <option value={30}>Natural Gas</option>
                  <option value={40}>Coal</option>
                </NativeSelect>
              </FormControl>
            </GridItem>
          </GridContainer>
          <h3 className={classes.title}>
            What percentage of your energy is from renewable, green, or nuclear
            sources?{" "}
          </h3>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div id="sliderRegular2" className="slider-primary" />
            </GridItem>
          </GridContainer>
          <h3 className={classes.title}>
            Have you installed solar panels on your place of residence?{" "}
          </h3>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultUnchecked />}
                  label="Yes"
                  value={values.solar_panel}
                />
              </FormGroup>
            </GridItem>
          </GridContainer>
          <h3 className={classes.title}>
            What average rating are your household appliances?{" "}
          </h3>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Appliance average rating
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  value={values.average_rating}
                  inputProps={{
                    name: "appliance_rating",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={1}>A++</option>
                  <option value={2}>A+</option>
                  <option value={3}>A</option>
                  <option value={4}>B</option>
                  <option value={5}>C</option>
                  <option value={6}>D</option>
                  <option value={7}>E</option>
                  <option value={8}>F</option>
                  <option value={0}>Unknown</option>
                </NativeSelect>
              </FormControl>
            </GridItem>
          </GridContainer>
          <h3 className={classes.title}>
            Do you leave your appliances on standby, on or off?
          </h3>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Standby - On - Off?
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  value={values.standby}
                  inputProps={{
                    name: "standby_value",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={1}>Off</option>
                  <option value={5}>Standby</option>
                  <option value={20}>On</option>
                </NativeSelect>
              </FormControl>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Button color="primary" round>
                Add another vehicle
              </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Button color="primary" round type="submit">
                Submit
              </Button>
            </GridItem>
          </GridContainer>
        </form>
      </div>
    </div>
  );
}
/* eslint-disable no-unused-vars */
