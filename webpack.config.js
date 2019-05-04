module.exports = {
  mode: process.env.NODE_ENV || 'development',
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
};
