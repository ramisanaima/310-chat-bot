//event listener for user input
document.addEventListener("DOMContentLoaded", function getInput() {//when page is fully loaded, call function getInput
    var userField = document.getElementById("input");//identify text input field
    addChat('', 'Hi! Thank you for choosing our store. How are you doing today?');
    userField.addEventListener("keydown", event => {
        if (event.keyCode == 13) {//if enter keydown detected
            var userInput = userField.value; //grab user input
            read(userInput);
            userField.value = null;//reset the user input field
        }
    })
})


//cleaning up user input and trying to match it to a prompt in our script with compare(). Then replying with a response with write()
function read(userInput) {
    var cleanedInput = userInput;

    //lowercase input
    cleanedInput = cleanedInput.toLowerCase();
    //remove unecessary white spaces
    cleanedInput = cleanedInput.trim();
    //remove non alphabetical characters (all prompts are purely alphabetical)
    cleanedInput = cleanedInput.replace(/[^\w\s]/gi, '');

    // find a bot reply based on user input
    var reply = compare(prompts, replies, cleanedInput);
    if (reply === "") {// if no bot reply found
        reply = "Sorry, I didn't quite get that. Try asking a different question.";
    }
    addChat(userInput, reply);
}

function compare(arrayPrompt, arrayReplies, string) {
    let reply = "";
    let foundReply = false;
    for (let x = 0; x < arrayPrompt.length; x++) {
        for (let y = 0; y < arrayPrompt[x].length; y++) {
            if (string.includes(arrayPrompt[x][y])) {
                let replies = arrayReplies[x];
                reply = replies[0];
                foundReply = true;
                //no need to go through all the prompts, break from loop once a match is found
                break;
            }
        }
        if (foundReply) {
            // break from outer loop as well once a respond is found 
            break;
        }
    }
    return reply;
}

function addChat(userMessage, botMessage) {
    const messagesContainer = document.getElementById("messages");

    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.style.textAlign = "right";
    userDiv.style.backgroundColor="#f2f2f2";
    userDiv.innerHTML += userMessage;

    messagesContainer.appendChild(userDiv);
    
    
    let botDiv = document.createElement("div");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botText.innerHTML = "Typing...";
    botDiv.appendChild(botText);

    var delaytime = 1000; //1 second

setTimeout(function() {
    botText.innerHTML = "Bot: " + botMessage;
    botDiv.appendChild(botText);
    messagesContainer.appendChild(botDiv);
}, delaytime);

    //keeps most recent messages
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
}



// sentiment nlp


const SentimentAnalyzer = require('node-nlp');

const sentiment = new SentimentAnalyzer({ language: 'en' });
sentiment
    .getSentiment(userInput)
    .then(result => console.log(result));



// // synonym nlp

// var synonyms = require("synonyms");

// synonyms("screen");
// // returns an object like this:
// {
// 	n:['screen','cover','covert','concealment'],
// 	v;['screen','sieve','sort','test']
// }

// synonyms("screen","v");
// // returns an array like this:
// ['screen','sieve','sort','test']

// synonyms.dictionary
// // returns the whole dictionary