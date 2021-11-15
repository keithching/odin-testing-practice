import { capitalize, reverseString, calculator, caesar, analyze } from './script.js';


// exercise 1:
// capitalize(string) takes a string and 
// returns that string with the first character capitalized.
test('a string', () => {
    expect(capitalize('test')).toBe('Test');
});

test('single character', () => {
    expect(capitalize('t')).toBe('T');
});

test('empty string', () => {
    expect(capitalize('')).toBe('');
});


// exercise 2: 
// reverseString(string) takes a string and returns it reversed.
test('a string', () => {
    expect(reverseString('test')).toBe('tset');
});

test('single character', () => {
    expect(reverseString('t')).toBe('t');
});

test('empty string', () => {
    expect(reverseString('')).toBe('');
});


// exercise 3:
// A calculator object that contains the basic operations: 
// add, subtract, divide, and multiply.
test('add (1): positive numbers', () => {
    expect(calculator.add(1, 1)).toBe(2);
});

test('add (2): negative numbers', () => {
    expect(calculator.add(-1, -1)).toBe(-2);
});

test('add (3): floating point numbers', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test('subtract (1)', () => {
    expect(calculator.subtract(1, 1)).toBe(0);
});

test('subtract (2)', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});

test('divide (1)', () => {
    expect(calculator.divide(4, 2)).toBe(2);
});

test('divide (2)', () => {
    expect(calculator.divide(1, 1)).toBe(1);
});

test('divide (3): Divide by 0', () => {
    expect(() => calculator.divide(5, 0)).toThrow(Error);
});

test('divide (4): floating point numbers', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
});

test('multiply (1)', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});

test('multiply (2): floating point numbers', () => {
    expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
});

test('multiply (3): multiply with 0', () => {
    expect(calculator.multiply(5, 0)).toBe(0);
});


// exercise 4:
// Caesar Cipher
test('cipher (1): with a key of 1', () => {
    expect(caesar.cipher('test', 1)).toBe('uftu');
});

test('decipher (1): with a key of 1', () => {
    expect(caesar.decipher('uftu', 1)).toBe('test');
});


test('cipher (2): with a key of 2', () => {
    expect(caesar.cipher('test', 2)).toBe('vguv');
});

test('decipher (2): with a key of 2', () => {
    expect(caesar.decipher('vguv', 2)).toBe('test');
});


test('cipher (3): Uppercase', () => {
    expect(caesar.cipher('TEST', 1)).toBe('UFTU');
});

test('decipher (3): Uppercase', () => {
    expect(caesar.decipher('UFTU', 1)).toBe('TEST');
});


test('cipher (4): single character', () => {
    expect(caesar.cipher('t', 1)).toBe('u');
});

test('decipher (4): single character', () => {
    expect(caesar.decipher('u', 1)).toBe('t');
});


test('cipher (5): the character z into a', () => {
    expect(caesar.cipher('z', 1)).toBe('a');
});

test('decipher (5): the character a into z', () => {
    expect(caesar.decipher('a', 1)).toBe('z');
});


test('cipher (6): with punctuations', () => {
    expect(caesar.cipher('hi.bye!', 1)).toBe('ij.czf!');
})

test('decipher (6): with punctuations', () => {
    expect(caesar.decipher('ij.czf!', 1)).toBe('hi.bye!');
});


test('cipher (7): with number', () => {
    expect(caesar.cipher('testing123', 1)).toBe('uftujoh123');
});

test('decipher (7): with number', () => {
    expect(caesar.decipher('uftujoh123', 1)).toBe('testing123');
});


test('cipher (8): further check wrapping from z to a (1)', () => {
    expect(caesar.cipher('wxyz', 3)).toBe('zabc');
});

test('decipher (8): further check wrapping from a to z (1)', () => {
    expect(caesar.decipher('zabc', 3)).toBe('wxyz');
});


test('cipher (9): further check wrapping from z to a (2)', () => {
    expect(caesar.cipher('WXYZ', 3)).toBe('ZABC');
});

test('decipher (9): further check wrapping from a to z (2)', () => {
    expect(caesar.decipher('ZABC', 3)).toBe('WXYZ');
});


test('cipher (10): key of 0 behavior', () => {
    expect(caesar.cipher('AbcD', 0)).toBe('AbcD');
});

test('decipher (10): key of 0 behavior', () => {
    expect(caesar.decipher('AbcD', 0)).toBe('AbcD');
});


test('cipher (11): key of 25 behavior', () => {
    expect(caesar.cipher('AbcD', 25)).toBe('ZabC');
});

test('decipher (11): key of 25 behavior', () => {
    expect(caesar.decipher('ZabC', 25)).toBe('AbcD');
});


test('cipher (12): key that exceeds 25', () => {
    expect(() => caesar.cipher('AbcD', 26)).toThrow(Error);
});

test('decipher (12): key that exceeds 25', () => {
    expect(() => caesar.decipher('AbcD', 26)).toThrow(Error);
});


test('cipher (13): key that smaller than 0', () => {
    expect(() => caesar.cipher('AbcD', -1)).toThrow(Error);
});

test('decipher (13): key that smaller than 0', () => {
    expect(() => caesar.decipher('AbcD', -1)).toThrow(Error);
});


// Array Analysis. Write a function that takes an array of numbers and 
// returns an object with the following properties: average, min, max, and length.
test('find the average (1)', () => {
    const object = analyze([1, 8, 3, 4, 2, 6]);
    expect(object.average).toBe(4);
});

test('find the average (2)', () => {
    const object = analyze([1, 2, 3]);
    expect(object.average).toBe(2);
});

test('find the min (1)', () => {
    const object = analyze([1, 8, 3, 4, 2, 6]);
    expect(object.min).toBe(1);    
});

test('find the min (2)', () => {
    const object = analyze([1, 2, 3]);
    expect(object.min).toBe(1);
});

test('find the max (1)', () => {
    const object = analyze([1, 8, 3, 4, 2, 6]);
    expect(object.max).toBe(8);
});

test('find the max (2)', () => {
    const object = analyze([1, 2, 3]);
    expect(object.max).toBe(3);
});

test('find the length (1)', () => {
    const object = analyze([1, 8, 3, 4, 2, 6]);
    expect(object.length).toBe(6); 
});

test('find the length (2)', () => {
    const object = analyze([1, 2, 3]);
    expect(object.length).toBe(3);
});