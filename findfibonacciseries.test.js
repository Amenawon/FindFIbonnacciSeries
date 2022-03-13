const { expect } = require('@jest/globals');
const findFib = require('./findfibonacciseries');

test("returns input to test the function", () => {
    expect(findFib(9)).toBe(9)
})