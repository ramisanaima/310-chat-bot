var globalPrompts;//current prompt track
var globalReplies;//current reply track
var prompts;

const {clean} = require('./app');
const {compare} = require('./app');
const {switchTracks} = require('./app');

test( 'should output clean userInput', ()=> {
    const text = clean('Hello whats up?! ^.^');
    expect(text).toBe('hello whats up ');
});


test( 'should compare input with reply', ()=> {
    const text = compare(globalPrompts, globalReplies, 'im good');
    expect(text).toBe('I am glad to hear that! Could I please get your name?');
});

test ('check if tracks switched', ()=>{
    const bool=switchTracks(6, prompts);
    expect(bool).toBeCalledWith(expect.anything());


});