/* eslint-disable no-undef */
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(__dirname, `../.${process.env.DOTENV}.env`),
});

const {
  NODE_ENV = 'development',
  DEV_SERVER_PORT = 3000,
  PROD_SERVER_PORT = 3000,
  CLIENT_ID = '6SYUC7J5KZiAhHWYmx2N3A',
  CLIENT_SECRET = 'Gq6PrK7xbnsjzjs77RDwR_9sIetbhg',
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
    __PORT: `'${
      NODE_ENV === 'development' ? DEV_SERVER_PORT : PROD_SERVER_PORT
    }'`,
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
