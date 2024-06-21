import { SOCIAL_BASE_LINKS } from "./constants";

const getSocialUrls = ({ instagram, twitter, facebook, linkedIn }) => {
  const socialUrls = [];
  if (instagram) socialUrls.push(`${SOCIAL_BASE_LINKS.INSTAGRAM}${instagram}`);
  if (twitter) socialUrls.push(`${SOCIAL_BASE_LINKS.TWITTER}/${twitter}`);
  if (facebook) socialUrls.push(`${SOCIAL_BASE_LINKS.FACEBOOK}${facebook}`);
  if (linkedIn) socialUrls.push(`${SOCIAL_BASE_LINKS.LINKEDIN}${linkedIn}`);
  return socialUrls;
};

export default getSocialUrls;
