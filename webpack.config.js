const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const fs = require('fs')
const tsImportPluginFactory = require('ts-import-plugin')

const pkgPath = path.join(process.cwd(), 'package.json')
const pkg = fs.existsSync(pkgPath) ? require(pkgPath) : {}

module.exports = {
  entry: './app/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss']
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'app'),
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]_[local]-[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localIdentName: '[name]_[local]-[hash:base64:5]'
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              modifyVars: pkg.theme
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(jsx|tsx|js|ts)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({ libraryName: "antd", style: "css" })]
          })
        },
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/views/index.ejs'
    })
  ]
}
