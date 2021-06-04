var path = require("path");
var HtmlWebpackPlugin=require("html-webpack-plugin");
var MiniCssExtractPlugin=require("mini-css-extract-plugin");

module.exports = {
    entry:  {
      app:'./src/index.js'
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js"
      },
      mode:"development",
      
      devServer: {
        contentBase: path.join(__dirname,"/dist"),
        port:1240,
        writeToDisk:true,
      },
    
      module:{
        rules:[
            {
                test:/\.html$/,
              use:[
                {
                  loader:"html-loader",
                  options:{
                    minimize:true,
                  }
                }
              ]
            },

            {
				test: /\.(sa|sc|c)ss$/,
				use: [
					  {
						loader: MiniCssExtractPlugin.loader, 
						options: {
						  publicPath: '../' 
						}
					  },
					  'css-loader',
					]
			  },
        ]
      },
      plugins:[
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "css/istanbul.css"
        }),
        new MiniCssExtractPlugin({
            filename: "css/login.css"
        }),
        new MiniCssExtractPlugin({
          filename: "css/pyramids.css"
      }),
      new MiniCssExtractPlugin({
        filename: "css/signi.css"
      }),
      new MiniCssExtractPlugin({
        filename: "css/style.css"
      }),
          new HtmlWebpackPlugin({
              filename: "istanbul.html",
              template: "./src/istanbul.html",
          }),
          new HtmlWebpackPlugin({
              filename: "login.html",
              template: "./src/login.html",
          }),
          new HtmlWebpackPlugin({
              filename: "pyramids.html",
              template: "./src/pyramids.html",
          }),
          new HtmlWebpackPlugin({
              filename: "singin.html",
              template: "./src/singin.html",
          }),
      ],
}