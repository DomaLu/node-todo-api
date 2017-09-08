const { ObjectID } = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// Correct id: 59b0d7760f33202878a0e35a

/*
  This will not cause error.
  var id = '69b0d7760f33202878a0e35a'
*/

//This will cause an error.
// var id = '59b0d7760f33202878a0e35a11'

// if (!ObjectID.isValid(id)) console.log('ID not valid')

// Todo.find({
// 	_id: id
// }).then(todos => {
// 	console.log('Todos', todos)
// })
//
// Todo.findOne({
// 	_id: id
// }).then(todo => {
// 	console.log('Todo', todo)
// })

// Todo.findById(id)
// 	.then(todo => {
// 		if (!todo) {
// 			return console.log('Id not found')
// 		}
// 		console.log('Todo By Id', todo)
// 	})
// 	.catch(err => console.log(err))

var id = '59aec0576f9045521adfcf69',
	NoErrId = '69aec0576f9045521adfcf69',
	Errid = '59aec0576f9045521adfcf6911'

if (!ObjectID.isValid(Errid)) console.log("Invalid user's id")

// User.findById(id)
// 	.then(user => {
// 		if (!user) {
// 			return console.log('user not found')
// 		}
//
// 		console.log('user', user)
// 	})
// 	.catch(err => console.log(err))

// console.log(User)

User.findById(id).then(
	user => {
		if (!user) {
			return console.log('Unable to find user')
		}

		console.log(JSON.stringify(user, undefined, 2))
	},
	err => console.log(err)
)
