// @flow
// George Spake

// Booleans

// without flow
//
// const isTwo = n => n === 2

// with flow
// the flow annotation specifies that this function returns a boolean
// since there is no type specified for the parameter, the function can accept any type
//
const isTwo = (n): boolean => n === 2


// Strings

// without flow
//
// const sayHello = name => `Hello ${name}`

// with flow
//
// the flow annotation specifies that this function accepts a string, name, and returns a string
//
const sayHello = (name: string): string => `Hello ${name}`

// with flow error
// since isTwo returns a boolean and sayHello accepts a string,
// flow will throw an error if isTwo is passed to sayHello:
// Cannot call sayHello with isTwo(...) bound to name because boolean [1] is incompatible with string [2].
//
// sayHello(isTwo(2));


// Numbers

// without flow
//
// const addTwo = n => n + 2

// with flow
// the flow annotations specify that addTwo accepts a number, n, and returns a number
//
const addTwo = (n: number): number => n + 2

//
// with flow errors
// since addTwo accepts a string flow will throw an error if a string is passed to it:
// Cannot call addTwo with "forty" bound to n because string [1] is incompatible with number [2].
//
// addTwo("forty")

// Null

// Undefined
