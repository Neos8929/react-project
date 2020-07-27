module.exports = [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },

    {
        test: /\.less$/,
        use: [
            'style-loader',
            'css-loader',
            {
                //浏览器添加前缀
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: [require('autoprefixer')]
                }
            },
            {
                loader: 'less-loader',
            },
        ]
    }
]