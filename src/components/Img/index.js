import React from "react";
import PropTypes from "prop-types";
import noImage from "../../../static/images/no-image.png";
import { cn } from "../../lib/utils";

const Img = ({ src, className, ...rest }) => {
  return (
    <img
      src={src || noImage}
      className={cn("inline-block max-w-full align-top", className)}
      {...rest}
    />
  );
};
Img.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

Img.defaultProps = {
  src: "",
  className: "",
};

export default Img;
