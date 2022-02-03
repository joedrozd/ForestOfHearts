import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import "./results.css";
// @material-ui/icons
/* eslint-disable no-unused-vars */
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import consumption_img from "../../../assets/img/consumption.jpg";
import CustomInput from "components/CustomInput/CustomInput";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import Slider from "nouislider";
const useStyles = makeStyles(styles);
function populateAlcohol(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("alcoholResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populateBaked(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("bakedResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populateCereals(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("cerealResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populateCoffee(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("coffeeResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populateDairy(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("dairyResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populateFruit(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("fruitResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populateCosmetics(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("cosmeticsResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populateFruitjuice(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("fruitjuiceResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populateLaundry(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("laundryResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populateLoo(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("looResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populateMeat(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("meatResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populatePastry(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("pastryResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populatePet(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("petResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populateSeafood(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("seafoodResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populateSoft(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("softResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populateSugar(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("sugarResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populateTobacco(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("tobaccoResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
function populateCleaning(obj) {
  const data = obj["co2e"];
  const userInfo = document.getElementById("cleaningResults");
  const myh3 = " " + data + " kg of CO2 produced each year.";
  userInfo.append(myh3);
}
export default function Consumption() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgFluid);
  const submitFormAlcohol = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("alcoholUse").value;
    const email = localStorage.getItem("email");
    axios
      .post(`/api/alcohol/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateAlcohol(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormBaked = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("bakedUse").value;
    const email = localStorage.getItem("email");
    axios
      .post(`/api/baked/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateBaked(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormCereals = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("cerealUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/cereals/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateCereals(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormCoffee = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("coffeeUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/coffee/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateCoffee(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormCosmetics = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("cosmeticsUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/cosmetics/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateCosmetics(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormSeafood = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("seafoodUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/seafood/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateSeafood(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormFruitjuice = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("fruitjuiceUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/fruitjuice/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateFruitjuice(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormFruit = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("fruitUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/fruit/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateFruit(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormLaundry = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("laundryUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/laundry/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateLaundry(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormMeat = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("meatUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/meat/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateMeat(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormDairy = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("dairyUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/dairy/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateDairy(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormPastry = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("pastryUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/pastry/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populatePastry(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormSugar = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("sugarUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/sugar/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateSugar(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormPet = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("petUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/pet/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populatePet(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormSoft = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("softUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/soft/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateSoft(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormTobacco = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("tobaccoUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/tobacco/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateTobacco(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };
  const submitFormLoo = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("looUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/loo/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateLoo(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };

  const submitFormCleaning = async (event) => {
    event.preventDefault(); // Prevent default submission
    const data = document.getElementById("cleaningUse").value;

    const email = localStorage.getItem("email");
    axios
      .post(`/api/cleaning/`, { data, email })
      .then((res) => {
        const returnText = res.data;
        console.log(returnText);
        populateCleaning(returnText);
        return;
      })
      .catch((error) => {
        console.log("got errr while posting data", error);
      });
  };

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Consumption</h2>
      <div>
        <h3 className={classes.title}>Introduction</h3>
        <img src={consumption_img} className={imageClasses} />
      </div>
      <div>
        <form id="alcohol" onSubmit={submitFormAlcohol}>
          <h3 className={classes.title}>How much do you spend on Alcohol?</h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Alcohol used per year"
                id="alcoholUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="alcoholResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="baked" onSubmit={submitFormBaked}>
          <h3 className={classes.title}>
            How much do you spend on Baked Goods?
          </h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Baked goods used per year"
                id="bakedUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="bakedResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="cereals" onSubmit={submitFormCereals}>
          <h3 className={classes.title}>
            How much do you spend on Cereals (Bread/grain/pasta)?
          </h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Cereals used per year"
                id="cerealUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="cerealResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="coffee" onSubmit={submitFormCoffee}>
          <h3 className={classes.title}>How much do you spend on Coffee?</h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Coffee used per year"
                id="coffeeUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="coffeeResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="cosmetics" onSubmit={submitFormCosmetics}>
          <h3 className={classes.title}>How much do you spend on Cosmetics?</h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Cosmetics used per year"
                id="cosmeticsUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="cosmeticsResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="dairy" onSubmit={submitFormDairy}>
          <h3 className={classes.title}>
            How much do you spend on Dairy and Eggs?
          </h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Dairy/eggs used per year"
                id="dairyUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="dairyResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="pet" onSubmit={submitFormPet}>
          <h3 className={classes.title}>How much do you spend on Pet food?</h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Petfood used per year"
                id="petUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="petResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="soft" onSubmit={submitFormSoft}>
          <h3 className={classes.title}>
            How much do you spend on Soft Drinks?
          </h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Soft Drinks used per year"
                id="softUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="softResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="loo" onSubmit={submitFormLoo}>
          <h3 className={classes.title}>
            How much do you spend on Toilet paper?
          </h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Toilet paper used per year"
                id="looUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="looResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="seafood" onSubmit={submitFormSeafood}>
          <h3 className={classes.title}>How much do you spend on Seafood?</h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Seafood used per year"
                id="seafoodUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="seafoodResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="fruitjuice" onSubmit={submitFormFruitjuice}>
          <h3 className={classes.title}>
            How much do you spend on Fruit Juice?
          </h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Fruit Juice used per year"
                id="fruitjuiceUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="fruitjuiceResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="fruitveg" onSubmit={submitFormFruit}>
          <h3 className={classes.title}>
            How much do you spend on Fruit and Veg?
          </h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Fruit and Veg used per year"
                id="fruitUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="fruitResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="laundry" onSubmit={submitFormLaundry}>
          <h3 className={classes.title}>
            How much do you spend on Laundry liquids?
          </h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Laudry used per year"
                id="laundryUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="laundryResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="meat" onSubmit={submitFormMeat}>
          <h3 className={classes.title}>How much do you spend on Meat?</h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Meat used per year"
                id="meatUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="meatResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="pastry" onSubmit={submitFormPastry}>
          <h3 className={classes.title}>How much do you spend on Pastries?</h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Pastries used per year"
                id="pastryUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="pastryResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="sugar" onSubmit={submitFormSugar}>
          <h3 className={classes.title}>How much do you spend on Sugars?</h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Sugar used per year"
                id="sugarUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="sugarResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="tobacco" onSubmit={submitFormTobacco}>
          <h3 className={classes.title}>How much do you spend on Tobacco?</h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Tobacco used per year"
                id="tobaccoUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="tobaccoResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>

        <form id="Cleaning" onSubmit={submitFormCleaning}>
          <h3 className={classes.title}>
            How much do you spend on Cleaning Materials?
          </h3>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Cleaning materials used per year"
                id="cleaningUse"
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
            <div>
              <div id="UserInfo" className="results">
                <h3 className={classes.title.white} id="cleaningResults">
                  Your Results are:
                </h3>
              </div>
            </div>
          </GridContainer>
        </form>
      </div>
    </div>
  );
}
/* eslint-disable no-unused-vars */
