const { expect } = require('@jest/globals');
const findFib = require('./findfibonacciseries');

test("function only accepts positive integers", () => {
    expect(findFib(0)).toBeFalsy();
})