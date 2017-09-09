var express = require('express')
var bodyParser = require('body-parser')

const { ObjectID } = require('mongodb')
var { mongoose } = require('./db/mongoose')
var { Todo } = require('./models/todo')
var { User } = require('./models/user')

var app = express()
const port = process.env.PORT || 3000

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
	if (!ObjectID.isValid(id)) return res.status(404).send('error id')

	Todo.findById(id)
		.then(todo => {
			if (!todo) {
				return res.status(404).send('No todo found')
			}
			res.send({ todo })
		})
		.catch(err => res.status(404).send('error id'))
})

app.delete('/todos/:id', (req, res) => {
	//get the id
	var id = req.params.id
	//validate the id -> not valid? return 404
	if (!ObjectID.isValid(id)) return res.status(404).send('error id')

	//Remove todo by id
	Todo.findByIdAndRemove(id)
		.then(todo => {
			if (!todo) {
				return res.status(404).send('No todo found')
			}

			res.send({ todo })
		})
		.catch(err => res.status(400).send('error id'))
})

app.get('/', (req, res) => res.send('Hello world'))

app.listen(port, () => {
	console.log(`Started up port ${port}`)
})

module.exports = { app }
