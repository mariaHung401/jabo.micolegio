import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderLeft from "components/Header/HeaderLeft.js";
import Parallax from "components/Parallax/Parallax.js";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";
import InfoArea from "components/InfoArea/InfoArea.js";

import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import Danger from "components/Typography/Danger.js";

import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import BookIcon from '@material-ui/icons/Book';

import logo from "assets/img/fotosCol/logo2.png";
import image from "assets/img/fotosCol/letras.png";

import image1 from "assets/img/fotosCol/maestras1.jpg";
import image2 from "assets/img/fotosCol/maestras2.jpg";
import image3 from "assets/img/fotosCol/maestras.jpg";

import image4 from "assets/img/fotosCol/niños-actividad1.jpg";
import image5 from "assets/img/fotosCol/niños-actividad3.jpg";
import image7 from "assets/img/fotosCol/niños-bienvenidos.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import styleslog from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);
const useStyleslog = makeStyles(styleslog);

export default function Components(props) {
  const classes = useStyles();
  const classeslog = useStyleslog();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div>
      <Header
        leftLinks={<HeaderLeft />}
        rightLinks={<HeaderLinks />}
        fixed
        color="black"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/fotosCol/fondo.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classeslog.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={7}>
                <div className={classes.profile}>
                  <div>
                    <img src={logo} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <Danger>
                      <h3 className={classes.title}>
                        C. E. I Jose Antonio Butron Olivares
                      </h3>
                    </Danger>
                    <h6>
                      <Danger>
                        <strong>JABO</strong>
                      </Danger>
                    </h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridContainer justify="center" xs={12} sm={12} md={12}>
                <GridItem xs={12} sm={12} md={9} className={classes.title}>
                  <h4>
                    <strong>
                      Ofrecemos servicio de educación inicial a niños de 1 a 5 años de edad , para promover su desarrollo integral mediante la acción comprometida e intencionada de todos los agentes educativos involucrados en el proceso a través de diversas alternativas educacionales que correspondan a sus necesidades, intereses y condiciones .
                    </strong>
                  </h4>
                </GridItem>
                <GridItem xs={12} sm={12} md={7} className={classes.marginAuto}>
                  <Card carousel>
                    <Carousel {...settings}>
                      <div>
                        <img
                          src={image1}
                          alt="First slide"
                          className="slick-image"
                        />
                      </div>
                      <div>
                        <img
                          src={image2}
                          alt="First slide"
                          className="slick-image"
                        />
                      </div>
                      <div>
                        <img
                          src={image3}
                          alt="First slide"
                          className="slick-image"
                        />
                      </div>
                    </Carousel>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={2} className={classes.title}>
                  <Danger>
                    <h6>
                      <strong>JOSE ANTONIO BUTRON OLIVARES:</strong> <br />
                    </h6>
                  </Danger>
                  <Danger>
                    <h6>
                      Nació en Venezuela en los PUERTOS DE ALTAGRACIA [Zulia] en 1880 fue periodista poeta y ensayista participo en tres de los grupos literarios mas importantes de su época, fundo la revista SELECCIÓN y colaboro con los periódicos EL CONSTITUCIONAL, PREGONERO, EXODO, LOS ECOS DEL ZULIA, PROSA Y VERSO. Publico un libro denominado VOCES INGENUAS. Murio en 1956.
                    </h6>
                  </Danger>
                </GridItem>
                <GridItem xs={12} sm={12} md={5} className={classes.marginAuto}>
                  <Card carousel>
                    <Carousel {...settings}>
                      <div>
                        <img
                          src={image7}
                          alt="First slide"
                          className="slick-image"
                        />
                      </div>
                    </Carousel>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={5} className={classes.marginAuto}>
                  <Card carousel>
                    <Carousel {...settings}>
                      <div>
                        <img
                          src={image5}
                          alt="First slide"
                          className="slick-image"
                        />
                      </div>
                    </Carousel>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={5} className={classes.marginAuto}>
                  <Carousel {...settings}>
                    <div>
                      <img
                        src={image}
                        alt="First slide"
                        className="slick-image"
                      />
                    </div>
                  </Carousel>
                </GridItem>
                <GridItem xs={12} sm={12} md={5} className={classes.marginAuto}>
                  <Card carousel>
                    <Carousel {...settings}>
                      <div>
                        <img
                          src={image4}
                          alt="First slide"
                          className="slick-image"
                        />
                      </div>
                    </Carousel>
                  </Card>
                </GridItem>
              </GridContainer>

              <GridContainer xs={12} sm={12} md={12}>
                <GridItem xs={12} sm={6} md={7} className={classes.navWrapper}>
                  <Card>
                    <GridItem>
                      <InfoArea
                        title="Misión"
                        icon={AccessibilityNewIcon}
                        iconColor="warning"
                        vertical
                      />
                    </GridItem>
                    <GridItem>
                      <div>
                        <h4>
                          <strong>
                            Brindar formación a niños y niñas de una manera integral desarrollando una cultura de inclusión sostenible con contenido pedagógico actualizado y apegado a los intereses de los alumnos. Practicando valores, con conciencia ambiental, vial ,y científico humanista a través de una adecuada gestión institucional para garantizar un real desarrollo de sus potencialidades capacidades y actitudes y mejorar asi su calidad de vida.
                          </strong>
                        </h4>
                      </div>
                    </GridItem>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={4} className={classes.navWrapper}>
                  <Card>
                    <GridItem>
                      <InfoArea
                        title="Visión"
                        icon={BookIcon}
                        iconColor="warning"
                        vertical
                      />
                    </GridItem>
                    <GridItem>
                      <div>
                        <h4>
                          <strong>
                            Ser una institución líder e inclusiva con estándar de calidad educativa y de vida, con practica de valores que responda al entorno social, basada en la innovación y mejoramiento de acuerdo al avance científico-tecnologico.
                          </strong>
                        </h4>
                      </div>
                    </GridItem>
                  </Card>
                </GridItem>
              </GridContainer>
              <SectionCompletedExamples />
            </GridContainer>
            <SectionDownload />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
