import PropTypes from "prop-types";
import { STRUCTURED_DATA_TYPES } from "../utilities/constants";
import { removeEmptyValues } from "../utilities/remove-empty-values";
import StructuredData from "./StructuredData";
import React from "react";

const OrganizationData = ({ url, name, logoUrl, id, socialUrls }) => {
  const cleanedData = removeEmptyValues({ sameAs: socialUrls });
  return (
    <StructuredData
      id={id}
      logo={{ "@type": STRUCTURED_DATA_TYPES.IMAGE_OBJECT, url: logoUrl }}
      name={name}
      type={STRUCTURED_DATA_TYPES.ORGANIZATION}
      url={url}
      {...cleanedData}
    />
  );
};

OrganizationData.propTypes = {
  id: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  socialUrls: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string.isRequired,
};

OrganizationData.defaultProps = {
  socialUrls: null,
};

export default OrganizationData;
