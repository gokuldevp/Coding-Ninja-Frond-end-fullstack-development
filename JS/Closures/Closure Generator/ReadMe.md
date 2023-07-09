Closure Generator

Create a closure function that generates unique registration numbers in the following format:

A-2021_1 // For first call
A-2021_2 // For second call
A-2021_3 // For third call
The function when called should return a generator function which when called each time should generate the next ID. The function should take the start value as an argument