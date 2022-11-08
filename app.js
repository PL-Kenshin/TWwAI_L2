const express = require('express');
const config = require('./config').config;
const app = express();

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.listen(config.port, function () {
   console.info(`Server is running at port 3000`);
});


app.get('/', (request, response) => {
    response.render(__dirname + '/index.html', {subject: ' Informatyka aplikacji Internetu'}
 )
 });
 
