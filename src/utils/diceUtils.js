const { getRandomInt } = require('../utils/numberUtils')

function roll(options) {
  const index = getRandomInt(options.length)
  return options[index]
}

module.exports = {
  roll,
}
