module.exports = {
  url: 'mongodb://localhost/rb_production',
  options: {
    server: {
      auto_reconnect: true,
      socketOptions: {
        keepAlive: 1
      }
    }
  }
};
