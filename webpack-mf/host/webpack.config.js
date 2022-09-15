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
		publicPath: '/'
	},
	target: 'web',
	devServer: {
		port: '5000',
		static: {
			directory: path.join(__dirname, 'public'),
		},
		open: true,
		hot: true,
		liveReload: true,
		historyApiFallback: true,
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
	plugins: [
		new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
			remotes: {
        remote_dashboard: "remote_dashboard@http://localhost:5001/remoteEntry.js",
				remote_user: "remote_user@http://localhost:5002/remoteEntry.js",
				remote_product: "remote_product@http://localhost:5003/remoteEntry.js",
				remote_blog: "remote_blog@http://localhost:5004/remoteEntry.js"
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
