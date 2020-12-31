function fizzBuzz(start, end) {
//   For multiples of three, insert "Fizz" instead of the number into the output array
// - For multiples of five, insert "Buzz" instead of the number into the output array
// - For numbers which are multiples of both three and five, insert "FizzBuzz" into the output array
// - For numbers which are neither a multiple of three nor a multiple of five, insert the number into the output array

var arr = [];

for(var i = start; i <= end; i++)
{
  if(i % 3 == 0 && i % 5 != 0)
  {
    arr.push("Fizz");
  }
  else if(i % 3 != 0 && i % 5 == 0)
  {
    arr.push("Buzz");
  }
  else if(i % 3 == 0 && i % 5 == 0)
  {
    arr.push("FizzBuzz");
  }
  else if(i % 3 != 0 && i % 5 != 0)
  {
    arr.push(i);
  }
}

return arr;

}

// Do not edit this line;
module.exports = fizzBuzz;