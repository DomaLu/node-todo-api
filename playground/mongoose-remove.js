const { ObjectID } = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// Todo.remove({}).then(result => {
// 	console.log(result)
// })

//Todo.findOneAndRemove()
Todo.findOneAndRemove({ _id: '59b3e31722281bc6bf0fdc4d' }).then(todo =>
	console.log(todo)
)

//Todo.findByIdAndRemove()
// Todo.findByIdAndRemove('59b3e31722281bc6bf0fdc4c').then(todo =>
// 	console.log(todo)
// )
