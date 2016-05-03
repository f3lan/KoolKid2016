'use strict';
const Answer = require('../models/answer');
const Post = require('../models/post');

class AnswersController {

  index(req, res) {
    var postId = req.params.postId;
    Answer.find({"post": postId}, function(error, answer) {
      if(error) {
        throw error;
      } else { res.json(answer); } });
  }

  show(req, res) {
    var id = req.params.id;
    Answer.findOne({"_id": id}, function(error, answer) {
      if(error) {
        throw error;
      } else {
        res.json(answer);
      }
    });
  }

  create(req, res) {
    var answer = new Answer(req.body);
    var id = req.params.postId;
    answer.save(function() {
      Post.findOne({"_id": id})
        .populate('answers')
        .exec(function(error, post) {
          post.answers.push(answer._id);
          post.save();
          answer.post = post._id;
          answer.save();

          const message = {status: true, message: 'Answer created'};
          return res.json(message);
        });
    });
  }

  update(req, res) {
    var id = req.params.id;
    Answer.findByIdAndUpdate(id, {$set: req.body}, function (error, answer) {
      if (error) {
        const message = {status: false, message: error};
        return res.json(message);
      } else {
        const message = {status: true, message: 'Answer update'};
        return res.json(message);
      }
    });
  }
}

module.exports = new AnswersController();
