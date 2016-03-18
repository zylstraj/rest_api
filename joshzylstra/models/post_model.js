const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: String,
  content: String
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: 'User'
  // }
  // user is actually an object: Schema.ObjectId is an actual type:
  // user: { type: Schema.ObjectId, ref: 'users'
  })

module.exports = mongoose.model('Post', postSchema)
