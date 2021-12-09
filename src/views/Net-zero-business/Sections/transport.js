import React from "react";
import { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
/* eslint-disable no-unused-vars */
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import transport from "../../../assets/img/transport.jpg";
import CustomInput from "components/CustomInput/CustomInput.js";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function Transport() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const [values, setValues] = useState({
    emission_factor: "",
    parameters: {
      distance: {},
      distance_unit: "",
    },
    metadata: {
      scope: "",
      category: "",
    },
  });
  const saveFormData = async () => {
    const response = await fetch("http://localhost:8000/api/vehicle", {
      method: "POST",
      headers: {
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
      alert("Your results are ready!");
      setValues({
        emission_factor:
          "passenger_vehicle-vehicle_type_sports_car-fuel_source_diesel-engine_size_na-vehicle_age_na-vehicle_weight_na",
        parameters: {
          distance: 100,
          distance_unit: "km",
        },
        metadata: {
          scope: "2",
          category: "string",
        },
      });
      console.log(values);
    } catch (e) {
      alert(`Results failed! ${e.message}`);
    }
  };

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Transport and Travel</h2>

      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            {" "}
            <h5 className={classes.description}>
              Transport and travel accounts for around one-fifth of global
              carbon emissions. In countries where travel in vehicles is more
              frequent it can be one of the biggest impacts on your personal
              carbon footprint. This is where an individual can have a large
              change in your carbon footprint by changing your transport habits
              or vehicle type.{" "}
            </h5>
            <h5 className={classes.description}>
              It also reduces use of petrol, diesel, and gasoline by not wasting
              them in commuting to work. While for some, being at work is
              unavoidable, working from home might completely change the game
              when it comes to greenhouse emissions.{" "}
            </h5>
            <h5 className={classes.description}>
              This section looks at your travel and transport. We’re going to
              look at commuting, holidays, and many more things when calculating
              this part of your carbon footprint. The travel and transport
              section for UK and US residents is thought to be the highest slice
              of their carbon footprint pie.
            </h5>
            <h5 className={classes.description}>
              After the calculations there are many things to consider. Can you
              cut back on commuting and work from home? Can you use public
              transport? Could you cycle or walk to work instead of driving? The
              statistics even show many taxis to be almost twice as fuel
              inefficient as most road cars due to their size. Is it possible to
              cut back on big taxi use when only a small number of people are
              travelling? Can you carpool with colleagues?
            </h5>
            <h5 className={classes.description}>
              We will get into this further around the questions and try to give
              you some statistics on where energy is spent and where energy can
              be saved.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <img src={transport} className={imageClasses} />
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>
          Add a vehicle, enter the following data and then either add another
          vehicle or submit and see results.
        </h3>
        <form id="vehicle" onSubmit={onSubmit}>
          <h3 className={classes.title}>What type of car do you have?</h3>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Car type?
                </InputLabel>
                <NativeSelect
                  defaultValue="small"
                  id="car-type"
                  value={values.car_type}
                  inputProps={{
                    name: "vehicle",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={0}>Hybrid</option>
                  <option value={1}>Petrol</option>
                  <option value={2}>Diesel</option>
                </NativeSelect>
              </FormControl>
            </GridItem>
          </GridContainer>
          <h3 className={classes.title}>
            What type of fuel does your car use?{" "}
          </h3>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Fuel type?
                </InputLabel>
                <NativeSelect
                  defaultValue="gas"
                  id="fuel-type"
                  value={values.fuel_type}
                  inputProps={{
                    name: "vehicle",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={0}>Petrol</option>
                  <option value={1}>Hybrid</option>
                  <option value={2}>Biogas</option>
                  <option value={3}>Diesel</option>
                  <option value={4}>Natural Gas</option>
                  <option value={5}>Electric</option>
                  <option value={6}>Biodiesel</option>
                  <option value={7}>Ethanol 85</option>
                  <option value={8}>Ethanol 10</option>
                  <option value={9}>Plug In Hybrid</option>
                </NativeSelect>
              </FormControl>
            </GridItem>
          </GridContainer>
          <h3 className={classes.title}>How fuel efficient is your car? </h3>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Miles per gallon"
                id="mpg"
                value={values.mpg}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </GridContainer>
          <h3 className={classes.title}>
            How many km do you drive in a year on average?
          </h3>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Miles driven per year"
                id="miles"
                value={values.miles}
                formControlProps={{
                  fullWidth: true,
                }}
              />
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
