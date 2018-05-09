/* @flow */
// George Spake

// Pizza

// without flow
// without type annotations, this function will like anything we feed it even though it only eats pizza.
//
// const onlyEatsPizza = pizza => `Thanks for the ${pizza}`
//
// onlyEatsPizza("sushi") // Thanks for the sushi

// with flow
// flow annotations specify that onlyEatsPizza receives the string "pizza" and returns a string
//
const onlyEatsPizza = (pizza: "pizza"): string => `Thanks for the ${pizza}`

// with error
// since onlyEatsPizza only accepts the literal string "pizza"
// flow will throw an error if anything else is passed to it:
// Cannot call onlyEatsPizza with "sushi" bound to pizza because string [1] is incompatible with string literal pizza [2].
//
// onlyEatsPizza("sushi")


// Pinball

// without flow
// without type annotations, this function will accept any amount. We won't make any money.
//
// const pinBallMachine = cents => `${cents} cents received, press start to play`
//
// pinballMachine(3) // 3 cents received, press start to play

// with flow
// flow annotations specify that pinBallMachine receives the number 25 and returns a string
//
const pinBallMachine = (cents: 25): string => `${cents} cents received, press start to play`
//
// pinBallMachine(25) // 25 cents received, press start to play
// pinBallMachine(5 + 5 + 5 + 10) // 25 cents received, press start to play

// with error
// since pinBallMachine only accepts 25 cents exactly
// flow will throw an error if any other amount is passed to it:
// Cannot call pinBallMachine with 30 bound to cents because number [1] is incompatible with number literal 25 [2].
//
// pinBallMachine(30)
