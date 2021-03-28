import NLPClientInput from './server.js';

import { SentimentAnalyzer } from 'node-nlp';
function sentimentAnalysis(string) {
    const sentiment = new SentimentAnalyzer({ language: 'en' });
sentiment
    .getSentiment(string)
    .then(result => console.log(result));
}