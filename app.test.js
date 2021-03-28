
const clean = require('./app');

test('output clean string', () => {
    expect(clean('Hello whats up?! ^.^')).toBe('hello whats up ')
})


