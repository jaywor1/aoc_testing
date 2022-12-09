# aoc_testing
Module for testing and optimizing algorithms in Advent of Code

## Instalation

    npm install aoc_testing
    
## Functions
### checkIntegrity
This function checks if your functions returns correct answers
#### Parameters
- input (input of puzzle)
- sol1 (solution of first part)
- sol2 (solution of second part)
- func1 (function that returns solution to first part)
- func2 (function that returns solution to second part)

### checkTime
Measures, how long it takes for functions to finish
#### Parameters
- input (input of puzzle)
- times (how many times do you want to run the functions)
- func1 (function that returns solution to first part)
- func2 (function that returns solution to second part)
