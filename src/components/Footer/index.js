import { FOOTER_LINKS } from "../../utilities/constants";
import { cn } from "../../lib/utils";
import React from "react";
import Section from "../Section";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <Section className={"bg-primary px-10 py-10 lg:py-8 lg:px-32"}>
      <footer>
        <div className={cn("w-full bg-primary")}>
          <div className={cn("m-auto flex flex-wrap lg:flex-nowrap lg:gap-4")}>
            <div
              className={cn(
                "w-full lg:w-1/2 text-2xl lg:text-3xl lg:text-5xl my-3 font-bold space-y-2 lg:space-y-5 text-white"
              )}
            >
              <h1>Embrace Elegance,</h1>
              <h1>Celebrate Tradition</h1>
              <h1>With Thavki</h1>
            </div>
            <div className={cn("w-full lg:w-1/2  flex flex-wrap flex-row")}>
              <div className={cn("w-1/2 flex justify-start")}>
                <ul className={cn("[&>*]:my-4  lg:[&>*]:m-3 lg:[&>*]:pl-0 ")}>
                  {FOOTER_LINKS.slice(0, 3).map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className={cn(
                          "cursor-pointer text-white hover:text-secondary"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cn("w-1/2 flex justify-start")}>
                <ul className={cn("[&>*]:my-4  lg:[&>*]:m-3 lg:[&>*]:pl-0")}>
                  {FOOTER_LINKS.slice(3).map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className={cn(
                          "cursor-pointer text-white hover:text-secondary"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cn("w-full flex justify-start")}>
                <div
                  className={cn("w-full [&>*]:my-4 lg:[&>*]:m-3 text-white")}
                >
                  <h4 className={cn("font-semibold text-base")}>Address</h4>
                  <p>
                    0 - 2794, 95, 96, 97 Upper Ground Millenium Textile Market,
                    Ring Road, Surat-395002, Gujarat (INDIA)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={cn("h-[1px] bg-white my-4")}></div>
            <div
              className={cn("flex justify-center lg:items-center text-white")}
            >
              <p>
                ©{new Date().getFullYear()} B. K. Silk Mils Pvt. ltd. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
