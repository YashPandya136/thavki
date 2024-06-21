import { cn } from "../../lib/utils";
import React from "react";

const Section = ({ children, className, ...rest }) => {
  return (
    <section
      className={cn("w-full px-10 py-10 lg:py-14 lg:px-32", className)}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
