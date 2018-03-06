//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user ={name :'Daniel',age:25};
// var {name} = user;

// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
	if (err){
		console.log('Unable to connect to MongoDb server');
	}
	console.log('connected to mongoodbServer');

	// db.collection('Todos').insertOne({
	// 	text:' something to do',
	// 	completed: false
	// },(err, result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops));
	// });
	// db.collection('Users').insertOne({
	// 	name:'Daniel',
	// 	age:28,
	// 	location:'Padang'
	// },(err,result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert user',err);
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());
	// })
	db.close();
});
