'use strict'

module.exports = (apiRouter) => {
  let User = require(__dirname + '/../models/user_model.js')

  apiRouter.route('/users')
    .get((req, res) => {
      User.find({}, (err, users) => {
      res.json(users)
      //console.log(users)
    })
  })
    .post((req, res) => {
      var newUser = new User(req.body);
      newUser.save((err, user) => {
      res.json(user)
      //console.log(user)
    })
  })

  apiRouter.route('/users/:id')
    .get((req, res) => {
      User.findById(req.params.id, (err, user) => {
      res.json(user)
      //console.log(user)
    })
  })
    .put((req, res) => {
      User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
      if (err) return res.send(err);
      res.json(user);
    })
  })
    .delete((req, res) => {
      User.findById(req.params.id, (err, user) => {
      user.remove((err, user) => {
      res.json({message: 'user removed'});
      })
    })
  })
}


// app.get('/users', (req, res) => {
//   User.find({}, (err, users) => {
//     res.json({data: users})
//     console.log(users)
//   })
// })
// app.get('/users/:id', (req, res) => {
//   User.findById(req.params.id, (err, user) => {
//     res.json(user)
//     console.log(user)
//   })
// })
// app.post('/users', (req, res) => {
//   var newUser = new User(req.body);
//   newUser.save((err, user) => {
//     res.json(user)
//     console.log(user)
//   })
// })
// app.put('/users/:id', (req, res) => {
//   User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
//     if (err) return res.send(err);
//     res.json(user);

//   })
// })
// app.delete('/users/:id', (req, res) => {
//   User.findById(req.params.id, (err, user) => {
//     user.remove((err, user) => {
//       res.json({message: 'user removed'});
//     })
//   })
// })
