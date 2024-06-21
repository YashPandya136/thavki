import PropTypes from "prop-types";
import React from "react";

const FacebookData = ({ facebookId }) => (
  <>{facebookId && <meta content={facebookId} property="fb:app_id" />}</>
);

FacebookData.propTypes = {
  facebookId: PropTypes.string,
};

FacebookData.defaultProps = {
  facebookId: null,
};

export default FacebookData;
