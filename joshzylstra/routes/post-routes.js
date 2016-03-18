'use strict'

module.exports = (apiRouter) => {
  let Post = require(__dirname + '/../models/post_model.js')

  apiRouter.route('/posts')

  .get((req, res) => {
    Post.find({}, (err, posts) => {
    res.json(posts)
    })
  })
  .post((req, res) => {
    var newPost = new Post(req.body);
    newPost.save((err, post) => {
      res.json(post)
      //console.log(post)
    })
  })

  apiRouter.route('/posts/:id')

  .get((req, res) => {
    Post.findById(req.params.id, (err, post) => {
    res.json(post)
    //console.log(post)
    })
  })
  .put((req, res) => {
      Post.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
      if (err) return res.send(err);
      res.json(post);
    })
  })
  .delete((req, res) => {
      Post.findById(req.params.id, (err, post) => {
        post.remove((err, post) => {
          res.json({message: 'Post removed'});
          })
        })
      })
}
