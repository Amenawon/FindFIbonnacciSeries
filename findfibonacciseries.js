
function findFibonnacciSeries(input) {
    if (!Number.isInteger(input))
        throw new Error('Input must be an integer');

    if (input <= 0)
        throw new Error('Input must be a positive number');

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

findFibonnacciSeries(2)

module.exports = findFibonnacciSeries