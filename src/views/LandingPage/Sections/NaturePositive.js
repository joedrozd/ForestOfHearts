import * as React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Favorite from "@material-ui/icons/Favorite";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import TreePlanting from "../../../assets/img/tree-planting.jpg";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { Box } from "@mui/system";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import CarbonFootprint from "../../../assets/img/core/carbonfootprint.jpg";
import GrowNow from "../../../assets/img/core/grownow.jpg";
import Hedgerow from "../../../assets/img/core/hedgerow.jpg";
import Orchard from "../../../assets/img/core/orchard.jpg";
import GreenTherapy from "../../../assets/img/core/greentherapy.jpg";

const useStyles = makeStyles(styles);

export default function Nature_Positive() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Nature Positive</h2>
      <Box m={2}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card sx={{ maxWidth: 480 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={TreePlanting}
                  alt="green iguana"
                  className="zoom"
                />
                <CardContent>
                  <h2 className={classes.title}>Tree Planting</h2>
                  <h5 className={classes.description}>
                    Help us plant 2021 trees to provide wildlife friendly hedges
                    that help to sequester CO2, reduce pollution and give back
                    to the local community. Below are five ways you can help to
                    improve the green spaces in the UK and improve wellbeing
                    with Forest of Hearts projects at Stratford upon Avon
                    Hospital and other sites in the UK. All funds raised go to
                    our health and wellbeing projects benefiting people
                    experiencing anxiety, depression and mental health
                    difficulties.
                  </h5>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" round>
                  <Favorite className={classes.icons} /> Connect
                </Button>
              </CardActions>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card sx={{ maxWidth: 480 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={Hedgerow}
                  alt="green iguana"
                  className="zoom"
                />
                <CardContent>
                  <h2 className={classes.title}>Hedgerow planting</h2>
                  <h5 className={classes.description}>
                    This year you can help us plant over 1000 metres of hedgerow
                    which will act as a haven for wildlife and biodiversity. The
                    main function of the hedgerows is to create a natural
                    windbreak which in turn will help to create a micro-climate
                    which is conducive to supporting the mix of edible plants
                    that will make up the forest garden. You can get involved by
                    sponsoring a meter of hedgerow now.
                  </h5>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" round>
                  <Favorite className={classes.icons} /> Connect
                </Button>
              </CardActions>
            </Card>
          </GridItem>
        </GridContainer>
      </Box>
      <Box m={2}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card sx={{ maxWidth: 480 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={GreenTherapy}
                  alt="green iguana"
                  className="zoom"
                />
                <CardContent>
                  <h2 className={classes.title}>Green Therapy</h2>
                  <h5 className={classes.description}>
                    Green Therapy offers a skills programme of weekly activities
                    for local people who are inactive or long term unemployed,
                    experiencing social isolation and/or poor wellbeing.
                  </h5>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" round>
                  <Favorite className={classes.icons} /> Connect
                </Button>
              </CardActions>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <Card sx={{ maxWidth: 480 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={GrowNow}
                  alt="green iguana"
                  className="zoom"
                />
                <CardContent>
                  <h2 className={classes.title}>Grow Now</h2>
                  <h5 className={classes.description}>
                    Grow Now is an innovative programme which provide
                    opportunities to grow skills, knowledge, contacts and
                    confidence whilst helping to create the Garden of Wellbeing
                    at Stratford upon Avon Hospital. The project is funded by
                    the European Social Fund and the Education and Skills
                    Funding Agency, and supported by the Local Enterprise
                    Partnership.
                  </h5>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" round>
                  <Favorite className={classes.icons} /> Connect
                </Button>
              </CardActions>
            </Card>
          </GridItem>
        </GridContainer>
      </Box>
      <Box m={2}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card sx={{ maxWidth: 480 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={CarbonFootprint}
                  alt="green iguana"
                  className="zoom"
                />
                <CardContent>
                  <h2 className={classes.title}>Carbon Zero Event Day</h2>
                  <h5 className={classes.description}>
                    Carbon Zero Event Day. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dol
                  </h5>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" round>
                  <Favorite className={classes.icons} /> Connect
                </Button>
              </CardActions>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card sx={{ maxWidth: 480 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={Orchard}
                  alt="green iguana"
                  className="zoom"
                />
                <CardContent>
                  <h2 className={classes.title}>Orchard</h2>
                  <h5 className={classes.description}>
                    The Forest of Hearts Traditional Orchard will be planted
                    with a number of fruit trees. The orchard will be a place of
                    peace and tranquility aimed at growing a wide range of
                    heritage and popular apples, pears, plums, cherries, quince
                    and medlars.
                  </h5>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" round>
                  <Favorite className={classes.icons} /> Connect
                </Button>
              </CardActions>
            </Card>
          </GridItem>
        </GridContainer>
      </Box>
    </div>
  );
}
