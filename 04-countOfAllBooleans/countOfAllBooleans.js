function countOfAllBooleans(arr) {
  var boolCount = 0;

  for (var i = 0; i < arr.length; i++)
  {
    if(arr[i] === true || arr[i] === false)
    {
      boolCount++;   
    }
  }

  return boolCount;
}

// Do not edit this line;
module.exports = countOfAllBooleans;