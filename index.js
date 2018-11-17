var express = require('express');
var pug = require('pug');
var path = require('path');
var config = require('./config.json')

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
    res.render('pages', {
        "title": req.params.name,
        "config": config
    });
});

function openMenu() {
    document.getElementById('dropdownMenu').classList.toggle('show');
}

// window.onclick = function(event) {
//     if(!event.target.matches('.dropButton')) {
//         var dropdowns = document.getElementsByClassName('.link_item');
//         var i;
//         for(i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if(openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

app.listen(3000);