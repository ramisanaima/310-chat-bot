import express from 'express';
import { readFile } from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors';
import { SentimentAnalyzer } from 'node-nlp';

const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT=8080; 

app.use(express.static(__dirname + '/index'));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true})); 
 app.use(cors());



readFile('./public/index.html', function (err, html) {

    if (err) throw err; 

    app.get('/', (request, response) => {
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html); 
        response.end();  
      }).listen(PORT);

});

//Route that handles message logic
app.use(bodyParser());
app.use(bodyParser.urlencoded({
  extended: true
}));      
app.use(bodyParser.text());
app.post('/message', function(req, res) {

  var clientInput = JSON.stringify(req.body);//Unclean JSON Input from CLient
  console.log("Server recieved: " + clientInput);

  var NLPClientInput = clientInput.substring(clientInput.indexOf(':')+2,clientInput.lastIndexOf('"')); //NLP it

  sentimentAnalysis(NLPClientInput);

  res.send({ cleanedInput: NLPClientInput}); //Sends back this output in JSON format (Put info in brackets)
  console.log("Server sending: " + NLPClientInput);

});

function sentimentAnalysis(string) {
  const sentiment = new SentimentAnalyzer({ language: 'en' });
sentiment
  .getSentiment(string)
  .then(result => console.log(result));
  console.log(JSON.stringify(result));

}

app.listen(1337);

function nameEntityRecognition(){
import ner from 'wink-ner';
// Create your instance of wink ner & use default config.
var myNER = ner();
// Define training data.
var trainingData = [
  { text: 'manchester united', entityType: 'club', uid: 'manu' },
  { text: 'manchester', entityType: 'city' },
  { text: 'U K', entityType: 'country', uid: 'uk' }
];
// Learn from the training data.
myNER.learn( trainingData );
// Since recognize() requires tokens, use wink-tokenizer.
//var winkTokenizer = require( 'wink-tokenizer' );
import winkTokenizer from 'wink-tokenizer';
// Instantiate it and extract tokenize() api.
var tokenize = winkTokenizer().tokenize;
// Tokenize the sentence.
var tokens = tokenize( 'My name is Shreyasi' );
// Simply Detect entities!
tokens = myNER.recognize( tokens );
console.log( tokens );
}