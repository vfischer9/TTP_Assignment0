function setUnionOfAnyAmountOfSets(...args) {
  var mySet = new Set();
  for (var i = 0; i < args.length; i++) 
  {
    args[i].forEach(mySet.add, mySet);
  }
  
  return mySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;