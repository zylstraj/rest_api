'use strict'

module.exports = (apiRouter) => {
  let Student = require(__dirname + '/../models/student_model.js')

  apiRouter.route('/students')
    .get((req, res) => {
      Student.find({}, (err, students) => {
      res.json(students)
      //console.log(students)
      })
    })
    .post((req, res) => {
      var newStudent = new Student(req.body);
      newStudent.save((err, student) => {
      res.json(student)
      //console.log(student)
      })
   })

apiRouter.route('/students/major')
     .get((req, res) => {
       Student.aggregate([{$group: {_id: '$major', total: {$sum:1}}}], (err, students) => {
        if (err) {console.error(err);}
         res.json(students);
       });
     });

  apiRouter.route('/students/:id')
    .get((req, res) => {
      Student.findById(req.params.id, (err, student) => {
      res.json(student)
      //console.log(student)
    })
  })
    .put((req, res) => {
      Student.findByIdAndUpdate(req.params.id, req.body, (    err, student) => {
        if (err) return res.send(err);
        res.json(student);
      })
    })
    .delete((req, res) => {
      Student.findById(req.params.id, (err, student) => {
        student.remove((err, student) => {
          res.json({message: 'dumb student removed'});
          })
        })
      })
}
