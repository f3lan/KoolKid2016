'use strict';
const Expertise = require('../models/expertise');
const User = require('../models/user');

class ExpertisesController {

  index(req, res) {
    var userId = req.params.userId;
    Expertise.find({"user": userId}, function(error, expertises) {
      if(error) {
        throw error;
      } else {
        res.json(expertises);
      }
    })
  }

  show(req, res) {
    var id = req.params.id;
    Expertise.findOne({"_id": id}, function(error, expertise) {
      if(error) {
        throw error;
      } else {
        res.json(expertise);
      }
    })
  }

  create(req, res) {
    var expertise = new Expertise(req.body);
    var id = req.params.userId;
    expertise.save(function() {
      User.findOne({"_id": id})
        .populate('expertises')
        .exec(function(error, post) {
          user.expertises.push(expertise._id);
          user.save();
          expertise.user = user._id;
          expertise.save();

          const message = {status: true, message: 'Expertise created'};
          return res.json(message);
        });
    });
  }

  update(req, res) {
    var id = req.params.id;
    Expertise.findByIdAndUpdate(id, {$set: req.body}, function (error, expertise) {
      if (error) {
        const message = {status: false, message: error};
        return res.json(message);
      } else {
        const message = {status: true, message: 'Expertise update'};
        return res.json(message);
      }
    });
  }
}

module.exports = new ExpertisesController();
