import React from "react";
import { Button } from "../ui/button";
import Icon from "../Icon";
import { cn } from "../../lib/utils";

const GlobalButton = ({ text, svgName, onClick, variant, ...rest }) => {
  return (
    <div>
      <Button onClick={onClick} variant={variant} {...rest}>
        {svgName && (
          <Icon
            svg={svgName}
            alt="Button Image"
            className={cn(`w-6 h-6  ${text && text ? "mx-2" : "mr-0"}`)}
          />
        )}
        {text}
      </Button>
    </div>
  );
};

export default GlobalButton;
