const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  // plugins: [
  //   new BrowserSyncPlugin({

  //     host: 'localhost',
  //     port: 8000,
  //     server: { baseDir: ['src/frontend/templates/frontend'] }
  //   })
  // ],
  module: {
    
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
  
}