const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '/');

var app = express();
var port = process.env.PORT || 3000;

app.use('/', express.static(publicPath));


app.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/projects', (req, res)=>{
	res.sendFile(path.join(__dirname + '/projects.html'));
})


app.listen(port);