import PropTypes from "prop-types";
import React from "react";

const TwitterData = ({ type, websiteTwitterHandle, creatorTwitterHandle }) => (
  <>
    <meta content={type} name="twitter:card" />
    {!!creatorTwitterHandle && (
      <meta content={`@${creatorTwitterHandle}`} name="twitter:creator" />
    )}
    {!!websiteTwitterHandle && (
      <meta content={`@${websiteTwitterHandle}`} name="twitter:site" />
    )}
  </>
);

TwitterData.propTypes = {
  creatorTwitterHandle: PropTypes.string,
  type: PropTypes.oneOf(["summary_large_image", "summary", "app", "player"]),
  websiteTwitterHandle: PropTypes.string,
};

TwitterData.defaultProps = {
  creatorTwitterHandle: null,
  type: "summary_large_image",
  websiteTwitterHandle: null,
};

export default TwitterData;
