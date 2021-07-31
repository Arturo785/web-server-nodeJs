const http = require('http');
const express = require('express');
const app = express();

require('dotenv').config(); // to configure env variables 

const hbs = require('hbs');

const PORT = process.env.PORT;


// with this we use hbs files that are in views, we installed hbs in npm
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

// // oldWay
// http.createServer((request, response) => {


//    // response.writeHead(200);
//     response.write('Hola mundo');
//     response.end();
// }).listen(8081);

// console.log('Listening 8081');

//our middleware
// serve static content
app.use(express.static('public'));


// 1st searchs in the public folder, then on our gets and last on our default


//express way

app.get('/', (req, res) => {
    res.render('home', {
        name: "Jorge Arturo",
        tittle: "Node course"
    });
});

app.get('/test', (req, res) => {
    res.send('Si jala')
});


// this is using the HBS route


app.get('/generic', (req, res) => {
    res.render('generic')
});

app.get('/elements', (req, res) => {
    res.render('elements')
});



// this is using the HTML public routes

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// });

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});



app.listen(PORT);



