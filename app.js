var express = require('express');
var app = express();
var path = require('path');
var {sendFile} = require('fs');
/*
app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './index.html'), function(){
        console.log('done');
    });
}); */
app.use(express.static('./files'));
app.all('*', function(req, res){
    res.send('not found');
    console.log('404');
})
app.listen(2000);