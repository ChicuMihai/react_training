const sum = require('./sum');
const division = require('./sum');
const subtraction = require('./sum');
const multiplication = require('./sum');
test('adds 1+ 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(4);
})

test('divide 4/2 to equal 2', () => {
    expect(division(4, 2)).toBe(2);
})

test('multiplication 2*2 to equal 4', () => {
    expect(multiplication(2, 2)).toBe(4);
})

test('subtraction 2-2 to equal 0', () => {
    expect(multiplication(2, 2)).toBeNull();
})

test('division 2/2 to equal 0', () => {
    expect(multiplication(2, 2)).toBeFalsy();
})
