import PropTypes from "prop-types";
import { LOCALE_TYPES } from "../utilities/constants";
import React from "react";

const GenericOGPData = ({
  description,
  image,
  locale,
  title,
  type,
  url,
  siteName,
}) => (
  <>
    <meta content="1200" property="og:image:width" />
    <meta content="630" property="og:image:height" />
    <meta content={description} property="og:description" />
    <meta content={description} property="og:image:alt" />
    <meta content={image} property="og:image" />
    <meta content={locale} property="og:locale" />
    <meta content={title} property="og:title" />
    <meta content={type} property="og:type" />
    <meta content={url} property="og:url" />
    <meta content={siteName} property="og:site_name" />
  </>
);

GenericOGPData.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  locale: PropTypes.string,
  siteName: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["website", "article"]),
  url: PropTypes.string.isRequired,
};

GenericOGPData.defaultProps = {
  locale: LOCALE_TYPES.EN_US,
  siteName: null,
  type: "website",
};

export default GenericOGPData;
