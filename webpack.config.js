const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

function getPathToEnvFile(mode) {
  const currentPath = path.join(__dirname);
  const basePath = `${currentPath}/.env`;
  const modePath = `${basePath}.${mode}`;
  const finalPath = fs.existsSync(modePath) ? modePath : basePath;
  return finalPath;
}

module.exports = () => {
  const mode = process.env.NODE_ENV || 'development';
  const finalPath = getPathToEnvFile(mode);
  const fileEnvVars = dotenv.config({ path: finalPath }).parsed;
  const formattedEnvVars = Object.keys(fileEnvVars).reduce(
    (acc, variable) => ({
      [`process.env.${variable}`]: JSON.stringify(fileEnvVars[variable]),
      ...acc,
    }),
    {}
  );
  return {
    mode,
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
          exclude: [/node_modules/, /assets/],
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        {
          test: /\.css$/,
          include: [/node_modules/, /assets/],
          use: ['css-loader'],
        },
      ],
    },
    plugins: [new webpack.DefinePlugin(formattedEnvVars)],
  };
};
