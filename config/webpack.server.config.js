/* eslint-disable no-undef */
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(__dirname, `../.${process.env.NODE_ENV}.env`),
});

const {
  NODE_ENV,
  PORT,
  CLIENT_ID,
  CLIENT_SECRET,
} = process.env;

const webpackNodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const MODULE_CODE_REGEXP = /\.[tj]sx?$/;
const STYLES_REGEXP = /.styl$/;

const basePlugins = [
  new webpack.DefinePlugin({
    __CLIENT_ID: `'${CLIENT_ID}'`,
    __CLIENT_SECRET: `'${CLIENT_SECRET}'`,
    __PORT: `'${PORT}'`,
  }),
];

module.exports = {
  entry: path.resolve(__dirname, '../src/server/server.tsx'),

  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js',
  },

  module: {
    rules: [
      {
        test: MODULE_CODE_REGEXP,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: STYLES_REGEXP,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportOnlyLocals: true,
              },
            },
          },
          {
            loader: 'stylus-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  plugins:
    NODE_ENV === 'development'
      ? [
          ...basePlugins,
          new ReactRefreshPlugin({
            overlay: {
              sockIntegration: 'whm',
            },
          }),
          new webpack.HotModuleReplacementPlugin(),
        ]
      : [...basePlugins],

  externals: [webpackNodeExternals()],

  target: 'node',

  externalsPresets: { node: true },

  mode: NODE_ENV === 'development' ? 'development' : 'production',

  optimization: {
    minimize: false,
  },
};
