const { expect } = require('@jest/globals');
const findFib = require('./findfibonacciseries');

test("function only accepts positive integers", () => {
    expect(findFib(0)).toEqual(0);
})
test("function should return [0,1] if 1 was supplied", () => {
    const expectedResult=[0,1]
    expect(findFib(1)).toEqual(expectedResult);
})
test("function should return [0,1,1] if 2 was supplied", () => {
    const expectedResult=[0,1,1]
    expect(findFib(2)).toEqual(expectedResult);
})
test("function only accepts whole numbers", () => {
    expect(findFib(7.3)).toEqual(0);
});
test("function should return 0 if 0 is supplied", () => {
    expect(findFib(0)).toEqual(0);
})