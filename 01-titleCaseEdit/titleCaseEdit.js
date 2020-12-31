function titleCaseEdit(title) {
  var titleArray= title.split(' ');

  for(var i = 0; i < titleArray.length; i++)
  {
    titleArray[i] = titleArray[i].charAt(0).toUpperCase() + titleArray[i].substring(1);
  }

  return titleArray.join(' ');

}

// Do not edit this line;
module.exports = titleCaseEdit;