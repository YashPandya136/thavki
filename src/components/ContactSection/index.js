import React from "react";
import Section from "../Section";
import Icon from "../Icon";
import { email } from "../../utilities/constants";
import "leaflet/dist/leaflet.css";

import HotelPing from "../../../static/images/hotel_pin.png";
import L from "leaflet";
import CustomMap from "../CustomMap";

let markerCustomIcon = "";
if (typeof window !== "undefined") {
  markerCustomIcon = new L.Icon({
    iconUrl: HotelPing,
    iconSize: [30, 51], // size of the icon
    iconAnchor: [1, 51],
    popupAnchor: [15, -40],
  });
}

const ContactSection = () => {
  return (
    <Section className="flex flex-col items-center justify-center bg-accent">
      <div className="flex flex-col w-full md:flex md:flex-row">
        <div className="w-full md:w-1/2">
          <CustomMap
            center={[21.1879555, 72.8433341]}
            zoom={20}
            markerCustomIcon={!!markerCustomIcon ? markerCustomIcon : null}
            className="w-full h-72"
          />
        </div>
        <div className="w-full text-base lg:w-1/2">
          <div className="flex flex-col space-y-4 lg:m-5">
            <span className="font-bold text-center lg:text-start">
              B. K. Silk Mils Pvt.ltd.
            </span>
            <span>
              0 - 2794, 95, 96, 97 Upper Ground Millenium Textile Market, Ring Road, Surat-395002, Gujarat (INDIA)
            </span>
            <div className="flex items-center space-x-2">
              <Icon
                svg="Call"
                className="w-8 h-8 mr-1 lg:w-5 lg:h-5 lg:mr-0 "
              />
              <span>
                +91 93766 08799
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon
                svg="email"
                className="w-8 h-8 mr-1 lg:w-5 lg:h-5 lg:mr-0"
              />
              <span>{email}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
