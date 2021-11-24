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

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import Slider from "nouislider";
const useStyles = makeStyles(styles);

export default function Draught() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular1")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular1"), {
        start: [0],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  });
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Miscellaneous</h2>
      <div>
        <h3 className={classes.title}>Draughtproofing</h3>
        <h5 className={classes.description}>
          Draughtproofing is one of the easiest and most effective ways on
          cutting energy costs in buildings such as offices and homes. The
          premise is simple, you stop cold air from coming in and prevent hot
          air from escaping. There are several ways to go about this, such as
          draught excluders, removing unwanted or unnecessary ventilation
          shafts, amongst other things.
          <br />
          The estimated savings on installing draught proofing in the average UK
          home are £60 per year on heating bills. This is also a net positive
          effect on reducing your carbon footprint. By requiring less energy to
          heat your home, less carbon is used to generate the electricity or
          burn the gas. Figures from the Energy Saving Trust suggest that total
          save could be £190 million in the UK, and we could heat an additional
          400,000 homes.
          <br />
          <h3 className={classes.title}>Insulation</h3>
          Insulation is where heat escapes through places such as walls or
          rooves. By adding extra insulation to your house, you not only keep
          the hot air in, but during the summer months, you will likely be
          cooler due to less heat coming in from outside. There are tonnes of
          different types of insulation and where you can insulate in a house.
          <br />
          To learn more about insulation and draughtproofing click on the button
          below!
        </h5>
        <h3 className={classes.title}>
          What would you estimate are the insulation and draughtproofing levels
          in your house?
        </h3>
        <br />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div id="sliderRegular1" className="slider-primary" />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" round>
              Submit
            </Button>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>
          Have you ever taken part in carbon offsetting?{" "}
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
        <h3 className={classes.title}>Do you ever check air miles on food? </h3>
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
