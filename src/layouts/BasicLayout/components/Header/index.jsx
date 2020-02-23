import React, { Fragment } from "react";
import image from "./images/title.png";

const Header = () => {
  return (
    <Fragment>
      <img style={{ width: "100%", height: "100%" }} src={image} />
    </Fragment>
  );
};

export default Header;
