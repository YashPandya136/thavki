import config from "./utilities/config.json";
import { useTheme } from "@mui/material";
import PropTypes from "prop-types";
import BreadcrumbData from "./components/BreadcrumbData";
import FacebookData from "./components/FacebookData";
import GenericOGPData from "./components/GenericOGPData";
import GenericTags from "./components/GenericTags";
import OrganizationData from "./components/OrganizationData";
import TwitterData from "./components/TwitterData";
import WebPageData from "./components/WebPageData";
import WebSiteData from "./components/WebSiteData";
import getSocialUrls from "./utilities/get-social-urls";
import removeTrailingSlashes from "./utilities/remove-trailing-slashes";
import React from "react";
const SEOComponent = ({
  author,
  breadcrumbs,
  description,
  isGoogleSearchEnabled,
  keywords,
  title,
  pathname,
  ...overrides
}) => {
  const theme = useTheme();
  const data = {
    ...config.siteMetaData,
    description,
    keywords,
    siteUrl: config.siteUrl,
    title,
    ...overrides,
  };
  const canonicalUrl = removeTrailingSlashes(`${data.siteUrl}${pathname}`);
  const bannerUrl = `${data.siteUrl}${data.banner}?500`;
  const logoUrl = `${data.siteUrl}${data.siteLogo}`;
  const organizationId = `${data.siteUrl}#organization`;

  return (
    <>
      <GenericOGPData
        description={data.description}
        image={bannerUrl}
        locale={data.siteLocal}
        siteName={data.siteName}
        title={data.title}
        url={`${canonicalUrl}/`}
      />
      <FacebookData facebookId={data.facebookId} />
      <TwitterData
        creatorTwitterHandle={data.creatorTwitterHandle}
        websiteTwitterHandle={data.twitter}
      />
      <GenericTags
        author={author || data.siteName}
        description={data.description}
        enableGoogleSearchEnvironment={
          isGoogleSearchEnabled && config.enableGoogleSearchEnvironment
        }
        favicon={data.favicon}
        keywords={keywords}
        primaryColor={theme.palette.primary.main}
        title={data.title}
        url={canonicalUrl}
      />
      <WebSiteData
        description={data.description}
        language={data.siteLanguage}
        name={data.siteName}
        url={data.siteUrl}
      />
      <OrganizationData
        id={organizationId}
        logoUrl={logoUrl}
        name={data.siteName}
        socialUrls={getSocialUrls(data)}
        url={data.siteUrl}
      />
      <WebPageData
        bannerUrl={bannerUrl}
        canonicalUrl={canonicalUrl}
        dateModified={data.dateModified}
        datePublished={data.datePublished}
        description={data.description}
        organizationId={organizationId}
        siteLanguage={data.siteLanguage}
        title={data.title}
      />
      <BreadcrumbData
        breadcrumbs={
          breadcrumbs.length
            ? breadcrumbs
            : [{ item: data.siteUrl, name: "Home" }]
        }
      />
    </>
  );
};

SEOComponent.propTypes = {
  author: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
  ),
  description: PropTypes.string,
  isGoogleSearchEnabled: PropTypes.bool,
  keywords: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  pageId: PropTypes.number,
  person: PropTypes.shape({
    familyName: PropTypes.string,
    givenName: PropTypes.string,
    id: PropTypes.string,
    position: PropTypes.string,
  }),
  title: PropTypes.string,
};

SEOComponent.defaultProps = {
  author: null,
  breadcrumbs: [],
  description: null,
  isGoogleSearchEnabled: true,
  keywords: null,
  pageId: 0,
  person: null,
  title: null,
};

export default SEOComponent;
