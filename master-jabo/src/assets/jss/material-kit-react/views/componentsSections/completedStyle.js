import { container } from "assets/jss/material-kit-react";

import image from "assets/img/fotosCol/fondoCarousel.png";

const completedStyle = {
  section: {
    minHeight: "90vh",
    overflow: "hidden",
    padding: "90px 0",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    margin: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    backgroundImage: "url(" + image + ")",
  },
  container: {
    ...container,
    textAlign: "center !important"
  }
};

export default completedStyle;
