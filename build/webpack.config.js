const { merge } = require("webpack-merge");
const devConfig = require("./webpack.dev.config");
const proConfig = require("./webpack.pro.config");
const baseConfig = require("./webpack.base.config");

const currentConfig = process.NODE_ENV === "development" ? devConfig : proConfig;

module.exports = merge(baseConfig, currentConfig);