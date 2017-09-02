// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server')
	/*
		it has to use update operators,
		https://docs.mongodb.com/manual/reference/operator/update/
	*/
	// db
	// 	.collection('Todos')
	// 	.findOneAndUpdate(
	// 		{
	// 			_id: new ObjectID('59aa8902fa5719ba3507fcb3')
	// 		},
	// 		{
	// 			$set: {
	// 				completed: true
	// 			}
	// 		},
	// 		{
	// 			returnOriginal: false
	// 		}
	// 	)
	// 	.then(result => {
	// 		console.log(result)
	// 	})

	//chellenge
	db
		.collection('Users')
		.findOneAndUpdate(
			{
				_id: new ObjectID('59a93324973da58b63548b1e')
			},
			{
				$set: {
					name: 'Darren',
					location: 'Taiwan'
				},
				$inc: {
					age: -20
				}
			},
			{
				returnOriginal: false
			}
		)
		.then(result => {
			console.log(result)
		})
	// db.close()
})
