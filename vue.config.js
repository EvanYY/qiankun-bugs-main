module.exports = {
  publicPath: process.env.NODE_ENV !== 'production' ? './' : '/',
  devServer: {
    port: 7666,
    host: 'localhost',
    https: false,
    open: true,
  },
  lintOnSave: true,
}
