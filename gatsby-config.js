// const fs = require("fs");
const { resolve } = require("path");
// const { load } = require("js-yaml");
// const merge = require("deepmerge");

// const command = process.env.npm_lifecycle_event;

// let pageResolution = [];


// if (
//   (command === "start" || command === "build") &&
//   (!process.env.config || !fs.existsSync(`configs/${process.env.config}.yml`))
// ) {
//   const red = "\x1b[31m";
//   const reset = "\x1b[0m";

//   console.log(`\n\n💥 ${red}Invalid config! Try one of these:${reset}\n`);

//   fs.readdirSync("configs")
//     .filter(
//       (file) => !file.includes("default.") && /^([a-z-]+\.){2}yml/.test(file)
//     )
//     .forEach((file) =>
//       console.log(`$ config=${file.replace(".yml", "")} yarn ${command}`)
//     );

//   process.exit(1);
// } else if (process.env.config) {
//   const [variation, stage] = process.env.config.split(".");

//   pageResolution = [
//     "src/pages",
//     "src/pages/default",
//     `src/pages/default.${stage}`,
//     `src/pages/${variation}`,
//     `src/pages/${variation}.${stage}`
//   ]
//     .filter((path) => fs.existsSync(path))
//     .map((path) => ({
//       resolve: "gatsby-plugin-page-creator",
//       options: { path: resolve(path) }
//     }));

// }
// process.env.GATSBY_QUERY_ON_DEMAND_LOADING_INDICATOR = "false";

// const [variation, stage] = process.env.config.split(".");

// const config = [
//   "configs/default.yml",
//   `configs/default.${stage}.yml`,
//   `configs/${variation}.yml`,
//   `configs/${variation}.${stage}.yml`,
// ].reduce((acc, file) => {
//   try {
//     return merge(acc, load(fs.readFileSync(file, "utf-8")));
//   } catch (e) {
//     return acc;
//   }
// }, {});

// const plugins = [];


// if (process.env.config === 'clarendon.prod') {
//   plugins.push(
//     {
//       resolve: `gatsby-plugin-google-gtag`,
//       options: {
//         trackingIds: ["G-YSML7QX25Y"],
//         pluginConfig: {
//           head: true,
//           respectDNT: true,
//         },
//       },
//     }
//   )
// }

module.exports = {
  // siteMetadata: {
  //   siteUrl: config.hostName
  // },
  plugins: [
    // ...pageResolution,
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-svg",
    `gatsby-plugin-smoothscroll`,

    // {
    //   resolve: "gatsby-plugin-robots-txt",
    //   options: {
    //     host: config.hostName,
    //     sitemap: `${config.hostName}sitemap.xml`,
    //     policy: [{ userAgent: "*", allow: "/" }],
    //   },
    // },
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
