import PropTypes from "prop-types";
import { STRUCTURED_DATA_TYPES } from "../utilities/constants";
import React from "react";

const StructuredData = ({ id, type, ...data }) => (
  <>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "http://schema.org",
        "@id": id,
        "@type": type,
        ...data,
      })}
    </script>
  </>
);

StructuredData.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(STRUCTURED_DATA_TYPES)).isRequired,
};

export default StructuredData;
