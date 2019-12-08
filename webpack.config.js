const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

const DEVELOPMENT_ENV_NAME = 'development';

function getPathToEnvFile(environment) {
  const currentPath = path.join(__dirname);
  const productionPath = `${currentPath}/.env`
  if (environment !== DEVELOPMENT_ENV_NAME) return productionPath;
  return `${productionPath}.${environment}`;
}

module.exports = () => {
  const environment = process.env.NODE_ENV || DEVELOPMENT_ENV_NAME;
  const envFilePath = getPathToEnvFile(environment);
  const envVars = dotenv.config({ path: envFilePath }).parsed;
  const formattedEnvVars = Object.keys(envVars).reduce(
    (acc, variable) => ({
      [`process.env.${variable}`]: JSON.stringify(envVars[variable]),
      ...acc,
    }),
    {},
  );
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
    plugins: [new webpack.DefinePlugin(formattedEnvVars)],
  };
};
