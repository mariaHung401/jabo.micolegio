import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import styles from "assets/jss/material-kit-react/components/headerLeftStyle.js";
import logo from "assets/img/fotosCol/logo.png";

const useStyles = makeStyles(styles);

export default function HeaderLeft() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.icons}>
        <img src={logo} />
      </ListItem>
      <ListItem className={classes.listItem} justify="center">
        <h6>Jose Antonio Butron Olivares</h6>
      </ListItem>
    </List>
  );
}
