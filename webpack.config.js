module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            svgoConfig: {
                                plugins: [
                                    { removeViewBox: false },
                                    { cleanupIDs: false },
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
};
