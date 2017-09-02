// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	}

	console.log('Connected to MongoDB server')

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err)
	// 	}
	//
	// 	console.log(JSON.stringify(result.ops, 2))
	// })

	//Insert new doc into Users (name, age, location)
	// db.collection('Users').insertOne({
	// 	name: 'Dophin',
	// 	age: 19,
	// 	location: 'Japan'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert user', err)
	// 	}
	//
	// 	console.log(result.ops[0]._id.getTimestamp())
	// })

	db.close()
})
