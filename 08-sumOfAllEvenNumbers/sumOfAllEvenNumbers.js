function sumOfAllEvenNumbers(nums) {
  var sum = 0;

  for(var i = 0; i < nums.length; i++)
  {
    if(nums[i] % 2 == 0)
    {
      sum++;
    }
  }
  return sum;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;