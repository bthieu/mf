const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');

const deps = require("./package.json").dependencies;

module.exports = {
	entry: './index.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index_bundle.js',
	},
	target: 'web',
	devServer: {
		port: '5001',
		static: {
			directory: path.join(__dirname, 'public'),
		},
		open: false,
		hot: true,
		liveReload: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
	devtool: "eval-source-map",
	plugins: [
		new ModuleFederationPlugin({
      name: "remote_dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/pages/DashboardApp.js",        
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
	],
};
