'use strict';
const Comment = require('../models/comment');
const Post = require('../models/post');

class CommentsController {

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
          console.log('post', post);
          console.log('comment', post.comments[0]);
        });
    });
  }
}

module.exports = new CommentsController();
