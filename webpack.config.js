const path = require('path');

module.exports = {
    entry: { 
        app: './src/app.js',
        support: {
            products: './src/component/products.js',
            productsRender: './src/component/productsRender.js'
        },
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
    }, {
        test: /\.s?css$/,
        include: /styles/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
            ]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
