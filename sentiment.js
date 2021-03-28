//import userInput from app.js;

import { SentimentAnalyzer } from 'node-nlp';

const sentiment = new SentimentAnalyzer({ language: 'en' });
sentiment
    .getSentiment('i like cats') // userInput
    .then(result => console.log(result));