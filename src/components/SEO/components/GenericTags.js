import PropTypes from "prop-types";
import React from "react";
const GenericTags = ({
  author,
  description,
  favicon,
  keywords,
  title,
  url,
  googleSiteVerificationCode,
  primaryColor,
  enableGoogleSearchEnvironment,
}) => (
  <>
    <title>{title}</title>
    <link href={url} rel="canonical" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content={keywords} name="keywords" />
    <meta content={description} name="description" />
    <meta content={author} name="author" />
    <meta content={primaryColor} name="msapplication-navbutton-color" />
    <meta content={primaryColor} name="theme-color" />
    <meta content={primaryColor} name="apple-mobile-web-app-status-bar-style" />
    <link href={favicon} id="favicon-icon" rel="icon" />
    {googleSiteVerificationCode && (
      <meta
        content={googleSiteVerificationCode}
        name="google-site-verification"
      />
    )}
    {!enableGoogleSearchEnvironment && <meta content="noindex" name="robots" />}
    {!enableGoogleSearchEnvironment && (
      <meta content="noindex" name="googlebot" />
    )}
  </>
);

GenericTags.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string.isRequired,
  enableGoogleSearchEnvironment: PropTypes.bool,
  favicon: PropTypes.string.isRequired,
  googleSiteVerificationCode: PropTypes.string,
  keywords: PropTypes.string,
  primaryColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

GenericTags.defaultProps = {
  author: null,
  enableGoogleSearchEnvironment: false,
  googleSiteVerificationCode: null,
  keywords: null,
  primaryColor: "",
};

export default GenericTags;
