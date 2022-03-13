
function findFibonnacciSeries(input) {
    if (input <= 0) {
        return; //or return 0

    }
    let firstTerm = 0;
    let secondTerm = 1;

    let nextTerm = 0;
    let result = [];

    // if(input === 1){

    // }
    result.push(firstTerm, secondTerm)
    let index = 2;

    while (index <= input) {
        nextTerm = firstTerm + secondTerm 
        result.push(nextTerm)
        firstTerm = secondTerm;
        secondTerm = nextTerm;

        index += 1;
    }
    console.log(result,'result')
}
findFibonnacciSeries(9)
module.exports = findFibonnacciSeries