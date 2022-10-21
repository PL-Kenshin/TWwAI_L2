const express = require('express');
const app = express();
const config = require('./config').config;
const questions = require('./questions').preQuestions;

app.get('/api/questions', (request, response) => {
    let result = ""
    questions.forEach(element =>{
        result += "<p>" + element.question + "</p>"
    })
    response.send(result);
});

app.listen(config.port, function () {
 console.info(`Server is running at port 3000`);
});
