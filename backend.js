const express = require('express')
const bodyParser = require('body-parser');
const api_helper = require('./API_helper');
const fetch = require("./api");
const app = express();

//configuration statements
app.use(bodyParser.json());
const port = 3002;

//routing
app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'))

app.get('/api', (req, res) => {
	api_helper.make_API_call('https://jsonplaceholder.typicode.com/posts')
	.then(response => {
		res.json(response)
	})
	.catch(error => {
		res.send(error)
	})
})

app.get('/api/comments', (req, res) => {


    api.fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then((response) => response.json())
    .then((json) => console.log(json));

})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app