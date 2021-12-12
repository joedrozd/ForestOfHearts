import React from "react";

import { useState } from "react";
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
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import axios from "axios";
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
  let [gasUse, setGasUse] = useState("");
  const handleChange2 = (event) => {
    setGasUse(event.target.value);
  };
  let [fuelType, setFuelType] = useState("");
  const handleChange3 = (event) => {
    setFuelType(event.target.value);
  };
  let [solarPanel, setSolarPanel] = useState("");
  const handleChange4 = (event) => {
    setSolarPanel(event.target.value);
  };
  let [averageRating, setAverageRating] = useState("");
  const handleChange5 = (event) => {
    setAverageRating(event.target.value);
  };
  let [standby, setStandby] = useState("");
  const handleChange6 = (event) => {
    setStandby(event.target.value);
  };

  const submitForm = async (event) => {
    event.preventDefault(); // Prevent default submission
    const electric = document.getElementById("electricUse").value;
    axios
      .post(`http://localhost:8000/api/energy/`, { electric })
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        return jsonData;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
    console.log("s-done");
  };
  const submitForm2 = async (event) => {
    event.preventDefault(); // Prevent default submission
    const gas = document.getElementById("gasUse").value;
    axios
      .post(`http://localhost:8000/api/gas/`, { gas })
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        return jsonData;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
    console.log("s-done");
  };
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
        <form id="energy" onSubmit={submitForm}>
          <h3 className={classes.title}>
            How much gas and electric do you use per year in your house?
          </h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Electric used: kWh per year"
                id="electricUse"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Button color="primary" round type="submit">
                Submit
              </Button>
            </GridItem>
          </GridContainer>
        </form>
        <form id="gas" onSubmit={submitForm2}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Gas used: Pounds(£) spent on Gas"
                id="gasUse"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Button color="primary" round type="submit">
                Submit
              </Button>
            </GridItem>
          </GridContainer>
        </form>
        <form id="infoEnergy">
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
                  value={fuelType}
                  onChange={handleChange3}
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
            Have you installed solar panels on your place of residence?{" "}
          </h3>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultUnchecked />}
                  label="Yes"
                  value={solarPanel}
                  onChange={handleChange4}
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
                  value={averageRating}
                  onChange={handleChange5}
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
                  onChange={handleChange6}
                  value={standby}
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
