import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Button from "components/CustomButtons/Button.js";

import ListItem from "@material-ui/core/ListItem";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} justify="center">
        <Button
          href="#"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          <EmojiPeopleIcon className={classes.icons} /> Tareas
        </Button>
      </ListItem>
      <ListItem className={classes.listItem} justify="center">
        <Button
          href="http://aprende.micole.red/"
          className={classes.navLink}
          color="transparent"
          target="_blank"
        >
          <DirectionsRunIcon className={classes.icons} /> Aprende Micolegio
        </Button>
      </ListItem>
    </List>
  );
}
