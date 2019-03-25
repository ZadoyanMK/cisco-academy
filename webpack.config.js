// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

// "dev": "webpack --watch --mode development ./src/frontend/src/index.js --output ./src/frontend/static/frontend/main.js",
// "build": "webpack --mode production ./src/frontend/src/index.js --output ./src/frontend/static/frontend/main.js",

// module.exports = {
//   // plugins: [
//   //   new BrowserSyncPlugin({

//   //     host: 'localhost',
//   //     port: 8000,
//   //     server: { baseDir: ['src/frontend/templates/frontend'] }
//   //   })
//   // ],
//   entry: ['./src/frontend/src/index.js', './src/frontend/src/styles/main.scss'],
//   output: {
//     filename: 'src/frontend/static/frontend/main.js'
//   },
//   module: {
    
//     rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader"
      //   }
      // },
//       { 
//         test: /\.(css|sass|scss)$/,
//         loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
//       }
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin({ // define where to save the file
//       filename: './src/frontend/static/frontend/[name].bundle.css',
//       allChunks: true,
//     }),
//   ],
// }


const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: ['./src/frontend/src/index.js', './src/frontend/src/styles/main.scss'],
	output: {
		path: path.resolve(__dirname, 'src/frontend/static/frontend'),
		filename: 'main.js',
  },
	module: {
		rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
};