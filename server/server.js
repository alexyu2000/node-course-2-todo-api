var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=> {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

//
// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });
//
// newTodo.save().then ((doc) => {
//   console.log('saved todo', doc);
// }, (e) => {
//   console.log('unable to save todo')
// });
//
//
// var otherTodo = new Todo({
//   text: 'Edit this video'
//   // completed: true,
//   // completedAt: 123
// });
//
// otherTodo.save().then ((doc) => {
//   console.log('saved othertodo', doc);
// }, (e) => {
//   console.log('unable to save todo', e);
// });

// Users
// email - required it - trim it - set type - set min length of 1


//
// var newUser = new User({
//   email: 'abc@gmail.com'
// });
//
// newUser.save().then ((doc) => {
//   console.log('saved user', doc);
// }, (e) => {
//   console.log('unable to save user', e)
// });
//

  //db.close();
