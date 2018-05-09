// @flow
// George Spake

// without flow
//
// const addTwo = n => n + 2;

// with flow
// the flow annotations specify that the function takes a number n and returns a number
//
const addTwo = (n: ?number): number => n + 2;

// with flow error
// the flow annotations specify that the function takes a number n and returns a string
// since this function returns a number (int), flow will throw an error:
// Cannot return n + 2 because number [1] is incompatible with string [2].
//
// const addTwo = (n: ?number): string => n + 2;
//
// flow will throw an error if an argument of the incorrect type is passed to a function:
// Cannot call addTwo with "n" bound to n because string [1] is incompatible with number [2].
//
// addTwo("n");
