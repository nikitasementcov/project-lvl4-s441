const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

const DEVELOPMENT_ENV = 'development';
const environment = process.env.NODE_ENV || DEVELOPMENT_ENV;

function getPathToEnvFile() {
  const currentPath = path.join(__dirname);
  const productionPath = `${currentPath}/.env`;
  if (environment !== DEVELOPMENT_ENV) return productionPath;
  return `${productionPath}.${environment}`;
}

function getDotEnvVariables() {
  const envFilePath = getPathToEnvFile(environment);
  if (!fs.existsSync(envFilePath)) {
    return {};
  }
  const envVars = dotenv.config({ path: envFilePath }).parsed;
  return Object.keys(envVars).reduce(
    (acc, variable) => ({
      [`process.env.${variable}`]: JSON.stringify(envVars[variable]),
      ...acc,
    }),
    {},
  );
}

module.exports = () => {
  const dotEnvVariables = getDotEnvVariables();
  return {
    mode: environment,
    entry: [`${__dirname}/src/index.jsx`],
    externals: {
      gon: 'gon',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: `${__dirname}/dist/public`,
      publicPath: '/assets/',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: 'style-loader',
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
          options: {
            modules: false,
          },
        },
      ],
    },
    plugins: [new webpack.DefinePlugin(dotEnvVariables)],
  };
};
