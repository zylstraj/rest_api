const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  hometown: String,
  major: String
});

module.exports = mongoose.model('Student', studentSchema);
