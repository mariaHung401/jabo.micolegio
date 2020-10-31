import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

import Success from "components/Typography/Success";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center" xs={12} sm={12} md={12}>
            <h3>
              <strong>Contacta con nosotros!!</strong>
            </h3>
          </GridContainer>
          <Button
            href="https://www.instagram.com/preescolaramiguitos/"
            color="info"
          >
            <i className={classes.socials + " fab fa-instagram"} />
            siguenos
          </Button>
          <hr />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Success>
                <h4>Horario</h4>
                <h6>7:00am - 1:00pm</h6>
              </Success>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Success>
                <h4>Dirección</h4>
                <h6>
                  Urb. Urdaneta <br />
                  Av. Principal. <br />
                  Maracaibo - Zulia.
                </h6>
              </Success>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
