//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://192.168.1.125:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server!')
  }
  console.log('Connect to MongoDB server!!');

  // find one and update
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59e44dfb67dd4b040df4aab9')
  // }, {
  //   $set: {
  //     completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Jan Lee'
  }, {
    $set: {
      name: 'Jan Lee'
    },
    $inc: {
      age: 1
    }
  }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
  });

  //db.close();
});
