# aoc_testing
Module for testing and optimizing algorithms in Advent of Code

## Instalation

    npm install aoc_testing
    
## Functions
### checkIntegrity
- This function checks if your functions returns correct answers
#### Parameters
- input &rarr; input of puzzle
- sol1 &rarr; solution of first part
- sol2 &rarr; solution of second part
- func1 &rarr; function that returns solution to first part
- func2 &rarr; function that returns solution to second part

### checkTime
- Measures, how long it takes for functions to finish
#### Parameters
- input &rarr; input of puzzle
- func1 &rarr; function that returns solution to first part
- func2 &rarr; function that returns solution to second part
- times &rarr; how many times do you want to run the functions (default value is 1000)

### logSolution
- Prints out solutions
#### Parameters
  - input &rarr; input of puzzle
  - func1 &rarr; function that returns solution to first part
  - func2 &rarr; function that returns solution to second part
  
### crlfBullshit
- Removes '\r' from string array
#### Parameters
  - arrayToBeCleansed &rarr; array to be cleansed from '\r'
