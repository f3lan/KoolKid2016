'use strict';
let ExpertisesController = require('./../controllers/ExpertisesController.js');

class ExpertisesRoutes {

  constructor(app) {
    this.app = app;
  }

  index() {
    this.app.route('/users/:userID/expertises').get(ExpertisesController.index);
  }

  show() {
    this.app.route('/users/:userID/expertises/:id').get(ExpertisesController.show);
  }

  create() {
    this.app.route('/users/:userID/expertises').post(ExpertisesController.create);
  }

  update() {
    this.app.route('/users/:userID/expertises/:id').put(ExpertisesController.update);
  }

}

module.exports = function(app) {
  const expertisesRoutes = new ExpertisesRoutes(app);
  ExpertisesRoutes.index();
  ExpertisesRoutes.show();
  ExpertisesRoutes.create();
  ExpertisesRoutes.update();
}
