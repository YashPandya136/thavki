import React from "react";
import PropTypes from "prop-types";
import Img from "../Img";
import Icon from "../Icon";
import { cn } from "../../lib/utils";

const Image = ({ children, img, svg, svgIcon, bg, className, ...rest }) => {
  if (img) {
    return <Img src={img} className={className} {...rest} />;
  }
  if (svg || svgIcon) {
    return svg || <Icon svg={svgIcon} className={className} {...rest} />;
  }
  if (bg || children) {
    return (
      <div className={cn(`bg-${bg}`, className)} {...rest}>
        {children}
      </div>
    );
  }
};
Image.propTypes = {
  bg: PropTypes.string,
  img: PropTypes.string,
  svg: PropTypes.node,
  svgIcon: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  bg: "",
  img: "",
  svg: null,
  svgIcon: "",
  sx: "",
};
export default Image;
