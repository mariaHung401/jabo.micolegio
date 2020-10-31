import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

import image1 from "assets/img/fotosCol/actividad3.jpg";
import image2 from "assets/img/fotosCol/actividad5.jpg";
import image3 from "assets/img/fotosCol/actividad6.jpg";
import image4 from "assets/img/fotosCol/actividad8.jpg";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
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
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3>
              <strong>Objetivo General</strong>
            </h3>
            <h4>
              <strong>
                Brindar las condiciones necesarias para que los niños y niñas se desarrollen plenamente potenciando básicamente su inteligencia cognitiva, socioemocional y psicomotor a través del desarrollo de las capacidades establecidas en las áreas de desarrollo.
              </strong>
            </h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={image2} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={image3} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={image4} alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
