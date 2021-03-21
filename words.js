/*
This class stores all the possible word cases within the string and stores a response to the script that the bot will reply to. 
It uses 2D arrays to store the data that the bot will sort through in order to find the proper case.
*/ 
const prompts = [
    //1
    ["im good", "im fine", "im great", "im decent", "im ok"], //Feeling Good
    //2
    ["im feeling bad", "im terrible", "im awful"],  //Feeling bad
    //3
    ["my name", "im called", "call me"],//cannot expect prompt (name)
    //4
    ["my order","order number"],//cannot expect prompt (order number)
    //5
    ["happy with", "satisfied with", "pleased with", "works"],
    //6
    ["sign up", "yes", "become premium customer","subscribe"],
    //7
    ["no thank you", "not now"],
    //8
    ["do not understand", "not working", "need repairs", "damaged", "does not work", "broken"],  //6
    //9
    ["hate", "dislike","unhappy", "bad quality", "dissatisfied","unsatisfied",], //7 Unhappy
    //10
    ["replace", "exchange"], //replace
    //11
    ["refund", "money back","reimburse"],  //refund
    //12
    [ "executive", "contact", "call", "chat"], // talk to an executive
    //13
    ["help", "help me", "assistance", "assist"], //help go to 15
    //14
    ["another product","another order","different product","different order"],
    //15
    ["rate",'rating', 'feedback','report'],
    //16
    ["0", "1", "2", "3"], // bad rating
    //17
    ["yes", "file complaint", "complaint"], //file a complaint
    //18
    ["no", "its okay"],
    //19
    ["4", "5", "6"], // average rating
    //20
    ["7", "8", "9", "10"] // good rating

]



//Ideal script followed by any default replies
const replies = [
    //1
    ["I am glad to hear that! Could I please get your name?"],  //1 Feeling Good
    //2
    ["I am very sorry to hear that! Could I please get your name?"],  //2 Feeling bad
    //3
    ["Nice to meet you! Could you please enter the order number found on your receipt?"],  //3 name response
    //4
    ["How can we assist you with your product?"], //4 //order number response
    //5
    ["We are happy to receive this positive feedback! Would you like to be our premium customer?"],  //11 premium customer
    //6
    ["Sounds good! Here's the form to fill to be a premium customer. Can I help you with anything else?"],  //12 if yes
    //7
    ["That's okay. Maybe some other time. Can I help you with anything else?"],  //13 if no
    //8
    ["We're sorry to hear that this has occured, can you give more specific information about your problem?"], //6
    //9 
    ["I am sorry that this product has given you trouble, could you please tell us further what is broken or confusing?", "I am so sorry for your experience. Do you want a replacement, refund, or talk to an executive? Please pick one."],  //7
    //10
    ["Here's the form to request a replacement. Can I help you with anything else?"], //replace
    //11
    ["Here's the form to request a refund. Can I help you with anything else?"], //refund
    //12
    ["Here's the contact information of an executive you may contact between 10:00 AM to 4:00 PM PST. Can I help you with anything else?"],
    //13
    ["What can we help you with? Please specify."],  //talk to an executive
    //14
    ["Sure thing! Please enter another order number!"],
    //15
    ["We would love to hear your thoughts! Rate your experience with us today from 0 to 10!"],
    //16
    ["We're so sorry, would you like to file a complaint?"], //bad rating
    ["Here's the form to file a complaint. We apologize for the inconvenience, thank you for using our services."], //if yes file a complaint, pretend user fills form
    ["We apologize for the inconvenience, thank you for using our services."], //bad rating after yes or no file complaint END
    ["Thank you for sharing your feedback. Hope you have a better experience next time!"],  //10 Unhappy
    ["Thank you for the feedback. Hope we can always serve you well!"],  //14 END
     // 15 help   go to replace refund or talk to an executive if mention
    ["Sorry. Could you please explain in detail?"], // 16 no match  go to replace refund or talk to an executive if mention
    ["I'm sorry if we're not able to help you with your specific query. I could offer you a refund or a replacement for your order, or I could connect you to an executive."], //17
    ["Sorry we cannot help you with your specific query. Here are some FAQs you might want to look into."], //18 no match END
    ["How would you rate this conversation?"], //19
    
    ["Let us know how we can improve!"], //average rating pretend user fills form
    ["Thank you for letting us know!"], // average rating feedback END
    ["Thank you for using our service, we're glad we could be of service!"], //good rating END

]