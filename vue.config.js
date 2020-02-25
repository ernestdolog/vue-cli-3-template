const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const StatsPlugin = require('stats-webpack-plugin');

module.exports = {
    devServer: {
        host: 'localhost',
        port: 3000,
        disableHostCheck: true
    },
    configureWebpack: {
        entry: './src/client-entry.js',
        performance: {
            hints: process.env.NODE_ENV === 'production' ? false : 'warning'
        },
        plugins: [
            new StatsPlugin('stats.json', {
                chunkModules: true
            }),
            // auto generate service worker
            new SWPrecachePlugin({
                cacheId: 'vue-hn',
                filename: 'service-worker.js',
                dontCacheBustUrlsMatching: /./,
                staticFileGlobsIgnorePatterns: [/index\.html$/, /\.map$/]
            })
        ]
    },
    css: {
    // Enable CSS source maps.
    sourceMap: true
}
}