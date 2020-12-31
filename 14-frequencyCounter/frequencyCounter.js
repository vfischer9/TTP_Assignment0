function frequencyCounter(word) {
  var freq = {};

  for (var i = 0; i < word.length; i++) 
  {
    var wordChar = word.charAt(i);
    if (freq[wordChar]) 
    {
      freq[wordChar]++;
    } 

    else 
    {
      freq[wordChar] = 1;
    }
  }

  return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;