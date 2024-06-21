import { cn } from "../../lib/utils";
import React from "react";

const TitleSection = ({ children, className, ...rest }) => {
  return (
    <section
      className={cn(
        "w-full px-10 pt-10 lg:pt-14 lg:px-32 text-2xl font-bold",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default TitleSection;
