const { resolve } = require("path");
module.exports = {
  
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-svg",
    `gatsby-plugin-smoothscroll`,

    {
      options: { component: resolve("src/components/Layout") },
      resolve: "gatsby-plugin-layout"
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    {
      options: {
        background_color: "#f8fbfe",
        display: "browser",
        icon: "static/images/icon.png",
        name: "B. K. Silk Mils Pvt.ltd.",
        short_name: "Thavki",
        start_url: "/",
        theme_color: "#f8fbfe"
      },
      resolve: "gatsby-plugin-manifest",
    },
  ],
};
