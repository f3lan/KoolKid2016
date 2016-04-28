'use strict';
const Answer = require('../models/answer');
const Post = require('../models/post');

class AnswersController {

  show(req, res) {
    var id = req.params.id;

    Answer.findOne({"_id": id})
      .populate('answers')
      .exec(function(error, post) {
        if(error) {
          throw error;
        } else {
          res.json(post.answers);
        }
      });
  }

  create(req, res) {
    var answer = new Answer(req.body);
    var id = req.params.id;
    answer.save(function(error) {

      if(error) {
        throw error;
      }

      Answer.findOne({"_id": id})
        .populate('answers')
        .exec(function(error, post) {
          if(error) {
            throw error;
          }
          post.answers.push(answer._id);
          post.save();

          const message = {status: true, message: 'Answer created'};
          return res.json(message);
        });
    });
  }
}

module.exports = new AnswersController();
