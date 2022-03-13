const { expect } = require('@jest/globals');
const findFib = require('./findfibonacciseries');

test("function only accepts positive integers", () => {
    expect(findFib(0)).toBeFalsy();
})
test("function should return [0,1] if 1 was supplied", () => {
    const expectedResult=[0,1]
    expect(findFib(1)).toEqual(expectedResult);
})
test("function should return [0,1,1] if 2 was supplied", () => {
    const expectedResult=[0,1,1]
    expect(findFib(2)).toEqual(expectedResult);
})