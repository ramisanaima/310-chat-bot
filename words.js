/*
This class stores all the possible word cases within the string and stores a response to the script that the bot will reply to. 
It uses 2D arrays to store the data that the bot will sort through in order to find the proper case.
*/ 
const prompts = [
    //0
    ["im good", "im fine", "im great", "im decent", "im ok", "I am good", "I am fine", "I am great", "I am decent", "I am ok"], //Feeling Good
    //1
    ["im feeling bad", "im terrible", "im awful", "I am not ok", "I am bad", "I am terrible", "I am not great", "I am feeling awful"],  //Feeling bad
    //2
    ["my name is", "im called", "call me"],//name (Name recognition needed)
    //3
    ["my order","order number"],//order number
    //4
    ["happy with", "satisfied with", "pleased with", "works well", "loved it"], //likes product, (high sentiment) ([0,4] requires happy with product track)
    //5
    ["told my", "gave it to", "recommended to"], //referred product ([0,5] requires happy with product track)
    //6
    ["want more", "premium", "I want to become a premium customer", "subscribe"], //Wants to become a premium customer ([0,6] requires premium track)
    //7
    ["I don't want to be a premium customer", "unsubscribe", "cancel subscription"], //Cancel premium customer
    //8
    ["not working", "need repairs", "damaged", "does not work", "broken"],  //broken product ([0,8] requires bad product track)
    //9
    ["hate", "dislike","unhappy", "bad quality", "dissatisfied","unsatisfied",], //Unhappy (low sentiment) ([0,9] requires bad product track)
    //10
    ["replace", "exchange"], //replace ([0,10] requires replacement track])
    //11
    ["refund", "money back","reimburse"],  //refund ([0,11] requires refund track)
    //12
    ["call executive", "contact executive", "chat with an executive", "talk with a person",], // talk to an executive track ([0,12] requires talk to other track])
    //13
    ["do not understand", "confused", "assistance", "assist", "not sure how"], //confused about product ([0,13] requires talk to other track])
    //14
    ["another product","another order","different product","different order", "something else"], //other product, back to main
    //15
    ["rate",'rating', 'feedback','report', "thanks for your help", "all done", "no more help needed", "finished talking"], //done talking ([0,15] requires rating track])
    //16
    ["yes", "file complaint", "complaint"] //file a complaint ([0,16] requires complaint track])
]



//Ideal script followed by any default replies
const replies = [
    //0
    ["I am glad to hear that! Could I please get your name?"],  //Feeling Good
    //1
    ["I am very sorry to hear that, I truely hope your day gets better! Could I please get your name?"],  //Feeling bad
    //2
    ["Nice to meet you! Could I get your order number or your issue?"],  //name response
    //3
    ["Got it! How can we assist you with your product?"], //order number response
    //4
    ["We are happy to receive this positive feedback! Could you tell us a bit more about what you liked? Or you can subscribe to become a premium customer?"],  //likes product, (high sentiment) ([0,4] requires happy with product track)
    //5
    ["Perfect! I'm so glad you liked our product enough to recomend it to another. Could you tell us a bit more about what you liked? Or you can subscribe to become a premium customer?"],  //referred product ([0,5] requires happy with product track)
    //6
    ["I would love to help you become a premium customer! Let u"],  //13 if no
    //7
    ["We're sorry to hear that this has occured, can you give more specific information about your problem?"], //6
    //8 
    ["I am sorry that this product has given you trouble, could you please tell us further what is broken or confusing?", "I am so sorry for your experience. Do you want a replacement, refund, or talk to an executive? Please pick one."],  //7
    //9
    ["Here's the form to request a replacement. Can I help you with anything else?"], //replace
    //10
    ["Here's the form to request a refund. Can I help you with anything else?"], //refund
    //11
    ["Here's the contact information of an executive you may contact between 10:00 AM to 4:00 PM PST. Can I help you with anything else?"],
    //12
    ["What can we help you with? Please specify."],  //talk to an executive
    //13
    ["Sure thing! Please enter another order number!"],
    //14
    ["We would love to hear your thoughts! Rate your experience with us today from 0 to 10!"],
    //15
    ["We're so sorry, would you like to file a complaint?"], //bad rating
    //16
    ["Here's the form to file a complaint. We apologize for the inconvenience, thank you for using our services."], //if yes file a complaint, pretend user fills form
    //17
    ["We apologize for the inconvenience, thank you for using our services."], //bad rating after yes or no file complaint END
    //18
    ["Thank you for sharing your feedback. Hope you have a better experience next time!"],  //10 Unhappy
    //19
    ["Thank you for the feedback. Hope we can always serve you well!"],  //14 END
    //20
    ["Sorry. Could you please explain in detail?"], // 16 no match  go to replace refund or talk to an executive if mention
    //21
    ["I'm sorry if we're not able to help you with your specific query. I could offer you a refund or a replacement for your order, or I could connect you to an executive."], //17
    //22
    ["Sorry we cannot help you with your specific query. Here are some FAQs you might want to look into."], //18 no match END
    //23
    ["How would you rate this conversation?"], //19
    //24
    ["Let us know how we can improve!"], //average rating pretend user fills form
    //25
    ["Thank you for letting us know!"], // average rating feedback END
    //26
    ["Thank you for using our service, we're glad we could be of service!"] //good rating END

]

