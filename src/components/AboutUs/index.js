import React from "react";
import Section from "../Section";
import GlobalButton from "../GlobalButton";
import TitleSection from "../TitleSection";
import { Link } from "gatsby";

const AboutUs = () => {
  return (
    <>
      <TitleSection className="flex flex-col items-center justify-center bg-background">
        <div>
          <span>About Us</span>
        </div>
      </TitleSection>
      <Section>
        <div className="flex flex-col items-center space-y-5 text-sm">
          <span className="text-center w-full md:w-[80%]">
            With our history of excellence in silk weaving and Processing, we
            offer a wide variety of gorgeous silk sarees That you will fall in
            love with. Our collection includes Kanjivaram silk
            sarees,dharmavaram silk sarees, kattu silk Sarees, pure silk sarees,
            and many more options. We believe that there are perfect sarees for
            every occasion, weddings, Anniversaries, festivals and parties.
          </span>
          <span className="text-center w-full md:w-[80%]">
            Our production unit is equipped with the latest technology and
            machinery, which allows us to manufacture silk sarees that are of
            the highest quality while still being affordable.
          </span>
        </div>
        <div className="flex justify-center w-full pt-10 ">
          <Link to="/about">
            <GlobalButton text="Learn More" variant="default" />
          </Link>
        </div>
      </Section>
    </>
  );
};

export default AboutUs;
