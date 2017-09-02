// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server')

	// deleteMany
	db.collection('Users').deleteMany({ name: 'Debby' }).then(result => {
		console.log(result)
	})
	db.collection('Users').deleteMany({ name: 'Debby' })
	//deleteOne
	// db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then(result => {
	// 	console.log(result)
	// })
	//findOneAndDelete
	// db
	// 	.collection('Users')
	// 	.findOneAndDelete({ _id: new ObjectID('59a94d21feeb80a9cc1bbb1c') })
	// 	.then(result => {
	// 		console.log(result)
	// 	})
	// db.close()
})
