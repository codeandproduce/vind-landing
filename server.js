var express = require('express');

var app = express();


var path = require('path');
var public = path.join(__dirname);
app.use('/', express.static(public));



app.get('/', (req, res) => {
	res.sendFile('index.html',{root: __dirname });
});

app.get('/exec/chanwookim', (req, res) => {
	res.sendFile('portfolio/index.html', {root: __dirname});
});


app.get('/exec/chanwookim/projects', (req, res) => {
	res.sendFile('portfolio/projects.html', {root: __dirname});
});


app.listen(1234, () => {
	console.log('listening');
});