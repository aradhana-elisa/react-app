//entry point && output the final bundle file 

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
      },
      module: {
        rules: [{
          loader: 'babel-loader',
          //files end with js
          test: /\.js$/,
          exclude : /node_modules/
        }, {
          //files end with css, ? makes s optional- so for both css and scss
            test: /\.s?css$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }]
      },
      // cheap-module-eval-source-map - gives you the exact line where the error is.
      devtool : 'cheap-module-eval-source-map',
      devServer: {
        contentBase: path.join(__dirname, 'public'),

      }
};

