import { ABOUTUS_INFORMATION } from "../utilities/constants";
import Section from "../components/Section";
import React from "react";
import TitleSection from "../components/TitleSection";
import SEOComponent from "../components/SEO";
import { ABOUT_SEO_DATA } from "../components/SEO/utilities/constants";


const AboutUSPage = () => {
  return (
    <>
    <SEOComponent title={ABOUT_SEO_DATA.title} description={ABOUT_SEO_DATA.description} keywords={ABOUT_SEO_DATA.keywords}/>
      <TitleSection className="flex flex-col items-center justify-center bg-background">
        <h1>About Us</h1>
      </TitleSection>
      <Section className="pb-14 md:pb-[4.5rem]">
        <div className="px-8 py-8 space-y-6 text-sm leading-8 text-center bg-white shadow-secondaryBox rounded-3xl">
          {ABOUTUS_INFORMATION.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      </Section>
    
    </>
  );
};

export default AboutUSPage;
