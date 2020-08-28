process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
global.watch = true;

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
const { default: middleware } = require('webpack-dev-middleware');
const express = require('express');
const app = express();

app.use(
  middleware(compiler, {
      // webpack-dev-middleware options
    })
  );

  app.listen(3000, () => console.log('Example app listening on port 3000!'));
  //app.use(require("webpack-hot-middleware")(compiler));