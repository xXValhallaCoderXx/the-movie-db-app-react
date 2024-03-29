const merge = require("webpack-merge");
const PATHS = require("./paths");
const path = require("path");
const parts = require("./webpack.parts");
const safeParser = require("postcss-safe-parser");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

productionConfig = app =>
  merge([
    // parts.clean(PATHS.build),
    parts.minifyJavaScript(),
    parts.minifyCSS({
      options: {
        parser: safeParser,
        discardComments: {
          removeAll: true
        },
        safe: true
      }
    }),
    {
      output: {
        publicPath: "/", // Need this if you got Source maps on for Images to load
        filename: "[name].[chunkhash:8].js",
        chunkFilename: "static/js/[name].[chunkhash:8].js",
        path: PATHS.build
      },
      optimization: {
        splitChunks: {
          chunks: "all"
        },
        runtimeChunk: {
          name: "manifest"
        }
      },
      recordsPath: path.join(__dirname, "../build/records.json"),
      // plugins: [
      //   new BundleAnalyzerPlugin()
      // ]
    },
    parts.extractCSS(),
    parts.loadImages({
      options: {
        limit: 50000,
        name: "static/images/[name].[hash:8].[ext]"
      }
    })
  ]);

module.exports = productionConfig;
