// const fs = require("fs");
// const merge = require("deepmerge");
// const { load } = require("js-yaml");
// const path = require("path");

module.exports.onPreInit = () => {
    
};

// function createConfigJson() {
//   const [variation, stage] = process.env.config.split(".");

//   const config = [
//     "configs/default.yml",
//     `configs/default.${stage}.yml`,
//     `configs/${variation}.yml`,
//     `configs/${variation}.${stage}.yml`,
//   ].reduce((acc, file) => {
//     try {
//       return merge(acc, load(fs.readFileSync(file, "utf-8")));
//     } catch (e) {
//       return acc;
//     }
//   }, {});
//   fs.writeFileSync("src/config.json", JSON.stringify(config, null, 2));
// }



