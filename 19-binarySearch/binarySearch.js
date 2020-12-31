class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {

    var middle = Math.floor(nums.length / 2);

    //first half
    if (nums[middle] > target) 
    {
      var newNums = nums.slice(0, middle);
      return this.binarySearch(newNums, target);  //recursive
    }

    //second half
    else if (nums[middle] < target) 
    {
      var newNums = nums.slice(middle + 1, nums.length);
      return this.binarySearch(newNums, target);  //recursive
    }

    else if (nums[middle] == target)
    {
      return true;
    }
    
    else
    {
      return false;
    }
      

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;