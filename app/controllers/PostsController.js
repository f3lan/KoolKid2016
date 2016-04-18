'use strict';
const Post = require('../models/post');

class PostsController {

  index(req, res) {
    Post.find({}, function(err, posts) {
      if (err) {
        throw err;
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
        const message = {status: true, message: 'Post reated'};
        return res.json(message);
      }
    });
  }


  update(req, res) {
    //TODO
  }

  delete(req, res) {
    //TODO
  }

}

module.exports = new PostsController();
