import PropTypes from "prop-types";
import { ARTICLE_TYPES, AUTHOR_TYPES } from "../utilities/constants";
import { removeEmptyValues } from "../utilities/remove-empty-values";
import StructuredData from "./StructuredData";

const ArticleData = ({
  type,
  author,
  dateModified,
  datePublished,
  headline,
  image,
}) => {
  const cleanedData = removeEmptyValues({
    author,
    dateModified,
    datePublished,
    image,
  });
  return (
    <StructuredData
      headline={headline}
      id={type}
      type={type}
      {...cleanedData}
    />
  );
};

ArticleData.propTypes = {
  author: PropTypes.arrayOf(
    PropTypes.shape({
      "@type": PropTypes.oneOf(AUTHOR_TYPES),
      name: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  // ISO 8601 format
  dateModified: PropTypes.string,
  datePublished: PropTypes.string,
  headline: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.oneOf(ARTICLE_TYPES).isRequired,
};

ArticleData.defaultProps = {
  author: null,
  dateModified: null,
  datePublished: null,
  image: null,
};

export default ArticleData;
