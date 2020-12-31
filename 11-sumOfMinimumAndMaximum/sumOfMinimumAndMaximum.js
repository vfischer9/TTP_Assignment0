function sumOfMinimumAndMaximum(nums) {
  var sum = 0;
  var min;
  var max;

    min = Math.min.apply(Math, nums);
    max = Math.max.apply(Math, nums);
  
    sum = min + max;

    return sum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;