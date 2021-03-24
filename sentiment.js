import input from app.js;

const { SentimentAnalyzer } = require('node-nlp');

const sentiment = new SentimentAnalyzer({ language: 'en' });
sentiment
    .getSentiment('I like cats')
    .then(result => console.log(result));