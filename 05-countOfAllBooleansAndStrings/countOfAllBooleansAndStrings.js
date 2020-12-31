function countOfAllBooleansAndStrings(arr) {
  var boolStringCount = 0;

  for (var i = 0; i < arr.length; i++)
  {
    if(arr[i] === true || arr[i] === false || typeof arr[i] === 'string')
    {
      boolStringCount++;   
    }
  }

  return boolStringCount;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;