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
        <h3 className={classes.title}>
          How much gas and electric do you use per year in your house?
        </h3>
        <br />
        <GridContainer justify="center">
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
        <GridContainer justify="center">
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
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>
          What is the main energy type your provider uses?{" "}
        </h3>
        <h5 className={classes.description}>
          Energy providers can tell you where your energy comes from. For
          example, my energy comes 100% from nuclear energy. There are certain
          providers that provide 100% renewable energy, even some mainstream
          providers have green energy only plans. You can find this information
          in your online account portal for your energy company. <br />
          This is helpful to know as renewable or nuclear energy has a much
          lower carbon footprint than coal, gas, or petroleum-based fuels. You
          can look at switching to the below providers to switch to renewable
          only electricity plans. You might even find you save some money off
          your bill too!{" "}
        </h5>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Energy type
              </InputLabel>
              <NativeSelect
                defaultValue={30}
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
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
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
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
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
              />
            </FormGroup>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h5 className={classes.description}>
          Solar panels work by converting the photons from the sunlight into
          electricity. Solar panels are a fantastic way of getting your energy
          if you own your home and want to invest. There is a certain payback
          period which you can calculate using the formula below. After you pay
          back your initial investment, the solar panels will eventually start
          paying you. This is because, generally, you produce more energy than
          you need and then can sell the rest to the national grid.{" "}
        </h5>

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
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h5 className={classes.description}>
          Your household appliances, especially large ones, will come with an
          energy rating. This will tell you how energy efficient your appliance
          is. The closer to A++ the more energy efficient the appliance is.
          Whilst a small fridge usually uses less energy than a big fridge
          freezer, if you have a large fridge freezer there are usually more
          people in your house. If you want to lower your energy usage, it might
          be helpful to choose more energy efficient appliances and electronics.{" "}
        </h5>
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
