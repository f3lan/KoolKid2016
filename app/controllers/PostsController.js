'use strict';
const uuid = require('node-uuid');
const Post = require('../models/post');
const multiparty = require('multiparty');
const fs = require('fs');

class PostsController {

    index(req, res) {
        Post.find({}, function (error, posts) {
            if (error) {
                throw error;
            } else {
                res.json(posts);
            }
        });
    }

    show(req, res) {
        Post.find({"_id": req.params.id}, function (error, post) {
            if (error) {
                throw error;
            } else {
                res.json(post);
            }
        })

    }

    create(req, res) {
        const post = new Post(req.body);
        post.save(function (error) {
            if (error) {
                const message = {status: false, message: error};
                return res.json(message);
            } else {
                const message = {status: true, message: 'Post created', post: post};
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

    createAnswer(req, res) {
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
        Post.remove({"_id": req.params.id}, function (error, post) {
            if (error) {
                const message = {status: false, message: error};
                return res.json(message);
            } else {
                const message = {status: true, message: 'Post deleted'};
                return res.json(message);
            }
        })
    }


    upload(req, res) {
        console.log(req, res);
        var fileId = req.params.id;
        
        var form = new multiparty.Form();
        
        form.parse(req, function (err, fields, files) {
            var file = files.file[0];
            var contentType = file.headers['content-type'];
            var tmpPath = file.path;
            var extIndex = tmpPath.lastIndexOf('.');
            var extension = (extIndex < 0) ? '' : tmpPath.substr(extIndex);
            var fileName = fileId + extension;
            var destPath = 'app/assets/uploads/' + fileName;

            if (contentType !== 'image/png') {
                fs.unlink(tmpPath);
                return res.status(400).send('Unsupported file type.');
            }

            fs.rename(tmpPath, destPath, function (err) {
                if (err) {
                    return res.status(400).send('Image is not saved:');
                }
                return res.json(destPath);
            });
        });
    };

}

module.exports = new PostsController();
