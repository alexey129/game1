var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	watch: true,
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				//test: /\.m?js$/,
				test: /js|jsx$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env',"@babel/preset-react"]
					}
				}
			},
			{
        		test: /\.css$/i,
        		use: ["style-loader", "css-loader"],
      		},
      		{
		        test: /\.scss$/i,
		        use: [
		          // Creates `style` nodes from JS strings
		          "style-loader",
		          // Translates CSS into CommonJS
		          "css-loader",
		          // Compiles Sass to CSS
		          "sass-loader",
		        ],
		    },
		    {
        		test: /\.(png|jpe?g|gif)$/i,
        		use: [
          			{
            			loader: 'file-loader',
          			},
        		],
      		},
      		{
          		test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          		loader: 'file-loader',
          		options: {
            		name: '[name].[ext]'
          		}
        		},
		]
	},
	plugins: [
        	new HtmlWebpackPlugin({
            	template: path.resolve(__dirname, './src/template.html'), // шаблон
            	filename: 'index.html', // название выходного файла
        	}),
        	new CleanWebpackPlugin(),
     ],

};