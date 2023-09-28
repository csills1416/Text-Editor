const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Configure HtmlWebpackPlugin to generate an HTML file
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['main'],
      }),
      
      // Configure WebpackPwaManifest to generate a manifest file
      new WebpackPwaManifest({
        name: 'Text Editor App',
        short_name: 'Editor App',
        description: 'A text editor app for offline use',
        background_color: '#ffffff',
        theme_color: '#3498db',
        icons: [
          {
            src: path.resolve('src/img/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),

      // Configure InjectManifest for the service worker
      new InjectManifest({
        swSrc: './src/service-worker.js',
      }),
    ],

    module: {
      rules: [
        // Add CSS loaders for handling CSS files
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        
        // Add Babel loader for JavaScript (assuming you have a .babelrc file)
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  };
};
