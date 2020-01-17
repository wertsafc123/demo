module.exports = {
  assetsDir: "static",
  publicPath: '/Static/activity/ActivityTreeV2/',
  devServer: {
    port: 8080,
    disableHostCheck: true,
    proxy: {
      '/ActivityTreeV2': {
        target: 'http://192.168.15.25:83',
        changeOrigin: true,
      }
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // eslint-disable-next-line global-require
          require('postcss-px-to-viewport')({
            unitToConvert: 'px',
            viewportWidth: 1280,
            viewportHeight: 720,
            unitPrecision: 6,
            propList: [
              '*',
            ],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: /(\/|\\)(node_modules)(\/|\\)/,
          }),
        ],
      },
    },
  }
}