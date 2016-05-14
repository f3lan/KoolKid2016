module.exports = {
  /* since Mongodb sucks on windows, I decided to use clouded stuff
   site https://mlab.com
   user uninegov
   pwd  UnineEgov123
  */

  //url: 'mongodb://unine:UnineEgov123@ds025239.mlab.com:25239/egov',

  url: 'mongodb://localhost/medex_development',
  options: {
    server: {
      auto_reconnect: true,
      socketOptions: {
        keepAlive: 1
      }
    }
  }
};
