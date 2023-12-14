/* eslint-disable */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlWebpackPluginConfig = {
  meta: {
    viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    'theme-color': '#61422e',
  },
  templateParameters: {
    brandName: 'KERIS (Koleksi Kerajinan Seni) App',
  },
};

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Home',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/views/index.html'),
      ...htmlWebpackPluginConfig,
    }),

    // Menu

    new HtmlWebpackPlugin({
      title: 'Galeri Seni',
      filename: 'menu/galeri-seni.html',
      template: path.resolve(__dirname, 'src/views/menu/galeri-seni.html'),
      ...htmlWebpackPluginConfig,
    }),

    new HtmlWebpackPlugin({
      title: 'Detail Galeri Seni',
      filename: 'menu/detail-galeri-seni.html',
      template: path.resolve(__dirname, 'src/views/menu/detail-galeri-seni.html'),
      ...htmlWebpackPluginConfig,
    }),

    new HtmlWebpackPlugin({
      title: 'News',
      filename: 'menu/news.html',
      template: path.resolve(__dirname, 'src/views/menu/news.html'),
      ...htmlWebpackPluginConfig,
    }),

    new HtmlWebpackPlugin({
      title: 'Kalendar Budaya',
      filename: 'menu/kalendarbudaya.html',
      template: path.resolve(__dirname, 'src/views/menu/kalendarbudaya.html'),
      ...htmlWebpackPluginConfig,
    }),

    new HtmlWebpackPlugin({
      title: 'Pusat Bantuan',
      filename: 'menu/pusat-bantuan.html',
      template: path.resolve(__dirname, 'src/views/menu/pusat-bantuan.html'),
      ...htmlWebpackPluginConfig,
    }),

    // autentication

    new HtmlWebpackPlugin({
      title: 'Login',
      filename: 'auth/login.html',
      template: path.resolve(__dirname, 'src/views/auth/login.html'),
      ...htmlWebpackPluginConfig,
    }),

    new HtmlWebpackPlugin({
      title: 'Register',
      filename: 'auth/register.html',
      template: path.resolve(__dirname, 'src/views/auth/register.html'),
      ...htmlWebpackPluginConfig,
    }),

    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),

    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src'),
          to: 'public',
        },
      ],
    }),

    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.startsWith('https://keris-api-default-rtdb.firebaseio.com/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'keris-api',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'keris-images',
          },
        },
      ],
    }),

    // new BundleAnalyzerPlugin(),
  ],
};
