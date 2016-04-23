'use strict';

let passport = require('passport');

const Post = require('../models/post');

class PostController {

  findall(req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    Post.find({}, function(err, posts) {
      if (err) {
        throw err;
      } else {
        res.json(posts);
      }
    });
  }

  findbyauthor(req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    Post.find({author:req.params.author}, function(err, posts) {
      if (err) {
        throw err;
      } else {
        res.json(posts);
      }
    });
  }

  findbyid(req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    Post.find({_id:req.params.id}, function(err, posts) {
      if (err) {
        throw err;
      } else {
        res.json(posts);
      }
    });
  }

  newpost(req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    var post = new Post({
      author:req.params.author
    });

    post.save(function(err) {
      if (err) throw err;

      res.json({status:true});
    });
  }

  newcomment(req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    var postForComment;
    Post.find({_id:req.params.id}, function(err, post) {
      if (err) {
        console.log(err);
      }
      postForComment = post;
    });
    
    postForComment.save(function(err) {
      if (err) throw err;
      res.json({status:true});
    });
  }

  deleteById(req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    Post.findOneAndRemove({_id:req.params.id}, function(err, posts) {
      if (err) {
        throw err;
      } else {
        res.json({status:true});
      }
    });
  }
}

module.exports = new PostController();
