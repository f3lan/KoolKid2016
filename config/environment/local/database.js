module.exports = {
  url: 'mongodb://localhost/medex_development',

  options: {
    server: {
      auto_reconnect: true,
      socketOptions: {
        keepAlive: 1
      }
    }
  }
}
