// const toot_ ='app/plugins/wp_plugin1/'
const toot_ =''

module.exports = {
    webpack: {
        configure: {
            output: {
                filename: toot_+"static/js/[name].js",
            },
            optimization: {
                runtimeChunk: false,
                splitChunks: {
                    chunks(chunk) {
                        return false;
                    },
                },
            },
        },
    },
    plugins: [
        {
            plugin: {
                overrideWebpackConfig: ({ webpackConfig }) => {
                    webpackConfig.plugins[5].options.filename = toot_+"static/css/[name].css";
                    return webpackConfig;
                },
            },
            options: {},
        },
    ],
};
