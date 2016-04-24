'use strict';
const Post = require('../models/post');

class PostsController {

  index(req, res) {
    Post.find({}, function(error, posts) {
      if (error) {
        throw error;
      } else {
        res.json(posts);
      }
    });
  }

  show(req, res) {
    Post.find({"_id": req.params.id}, function(error, post) {
      if(error) {
        throw error;
      } else {
        res.json(post);
      }
    })

  }

  create(req, res) {
    const post = new Post(req.body);
    post.save(function(error) {
      if(error) {
        const message = {status: false, message: error};
        return res.json(message);
      } else {
        const message = {status: true, message: 'Post created'};
        return res.json(message);
      }
    });
  }

  createComment(req, res) {
    Post.findByIdAndUpdate(req.params.id,
        {$set: req.body},
        function (error, post) {
          if (error) {
            throw error;
          } else {
            res.json(post);
          }
        });
  }

  update(req, res) {
    Post.findByIdAndUpdate(req.params.id,
                          {$set: req.body},
                          function (error, post) {
      if (error) {
        throw error;
      } else {
        res.json(post);
      }
    });
  }

  delete(req, res) {
    Post.remove({"_id": req.params.id}, function(error, post) {
      if(error) {
        const message = {status: false, message: error};
        return res.json(message);
      } else {
        const message = {status: true, message: 'Post deleted'};
        return res.json(message);
      }
    })
  }

}

module.exports = new PostsController();
