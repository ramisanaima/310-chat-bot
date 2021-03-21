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
    ["happy with", "satisfied with", "pleased with", "works well", "loved it"], //likes product, (high sentiment)
    //5
    ["told my", "gave it to"] //referred product
    //6
    ["want more", "premium", "I want to become a premium customer", "subscribe"], //Wants to become a premium customer ([0,6] requires premium track)
    //7
    ["I don't want to be a premium customer", "unsubscribe", "cancel subscription"], //Cancel premium customer
    //8
    ["not working", "need repairs", "damaged", "does not work", "broken"],  //broken product ([0,8] requires bad product track)
    //9
    ["hate", "dislike","unhappy", "bad quality", "dissatisfied","unsatisfied",], //Unhappy ([0,9] requires bad product track)
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
    ["yes", "file complaint", "complaint"], //file a complaint ([0,16] requires complaint track])
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
    //17
    ["Here's the form to file a complaint. We apologize for the inconvenience, thank you for using our services."], //if yes file a complaint, pretend user fills form
    //18
    ["We apologize for the inconvenience, thank you for using our services."], //bad rating after yes or no file complaint END
    //19
    ["Thank you for sharing your feedback. Hope you have a better experience next time!"],  //10 Unhappy
    //20
    ["Thank you for the feedback. Hope we can always serve you well!"],  //14 END
    //21
    ["Sorry. Could you please explain in detail?"], // 16 no match  go to replace refund or talk to an executive if mention
    //22
    ["I'm sorry if we're not able to help you with your specific query. I could offer you a refund or a replacement for your order, or I could connect you to an executive."], //17
    //23
    ["Sorry we cannot help you with your specific query. Here are some FAQs you might want to look into."], //18 no match END
    //24
    ["How would you rate this conversation?"], //19
    //25
    ["Let us know how we can improve!"], //average rating pretend user fills form
    //26
    ["Thank you for letting us know!"], // average rating feedback END
    //27
    ["Thank you for using our service, we're glad we could be of service!"], //good rating END

]

const premiumTrack = [
    //1
    ["another product","another order","different product","different order", "something else"], //other product, done: back to main
]

const premiumTrackReplies = [
    //1
    ["Of course! I am happy to help you with something else, how can I assist?"], //other product, done: back to main
]

const badProductTrack = [
    //1
    ["another product","another order","different product","different order", "something else"], //other product, done: back to main
]

const badProductTrackReplies = [
    //1
    ["Of course! I am happy to help you with something else, how can I assist?"], //other product, done: back to main
]

const replacementTrack = [
    //1
    ["another product","another order","different product","different order", "something else"], //other product, done: back to main
]

const replacementTrackReplies = [
    //1
    ["Of course! I am happy to help you with something else, how can I assist?"], //other product, done: back to main
]

const refundTrack = [
    //1
    ["another product","another order","different product","different order", "something else"], //other product, done: back to main
]

const refundTrackReplies = [
    //1
    ["Of course! I am happy to help you with something else, how can I assist?"], //other product, done: back to main
]

const talkToOtherTrack = [
    //1
    ["another product","another order","different product","different order", "something else"], //other product, done: back to main
]

const talkToOtherTrackReplies = [
    ///1
    ["Of course! I am happy to help you with something else, how can I assist?"], //other product, done: back to main
]

const ratingTrack = [
    //1
    ["another product","another order","different product","different order", "something else"], //other product, done: back to main
]

const ratingTrackReplies = [
    //1
    ["Of course! I am happy to help you with something else, how can I assist?"], //other product, done: back to main
]

const complaintTrack = [
    //1
    ["another product","another order","different product","different order", "something else"], //other product, done: back to main
]

const complaintTrackReplies = [
    //1
    ["Of course! I am happy to help you with something else, how can I assist?"], //other product, done: back to main
]