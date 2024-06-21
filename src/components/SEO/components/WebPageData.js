import PropTypes from "prop-types";
import { LANGUAGES, STRUCTURED_DATA_TYPES } from "../utilities/constants";
import { removeEmptyValues } from "../utilities/remove-empty-values";
import StructuredData from "./StructuredData";
import React from "react";

const WebPageData = ({
  bannerUrl,
  canonicalUrl,
  dateModified,
  datePublished,
  description,
  organizationId,
  siteLanguage,
  title,
}) => {
  const cleanedData = removeEmptyValues({
    dateModified,
    datePublished,
    description,
  });
  const ref = (type, id) => ({ "@id": id, "@type": type });
  return (
    <StructuredData
      author={ref(STRUCTURED_DATA_TYPES.ORGANIZATION, organizationId)}
      headline={title}
      id={canonicalUrl}
      image={bannerUrl}
      inLanguage={siteLanguage}
      mainEntityOfPage={canonicalUrl}
      publisher={ref(STRUCTURED_DATA_TYPES.ORGANIZATION, organizationId)}
      title={title}
      type={STRUCTURED_DATA_TYPES.WEBPAGE}
      url={canonicalUrl}
      {...cleanedData}
    />
  );
};

WebPageData.propTypes = {
  bannerUrl: PropTypes.string.isRequired,
  canonicalUrl: PropTypes.string.isRequired,
  dateModified: PropTypes.string,
  datePublished: PropTypes.string,
  description: PropTypes.string,
  organizationId: PropTypes.string.isRequired,
  siteLanguage: PropTypes.oneOf(Object.values(LANGUAGES)),
  title: PropTypes.string.isRequired,
};

WebPageData.defaultProps = {
  dateModified: null,
  datePublished: null,
  description: null,
  siteLanguage: LANGUAGES.ENGLISH,
};

export default WebPageData;
