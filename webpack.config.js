const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
export const API_URL = window.API_URL='http://localhost:8080';   

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "naye",
    projectName: "railroad-app",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(env) // Pasar las variables de entorno al código
      }),
    ],
  });
};
