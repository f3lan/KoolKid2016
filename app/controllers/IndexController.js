'use strict';
const Post = require('../models/post');
class IndexController {

  index(req, res) {
    res.render('index', {
      title: "Question And Answers for Doctors",
      session: req.session
    });
  }

  post(req,res){
    res.header("Content-Type", "application/json; charset=utf-8");
    var title = decodeURIComponent(req.params.title);
    var category = decodeURIComponent(req.params.category);
    var image = decodeURIComponent(req.params.image);
    var question = decodeURIComponent(req.params.question);

    var post = new Post(
        {
          title:title,
          category:category,
          image:image,
          question:question
        }
    );

    post.save(function(err){
      var status = true;
      if(err) {
        console.log(err);
        status = false;
      }

      res.json({status:status,  err:''});
    });


  }
}

module.exports = new IndexController();
