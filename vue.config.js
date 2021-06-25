// vue.config.js file to be place in the root of your repository

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_variables.scss";` + `@import "@/scss/_fonts.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/csimedia-frontend/'
    : '/'
}
