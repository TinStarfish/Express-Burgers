var express = require('express');
var pug = require('pug');
var path = require('path');
var fs = require('fs');
var config = require('./config.json');
var pageContent = require('./pageContents.json');
var turyContentDrank = require('./turyDrank.json');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + "/public")));

app.get('/', function (req, res) {
    res.render('index', {
        'title':'Home',
        "config":config
    });    
});

app.get('/:name', function(req, res) {
    res.render('burgers', {
        "title": req.params.name,
        "config": config
    });
});

function loadJSONData() {
    console.log("Loading JSON Data...")
    for (var exKey in pageContent) {
        console.log("" + pageContent[exKey]);
        
    }
    
    
}

app.listen(3000);