'use strict';
let IndexController = require('./../controllers/IndexController.js');

class IndexRoutes {

  constructor(app) {
    this.app = app;
  }

  index() {
    this.app.route('/').get(IndexController.index);
  }

}

module.exports = function(app) {

  const indexRoutes = new IndexRoutes(app);
  indexRoutes.index();

};
