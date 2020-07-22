const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    new HtmlWebpackPlugin({
        template: 'config/templates/index.html',
        inject: true
    })
]