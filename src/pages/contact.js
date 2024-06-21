import TitleSection from "../components/TitleSection";

import React from "react";
import SEOComponent from "../components/SEO";
import { CONTACT_SEO_DATA } from "../components/SEO/utilities/constants";
import ContactSection from "../components/ContactSection";


const Contact = () => {
  return (
    <>
      <SEOComponent title={CONTACT_SEO_DATA.title} description={CONTACT_SEO_DATA.description} keywords={CONTACT_SEO_DATA.keywords} />
      <TitleSection className='pb-5'>
        <div className="flex justify-center">
          <span>Contact Us</span>
        </div>
      </TitleSection>
      <ContactSection />
      {/* <div className="w-full mb-4 h-96">
        <CustomMap
          center={[-37.8309126, 144.9598544]}
          zoom={15}
          markerCustomIcon={!!markerCustomIcon ? markerCustomIcon : null}
          className="w-full h-full"
        />
      </div> */}
    </>
  );
};

export default Contact;
