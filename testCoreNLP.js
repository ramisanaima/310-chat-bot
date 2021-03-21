var NLP = require('stanford-corenlp');
 
var coreNLP = new NLP.StanfordNLP({
 
    "nlpPath":"./corenlp",
    "version":"3.6.0",
    //you can skip language if you want to use default english.
    "language":{
        "jar":"./corenlp/stanford-chinese-corenlp-2014-02-24-models.jar",
        "properties":"./corenlp/StanfordCoreNLP-chinese.properties"
    }
 
},function(err) {
  coreNLP.process('This is so good.', function(err, result) {
    console.log(err,JSON.stringify(result));
  });
});