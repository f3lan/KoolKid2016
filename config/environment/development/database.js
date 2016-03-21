module.exports = {
  url: 'mongodb://localhost/rb_development',
  options: {
    server: {
      auto_reconnect: true,
      socketOptions: {
        keepAlive: 1
      }
    }
  }
};
