const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = (assetPath) => { 
    const ASSET_PATH = assetPath || '/'; 
    return {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                 use: [
                        {
                        loader: 'file-loader',
                        },
                    ],
                //type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    output: { 
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
        publicPath: ASSET_PATH
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html'),
        }),
    ],
    stats: 'errors-only',
}
}
