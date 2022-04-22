const path = require("path")

module.exports = {
    entry: "./react/app.js",
    output: {
        path: path.join(__dirname, 'main'),
        filename: "script.js"
    },
    module : {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
    ]
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        static: './main',
        port: 3000
    }
}