import React from "react";
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
        <h3 className={classes.title}>How much do you fly? </h3>
        <h5 className={classes.description}>
          As everyone knows, flights use massive amounts of carbon dioxide and
          will do for the foreseeable future until technology allows for flights
          without burning fuel. The best options for fuel will likely be
          biofuels for the foreseeable future that have a net-negative carbon
          produced to carbon removed by photosynthesis. There are new plane
          companies that claim to emit 22% less carbon dioxide on average. If
          it’s possible to take them it is highly recommended to reduce your
          individual carbon footprint.
        </h5>
        <h5 className={classes.description}>
          This calculation helps us to understand how long and how often you’re
          flying. This can be either a large or small contributor to your carbon
          footprint depending on how much you travel.{" "}
        </h5>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                How often do you fly?
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "fly_value",
                  id: "uncontrolled-native",
                }}
              >
                <option value={1}>Never</option>
                <option value={2}>1-2 times a year to Europe</option>
                <option value={3}>3-5 times around Europe</option>
                <option value={4}>1-2 times Globally or very often</option>
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
          How do you travel around your local area?{" "}
        </h3>
        <h5 className={classes.description}>
          The most efficient ways of travel according to{" "}
          <a href="https://ourworldindata.org/travel-carbon-footprint">
            “ourworldindata.org”
          </a>
          are walking, cycling or train. For example, using a bike instead of
          driving short distances could cut your emissions by around 75%. It is
          difficult in the UK as an island nation to get the train for holidays
          but in mainland Europe you can cut emissions by 84% by getting trains
          instead of flying.
        </h5>
        <h5 className={classes.description}>
          Have you changed with the “electric car revolution”? The difference
          between rail travel and medium sized electric cars is minimal and can
          really have a massive impact on your carbon footprint. This will have
          an even greater impact as the world moves from fossil fuel energy
          generation to renewable, nuclear, and green sources of energy
          generation. Whilst currently, with electric cars tending to be on the
          higher end price range it may seem unavailable for many. Over the next
          decade that is forecasted to change, by 2030 new petrol and diesel
          cars will be banned. Hopefully by that time the infrastructure will
          also have improved to be able to charge your car anywhere you want to
          park.
        </h5>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Vehicle and frequency?
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "local_travel_value",
                  id: "uncontrolled-native",
                }}
              >
                <option value={1}>Walk/Cycle</option>
                <option value={5}>Public Transport mainly</option>
                <option value={10}>Walk/Cycle but sometimes Drive</option>
                <option value={15}>Public Transport but sometimes Drive</option>
                <option value={20}>Drive often</option>
                <option value={30}>Drive for work</option>
              </NativeSelect>
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>What type of fuel does your car use? </h3>
        <h5 className={classes.description}>
          This question helps us to understand the average emission levels of
          your car. We use this question alongside the miles per gallon question
          to generate your cars emission levels. Using this data and average car
          use data and normal transport usage we can then calculate your
          emissions from transport around your local area. If you drive a
          separate car for work please use the car you do most of your general
          use as we will ask about driving for work in later questions.
        </h5>

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Fuel type?
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "vehicle",
                  id: "uncontrolled-native",
                }}
              >
                <option value={0}>Never drive</option>
                <option value={1}>Electric</option>
                <option value={5}>Hybrid</option>
                <option value={20}>Petrol</option>
                <option value={20}>Diesel</option>
              </NativeSelect>
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>How fuel efficient is your car? </h3>
        <h5 className={classes.description}>
          You can find the miles per gallon of your specific car by Googling the
          car make mode and miles per gallon. You could also calculate it
          yourself but it is much easier to use the manufacturers data. For
          electric cars and if you don’t drive at all you can put 0 for this
          question. Hybrid cars will also have a miles per gallon figure. You
          should use the miles per gallon that includes the electric generated
          from the fuel but not electric charged. If you have any questions
          about this please don’t hesitate to use the contact form to ask which
          figure to use.
        </h5>

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Miles per gallon"
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
        <h3 className={classes.title}>Do you work from home or commute? </h3>
        <h5 className={classes.description}>
          The shift to work from home since the start of the planet can have a
          massive impact on carbon emissions worldwide. There have been lots of
          studies on the environmental benefits of work from home and its
          effects on cutting companies’ overall carbon footprint. This is mainly
          from stopping office wastage and the effect of employees not commuting
          has. In fact, one study even found{" "}
          <a href="https://plana.earth/academy/how-to-measure-carbon-footprint-work-from-home/">
            98% of an employees carbon footprint comes from the commute
          </a>
          . This is due to many factors such as distance travelled, traffic
          jams, and many others. It also reduces use of petrol, diesel, and
          gasoline by not wasting them in commuting to work. While for some,
          being at work is unavoidable, working from home might completely
          change the game when it comes to greenhouse emissions.
        </h5>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Work Transport
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "work_commute_value",
                  id: "uncontrolled-native",
                }}
              >
                <option value={1}>Work from Home</option>
                <option value={1}>Walk/Cycle</option>
                <option value={5}>Public Transport</option>
                <option value={20}>Drive</option>
                <option value={20}>Drive over 1 hour</option>
                <option value={35}>Drive for work</option>
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
          How many miles do you drive in a year on average?
        </h3>
        <h5 className={classes.description}>
          This is the end of the transport calculations. If you drive, how many
          miles do you drive in an average year? If you don’t drive, you can put
          either 0 or estimate how many miles you get given lifts in cars or
          taxis. From this value, alongside the other information, we can
          calculate how much carbon dioxide your car produces a year. If you
          drive a company vehicle for work purposes, E.g., delivery driver,
          please exclude these miles from the calculation. You should mainly be
          including your personal vehicles milage.{" "}
        </h5>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Miles driven per year"
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
      </div>
    </div>
  );
}
/* eslint-disable no-unused-vars */
