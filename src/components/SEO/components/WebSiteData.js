import PropTypes from "prop-types";
import { LANGUAGES, STRUCTURED_DATA_TYPES } from "../utilities/constants";
import { removeEmptyValues } from "../utilities/remove-empty-values";
import StructuredData from "./StructuredData";
import React from "react";
const WebSiteData = ({ description, url, language, name }) => {
  const cleanedData = removeEmptyValues({ about: description, description });
  return (
    <StructuredData
      id={url}
      inLanguage={language}
      name={name}
      type={STRUCTURED_DATA_TYPES.WEBSITE}
      url={url}
      {...cleanedData}
    />
  );
};

WebSiteData.propTypes = {
  description: PropTypes.string,
  language: PropTypes.string,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

WebSiteData.defaultProps = {
  description: null,
  language: LANGUAGES.ENGLISH,
};

export default WebSiteData;
