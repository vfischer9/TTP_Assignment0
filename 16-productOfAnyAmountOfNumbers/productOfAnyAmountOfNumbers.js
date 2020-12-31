function productOfAnyAmountOfNumbers(...args) {
  var result = 1;

  for (var i = 0; i < args.length; i++)
  {
    result = result * args[i];
  }

  return result;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;