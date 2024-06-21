import PropTypes from "prop-types";
import StructuredData from "./StructuredData";
import { STRUCTURED_DATA_TYPES } from "../utilities/constants";
import React from "react";

const BreadcrumbData = ({ breadcrumbs }) => {
  return (
    <StructuredData
      id={STRUCTURED_DATA_TYPES.BREADCRUMB_LIST}
      itemListElement={breadcrumbs.map((data, index) => ({
        "@type": STRUCTURED_DATA_TYPES.LIST_ITEM,
        position: index + 1,
        ...data,
      }))}
      type={STRUCTURED_DATA_TYPES.BREADCRUMB_LIST}
    />
  );
};

BreadcrumbData.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BreadcrumbData;
