var express = require('express');

var app = express();


var path = require('path');
var public = path.join(__dirname);
app.use('/', express.static(public));



app.get('/', (req, res) => {
	res.sendFile('index.html',{root: __dirname });
});

app.listen(1234, () => {
	console.log('listening');
});