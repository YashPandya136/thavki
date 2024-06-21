import PropTypes from "prop-types";
import {
  LOCAL_BUSINESS_SUBTYPES,
  STRUCTURED_DATA_TYPES,
} from "../utilities/constants";
import StructuredData from "./StructuredData";
import React from "react";

const BreadcrumbData = ({ type, address, name, ...data }) => {
  return (
    <StructuredData
      address={address}
      id={type}
      name={name}
      type={type}
      {...data}
    />
  );
};

BreadcrumbData.propTypes = {
  address: PropTypes.shape({
    "@type": "PostalAddress",
    addressCountry: PropTypes.string,
    addressLocality: PropTypes.string,
    addressRegion: PropTypes.string,
    postalCode: PropTypes.number,
    streetAddress: PropTypes.string,
  }).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    STRUCTURED_DATA_TYPES.LOCAL_BUSINESS,
    ...Object.values(LOCAL_BUSINESS_SUBTYPES),
  ]).isRequired,
};

export default BreadcrumbData;
