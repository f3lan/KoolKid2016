module.exports = {
  url: 'mongodb://localhost/medex_production',
  options: {
    server: {
      auto_reconnect: true,
      socketOptions: {
        keepAlive: 1
      }
    }
  }
};
