const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import "@/assets/scss/config/_config.scss";
                @import "@/assets/scss/vendor/_mq.scss";
                @import "@/assets/scss/config/_functions.scss";
                @import "@/assets/scss/config/_mixins.scss";
                `,
            },
        },
    },

    devServer: {
        port: 3200, // your choosen port

        // proxy: {
        //     '/api/': {
        //         target: 'http://your-local-host.test/',
        //         secure: false,
        //         changeOrigin: true,
        //         pathRewrite: { '^/api': '' },
        //     },
        // },
    },

    pluginOptions: {
        lintStyleOnBuild: false,
        stylelint: {},
    },

    configureWebpack: {
        plugins: [
            new StylelintPlugin({
                files: [
                    'src/**/*.vue',
                ],
                emitErrors: false,
            }),
        ],
    },

    publicPath: '/',

    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader');

        // Loading inline SVG
        // https://github.com/oliverfindl/vue-svg-inline-loader
        config.module
            .rule('vue')
            .use('vue-svg-inline-loader')
            .loader('vue-svg-inline-loader');
        // .options({ /* ... */ });
    },
};
