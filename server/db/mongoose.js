var mongoose = require('mongoose')

mongoose.Promise = global.Promise

if (process.env.NODE_ENV === 'production') {
	mongoose.connect(process.env.MONGO_URI)
} else {
	mongoose.connect('mongodb://localhost:27017/todoApp')
}

module.exports = { mongoose }
