# FindFIbonacciSeries
Find the fibonnaci series given an input set
The code test is to write a piece of code that will print out the fibonacci sequence. The user should enter a value (N), and the program should print out the first N entries in the fibonacci sequence.

What is the Fibonacci sequence?

https://www.mathsisfun.com/numbers/fibonacci-sequence.html
# To Do
To setup the code , navigate to the solution file then run `npm install` then add 
  "scripts": {
    "test": "jest"
  } 
  (if it does not exist)
  
# Running the code
To run the code, navigate to the solution file then run `node findfibonacciseries.js` in the terminal

# Testing the code
To test the code, navigate to the solution file then run `npm run test`

# Solution Steps (Fibonacci Series)
- Initialized the starting values to be 0 and 1
- Validate if the input supplied is an integer(whole number) ,if yes return the -1 
- Validate if the input supplied is a positive whole number  ,if yes return the -1 
- Validate if the input supplied is 1 and return the 0,1 
- Then initialized the index (iteration) at 2
- Then looped over the input set against the index , till the index is equal to the input.
- return the result.

# Time complexity
The time complexity of the solution is O(N) i.e linear time complexity. This means that as the input grows, the algorithm takes proportionally longer to complete.
