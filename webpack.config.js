// "dev": "webpack --watch --mode development ./src/frontend/src/index.js --output ./src/frontend/static/frontend/main.js",
// "build": "webpack --mode production ./src/frontend/src/index.js --output ./src/frontend/static/frontend/main.js",
const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: ['./src/frontend/src/index.js', './src/frontend/src/styles/main.scss'],
	output: {
		path: path.resolve(__dirname, 'src/frontend/static/frontend'),
		filename: 'main.js',
	},
	plugins: [
		new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
	],
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
	},
	// optimization: {
	// 	splitChunks: {
	// 		chunks: 'all',
	// 		minSize: 30000,
	// 		maxSize: 200000,
	// 		minChunks: 1,
	// 		maxAsyncRequests: 5,
	// 		maxInitialRequests: 3,
	// 		automaticNameDelimiter: '~',
	// 		name: true,
	// 		cacheGroups: {
	// 		  vendors: {
	// 			test: /[\\/]node_modules[\\/]/,
	// 			priority: -10,
	// 			name(module) {
	// 				// get the name. E.g. node_modules/packageName/not/this/part.js
	// 				// or node_modules/packageName
	// 				const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
		
	// 				// npm package names are URL-safe, but some servers don't like @ symbols
	// 				return `npm`;
	// 			},
	// 		  },
	// 		  default: {
	// 			minChunks: 2,
	// 			priority: -20,
	// 			reuseExistingChunk: true
	// 		  }
	// 		}
	// 	  }
	// }
};