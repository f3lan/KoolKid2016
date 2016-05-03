'use strict';
const Comment = require('../models/comment');
const Post = require('../models/post');

class CommentsController {

  index(req, res) {
    var postId = req.params.postId;
    Comment.find({"post": postId}, function(error, comments) {
      if(error) {
        throw error;
      } else {
        res.json(comments);
      }
    })
  }

  show(req, res) {
    var id = req.params.id;
    Comment.findOne({"_id": id}, function(error, comment) {
      if(error) {
        throw error;
      } else {
        res.json(comment);
      }
    })
  }

  create(req, res) {
    var comment = new Comment(req.body);
    var id = req.params.postId;
    comment.save(function() {
      Post.findOne({"_id": id})
        .populate('comments')
        .exec(function(error, post) {
          post.comments.push(comment._id);
          post.save();
          comment.post = post._id;
          comment.save();

          const message = {status: true, message: 'Comment created'};
          return res.json(message);
        });
    });
  }

  update(req, res) {
    var id = req.params.id;
    Comment.findByIdAndUpdate(id, {$set: req.body}, function (error, comment) {
      if (error) {
        const message = {status: false, message: error};
        return res.json(message);
      } else {
        const message = {status: true, message: 'Comment update'};
        return res.json(message);
      }
    });
  }
}

module.exports = new CommentsController();
