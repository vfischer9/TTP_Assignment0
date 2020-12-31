function pairSum(nums, target) {

  if(nums.length <= 1)
  {
    throw 'Error, array is 1 or lower.';
  }

  for(var i = 0; i < nums.length; i++)
  {
    for(var j = nums.length; j > i; j--)
    {
      if (nums[i] + nums[j] == target)
      {
        return true;
      }
    }
  }
  
return false;


}

// Do not edit this line;
module.exports = pairSum;