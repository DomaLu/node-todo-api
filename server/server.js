var express = require('express')
var bodyParser = require('body-parser')

const { ObjectID } = require('mongodb')
var { mongoose } = require('./db/mongoose')
var { Todo } = require('./models/todo')
var { User } = require('./models/user')

var app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
	// console.log(req.body)
	var { text, completed, completedAt } = req.body
	var todo = new Todo({
		text,
		completed,
		completedAt
	})

	todo.save().then(
		doc => {
			res.send(doc)
		},
		err => {
			res.status(400).send(err)
		}
	)
})

app.get(
	'/todos',
	(req, res) => {
		Todo.find().then(todos => {
			res.send({ todos })
		})
	},
	err => {
		res.status(400).send(err)
	}
)
// GET /todos/12341234
app.get('/todos/:id', (req, res) => {
	var id = req.params.id
	// if (!ObjectID.isValid(id)) res.status(404).send('This id is not valid')

	Todo.findById(id).then(
		todo => {
			if (!todo) res.status(404).send('Not found todo')
			res.send({ todo })
		},
		err => res.status(404).send('error id')
	)
})

app.listen(3000, () => {
	console.log('Start on port 3000')
})

module.exports = { app }
