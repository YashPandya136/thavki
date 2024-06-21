import React from "react";
import HeroSection from "../components/HeroSection";
import Section from "../components/Section";

import RoomsSection from "../components/RoomsSection";
import AboutUs from "../components/AboutUs";

import ContactSection from "../components/ContactSection";
import SEOComponent from "../components/SEO";
import { HOME_SEO_DATA } from "../components/SEO/utilities/constants";

const index = () => {
  return (
    <>
      <SEOComponent
        title={HOME_SEO_DATA.title}
        description={HOME_SEO_DATA.description}
        keywords={HOME_SEO_DATA.keywords}
      />
      <HeroSection />
      <Section>
        <div className="flex items-center justify-center w-full lg:pt-16">
          <span className="flex w-full  lg:w-[80%] text-center text-sm">
            At Thavki Sarees, we have a wide range of silk sarees that are made
            with high-grade quality yarns. We pride ourselves on our designing,
            eye catching colours and comfortability which is why our clients
            love us!
          </span>
        </div>
      </Section>
      <div>
        <RoomsSection />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <ContactSection />
      </div>
    </>
  );
};

export default index;
