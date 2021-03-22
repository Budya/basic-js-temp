const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date.getMonth() >= 11 && date.getMonth() < 12) {
    console.log('winter')
    return 'winter';

  } else if (date.getMonth() >= 0 && date.getMonth() < 2) {
    console.log('winter')
    return 'winter';
  } else if (date.getMonth() >= 2 && date.getMonth() < 5) {
    console.log('spring')
    return 'spring';
  } else if (date.getMonth() >= 5 && date.getMonth() < 8) {
    console.log('summer')
    return 'summer';
  } else if (date.getMonth() >= 8 && date.getMonth() < 11) {
    console.log('fall')
    return 'fall';
  }

  if(date === undefined){
    return 'Unable to determine the time of year!';
  }
  
};