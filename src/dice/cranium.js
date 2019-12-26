const { roll } = require('../utils/diceUtils')

const options = ['blue', 'green', 'purple', 'red', 'yellow']

const value = roll(options)
console.log(value) //eslint-disable-line no-console
