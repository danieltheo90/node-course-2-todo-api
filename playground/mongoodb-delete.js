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

	// db.collection('Todos').find().count().then((count)=>{
	// 	console.log(`Todos:${count}`);
	// 	//console.log(JSON.stringify(docs,undefined,2));
	// },(err)=>{
	// 	console.log('Unable to fetch todos',err);
	// });
	// db.collection("Todos").deleteOne({text:"Sales"}).then((results)=>{
	// 	console.log(results);
	// });

	db.collection("Todos").findOneAndDelete({text:"Sales"}).then((results)=>{
		console.log(results);
	});
});
