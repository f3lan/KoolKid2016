'use strict';
const Comment = require('../models/comment');
const Post = require('../models/post');

class CommentsController {

  show(req, res) {
    var id = req.params.id;

    Post.findOne({"_id": id})
      .populate('comments')
      .exec(function(error, post) {
        if(error) {
          throw error;
        } else {
          res.json(post.comments);
        }
      });
  }

  create(req, res) {
    var comment = new Comment(req.body);
    var id = req.params.id;
    comment.save(function(error) {

      if(error) {
        throw error;
      }

      Post.findOne({"_id": id})
        .populate('comments')
        .exec(function(error, post) {
          if(error) {
            throw error;
          }
          post.comments.push(comment._id);
          post.save();

          const message = {status: true, message: 'Comment created'};
          return res.json(message);
        });
    });
  }
}

module.exports = new CommentsController();
