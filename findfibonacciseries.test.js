const { expect } = require('@jest/globals');
const findFib = require('./findfibonacciseries');
describe('Test valid input values',()=>{

    test("function should return [0,1] if 1 was supplied", () => {
        const expectedResult=[0,1]
        expect(findFib(1)).toEqual(expectedResult);
    })
    test("function should return [0,1,1] if 2 was supplied", () => {
        const expectedResult=[0,1,1]
        expect(findFib(2)).toEqual(expectedResult);
    })
    test("function should return [0,1,1,2] if 3 was supplied", () => {
        const expectedResult=[0,1,1,2]
        expect(findFib(3)).toEqual(expectedResult);
    })
    test("function should return [0,1,1,2,3] if 4 was supplied", () => {
        const expectedResult=[0,1,1,2,3]
        expect(findFib(4)).toEqual(expectedResult);
    })
    test("function should return [0,1,1,2,3,5,8,13,21,34,55] if 10 was supplied", () => {
        const expectedResult=[0,1,1,2,3,5,8,13,21,34,55]
        expect(findFib(10)).toEqual(expectedResult);
    })
})

describe('test the data type of the Parameter of the Fibonacci method', () => {
 
    it('should return -1 if a string is passed', () => {
        expect(findFib('2')).toEqual(-1);
    });
    it('should return -1 if an array is passed', () => {
        expect(findFib(['2'])).toEqual(-1);
    });
    it('should return -1 if a floating number is passed', () => {
        expect(findFib(1.100)).toEqual(-1);
    });
    it('should NOT should return -1 if a positive whole number is passed', () => {
        expect(findFib(2)).not.toEqual(-1);
    });
});
describe('test if value of the input is a positive number', () => {

    it('should return -1 if -1 is passed', () => {
        expect(findFib(-1)).toEqual(-1);
    });
    it('should return -1 if -100 is passed', () => {
        expect(findFib(-100)).toEqual(-1);
    });
    it('should not return -1 if 0 is passed', () => {
        expect(findFib(0)).not.toEqual(-1);
    });
    it('should not return -1 if  1 is passed', () => {
        expect(findFib(1)).not.toEqual(-1);
    });
    it('should not throw the exception: "The Parameter must be positive!"', () => {
        expect(findFib(2)).not.toEqual(-1);
    });
});