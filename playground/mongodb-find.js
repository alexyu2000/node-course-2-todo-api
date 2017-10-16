//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://192.168.1.125:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server!')
  }
  console.log('Connect to MongoDB server');

  db.collection('Users').find({name: 'Peter Pan'}).toArray().then((docs)=> {
    console.log(JSON.stringify(docs, undefined, 2));
  });

  // db.collection('Todos').find({
  //   _id: new ObjectID('59e32d836ae32f03d2dc8e00')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fatch todos', err);
  // });

  //db.close();
});
