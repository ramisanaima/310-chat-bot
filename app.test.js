

const {clean} = require('./public/app');
const {compare} = require('./public/app');

test( 'should output clean userInput', ()=> {
    const text = clean('Hello whats up?! ^.^');
    expect(text).toBe('hello whats up ');
});


test( 'should compare input with reply', ()=> {
    const text = compare(prompts, replies, 'im good');
    expect(text).toBe('I am glad to hear that! Could I please get your name?');
});



