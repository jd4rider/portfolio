const express = require('express');
const path = require('path');
const app = express();

app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})

app.use(express.static(__dirname + '/public'));


//Routes defined
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html')
})

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/pages/about.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/pages/contact.html')
})

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/pages/projects.html')
})

app.get('/guessthestory', (req, res) => {
    res.sendFile(__dirname + '/pages/guessthestory.html')
})
