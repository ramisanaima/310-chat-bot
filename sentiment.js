import userInput from app.js;

const { SentimentAnalyzer } = require('node-nlp');

const sentiment = new SentimentAnalyzer({ language: 'en' });
sentiment
    .getSentiment(userInput)
    .then(result => console.log(result));