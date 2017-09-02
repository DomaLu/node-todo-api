// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	}

	console.log('Connected to MongoDB server')

	// db
	// 	.collection('Todos')
	// 	.find({
	// 		_id: new ObjectID('59a95087fa5719ba3507cdb7')
	// 	})
	// 	.toArray()
	// 	.then(
	// 		docs => {
	// 			console.log(`Todos${JSON.stringify(docs, undefined, 2)}`)
	// 		},
	// 		err => {
	// 			console.log('Unable to fetch todos', err)
	// 		}
	// 	)
	// db.collection('Todos').find().count().then(
	// 	count => {
	// 		console.log(`Todos count: ${count}`)
	// 	},
	// 	err => {
	// 		console.log('Unable to fetch todos', err)
	// 	}
	// )

	db
		.collection('Users')
		.find({
			name: 'Dophin'
		})
		.toArray()
		.then(
			docs => {
				console.log(`Todos${JSON.stringify(docs, undefined, 2)}`)
			},
			err => {
				console.log('Unable to fetch todos', err)
			}
		)

	// db.close()
})
