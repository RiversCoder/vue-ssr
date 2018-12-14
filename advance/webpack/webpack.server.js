const path = require('path');
const rootPath = path.resolve(__dirname,'..');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {

    target: 'node', // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
    entry: ['babel-polyfill', path.join(rootPath, 'entry/entry.server.js')],
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(rootPath,'dist'),
        filename: 'bundle.server.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: rootPath,
                exclude: /node_modules/,
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        // new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js'
        }
    }

};