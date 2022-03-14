
function findFibonnacciSeries(input) {
    if (!Number.isInteger(input))
        return -1 //test if the input is a whole number

    if (input < 0)
        return -1 //test if input is a positive whole number

    if (input === 0)
        return 0 //test if input is equal to 0

    let firstTerm = 0;
    let secondTerm = 1;

    let nextTerm = 0;
    let result = [firstTerm, secondTerm];

    if (input === 1) {
        return result;
    }
    let index = 2;

    while (index <= input) {
        nextTerm = firstTerm + secondTerm
        result.push(nextTerm)

        firstTerm = secondTerm;
        secondTerm = nextTerm;

        index += 1;
    }
    return result;
}

findFibonnacciSeries(9.2)

module.exports = findFibonnacciSeries