const goodProductTrack = [
    //1
    ["another product","another order","different product","different order", "something else"] //other product, done: BACK TO MAIN TRACK
]

const goodProductTrackReplies = [
    //1
    ["Of course! I am happy to help you with something else, how can I assist?"] //other product, done: BACK TO MAIN TRACK
]

const premiumTrack = [
    //1
    ["another product","another order","different product","different order", "something else"] //other product, done: BACK TO MAIN TRACK
]

const premiumTrackReplies = [
    //1
    ["Of course! I am happy to help you with something else, how can I assist?"] //other product, done: BACK TO MAIN TRACK
]

const badProductTrack = [
    //1
    ["another product","another order","different product","different order", "something else"] //other product, done: BACK TO MAIN TRACK
]

const badProductTrackReplies = [
    //1
    ["Of course! I am happy to help you with something else, how can I assist?"] //other product, done: BACK TO MAIN TRACK
]

const replacementTrack = [
    //1
    ["another product","another order","different product","different order", "something else"] //other product, done: BACK TO MAIN TRACK
]

const replacementTrackReplies = [
    //1
    ["Of course! I am happy to help you with something else, how can I assist?"] //other product, done: BACK TO MAIN TRACK
]

const refundTrack = [
    //1
    ["another product","another order","different product","different order", "something else"] //other product, done: BACK TO MAIN TRACK
]

const refundTrackReplies = [
    //1
    ["Of course! I am happy to help you with something else, how can I assist?"] //other product, done: BACK TO MAIN TRACK
]

const talkToOtherTrack = [
    //1
    ["another product","another order","different product","different order", "something else"] //other product, done: BACK TO MAIN TRACK
]

const talkToOtherTrackReplies = [
    ///1
    ["Of course! I am happy to help you with something else, how can I assist?"] //other product, done: BACK TO MAIN TRACK
]

const ratingTrack = [
    //1
    ["another product","another order","different product","different order", "something else"] //other product, done: BACK TO MAIN TRACK
]

const ratingTrackReplies = [
    //1
    ["Of course! I am happy to help you with something else, how can I assist?"] //other product, done: BACK TO MAIN TRACK
]

const complaintTrack = [
    //1
    ["another product","another order","different product","different order", "something else"] //other product, done: BACK TO MAIN TRACK
]

const complaintTrackReplies = [
    //1
    ["Of course! I am happy to help you with something else, how can I assist?"] //other product, done: BACK TO MAIN TRACK
]

const outsidePrompts = [
    //1
    ["covid", "corona", "conoravirus", "covid19", "covid 19", "pandemic"], // covid topic
    //2
    ["i love you"],// client tries flirting with the bot
    //3
    ["whats your name", "what are you called", "your name","what do you call yourself"], // ask for bot's name
    //4
    ["how are you", "how is your day", "how is it going", "how is life"], // awkward small talk
    //5
    ["tell me something funny", "tell me a joke", "joke", "funny", "make me laugh"] // jokes
]



//Ideal script followed by any default replies
const outsideReplies = [  
    //1  
    ["The pandemic has been tough on everyone and we hear you. We're working our best to still deliver satisfactory virtual assistance - that's why I exist!", 
    "Due to the pandemic, we are limiting in person services to keep you and our employees safe! So sorry for any inconvenience!", 
    "To help lighten the workload for our employees during the pandemic, some of our operations have been delegated to me!",
    "Remember to wear a mask! Contagion probability reduces to 1.5% if everyone wore a mask!",
    "These are scary times, but we're in this together!"],  // covid 19
    //2
    ["Sorry! As a chatbot, I'm not capable of feelings, but you're a great friend!",
    "This is awkward...",
    "I appreciate it! If I were not just a collection of code, I probably would love you too! Probably.",
    "Nice! Thanks!",
    "Oh wow, that's really sweet!"], // client tries flirting with the bot
    //3
    ["I was not given a name, you can call me whatever you want!", 
    "I don't have one. Could I have yours?",
    "My creator did not give me one, but for a while they thought naming me Jerolt would be good!"], // ask for bots name
    //4
    ["I'm doing great! Thanks for asking!", 
    "I'm very happy to be talking with you!", 
    "I'm having a blast! I love existing!"], // awkward small talk
    //5
    ["what is a frog's favourite drink? a Croakacola!", 
    "I hate Russian dolls, they're so full of themselves.", 
    "What do you call a farm that makes bad jokes? Corny!", 
    "What do you call it when one cow spies on another? A steak out!",
    "What do you call a fish with no eye? Fssshh."
    ]// jokes
]