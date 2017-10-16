//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://192.168.1.125:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server!')
  }
  console.log('Connect to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  //  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //    console.log(result);
  //  });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // deleteMany
  db.collection('Users').deleteMany({name: 'Peter Pan'}).then((result) => {
    console.log(result);
  });

  //findOneAndDelete
   db.collection('Users').findOneAndDelete({
     _id: new ObjectID('59e3302cda737f03dc194489')
   }).then((result) => {
     console.log(JSON.stringify(result, undefined, 2));
   });

  //db.close();
});
