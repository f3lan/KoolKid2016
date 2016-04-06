module.exports = {
    cookieName: 'session',
    secret: 'My_Little_Poney',
    duration: 30 * 60 * 1000,       //defines how long the session will live in milliseconds
    activeDuration: 5 * 60 * 1000,  //allows users to lengthen their session by interacting with the site
};
