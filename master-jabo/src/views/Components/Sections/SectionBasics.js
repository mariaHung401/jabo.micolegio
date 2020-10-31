import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Success from "components/Typography/Success.js";

// import image1 from "assets/img/colegio/cuadro.png";
// import image2 from "assets/img/colegio/cuadro1.png";
// import image3 from "assets/img/colegio/cuadro2.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center" xs={12} sm={12} md={12}>
          <GridItem xs={12} sm={12} md={12}>
            <Success>
              <h3>
                <strong>Sección 1</strong>
              </h3>
            </Success>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
