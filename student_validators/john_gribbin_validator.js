// (function(window){

var validator = {};

validator.isEmailAddress = function(input){
    if(typeof input !== "string") return false;
    if(input === "") throw "Email address input is required";
    var atSym = input.indexOf("@");
    if(atSym < 0) throw "enter a valid email address which contains the @ symbol.";
    if(atSym < 1) throw "enter an email address that contains at least one letter before the @ symbol.";
    var theDot = input.indexOf(".");
    if(theDot < 0) throw "enter a valid email address which contains a '.'";
    var inputLength = input.length;
    if(theDot === (inputLength - 1)) throw "enter a valid end of email address, e.g. - .com";
    return true;
};

validator.isPhoneNumber = function(input){
    if(input === undefined) throw "Please enter a valid 11 digit UK telephone number without spaces.";
    if (typeof input === "string") throw "Telephone number entered must only contain numbers."
    var numToString = input.toString();
    if (numToString.length < 10 || numToString.length > 10) return false;
    return true;
};

validator.isDate = function(input){
    if (input !== "string") throw "please enter a valid date string."
    if(Date.parse(input)) return true;
    return false;
};

validator.isBeforeDate = function(input, reference){
    if(input === undefined && reference === undefined) throw "Must enter two valid dates, or two valid date objects."
    if(Number.isInteger(input) && Number.isInteger(reference)) throw "Must enter two valid dates strings, or two valid date objects."
    if (typeof input === "string" && typeof reference === "string");{
    if(Date.parse(input) && Date.parse(reference)){
  var inputDate = new Date(input);
    var referenceDate = new Date(reference);
    var inputTime = inputDate.getTime();
    var referenceTime = referenceDate.getTime();
    if(inputTime > referenceTime) return false;
  return true;
      }
    else throw "please enter two valid dates, or two valid date objects."
  }
  if(typeof input !== "string" && typeof reference !== "string"){
  if(Date.parse(input) && Date.parse(reference)){
  if(input > reference) return false;
  return true;
      }
  }
};

validator.isAfterDate = function(input, reference){
    if(input === undefined && reference === undefined) throw "Must enter two valid dates, or two valid date objects."
    if(Number.isInteger(input) && Number.isInteger(reference)) throw "Must enter two valid dates strings, or two valid date objects."
    if (typeof input === "string" && typeof reference === "string");{
    if(Date.parse(input) && Date.parse(reference)){
  var inputDate = new Date(input);
    var referenceDate = new Date(reference);
    var inputTime = inputDate.getTime();
    var referenceTime = referenceDate.getTime();
    if(inputTime < referenceTime) return false;
  return true;
      }
    else throw "please enter two valid dates, or two valid date objects."
  }
  if(typeof input !== "string" && typeof reference !== "string"){
  if(Date.parse(input) && Date.parse(reference)){
  if(input < reference) return false;
  return true;
      }
  }
};

validator.isBeforeToday = function(input){
  var dateInput = new Date(input);
  var inputTime = dateInput.getTime() ;
  var todayTime = Date.now();
  if(input === undefined) throw "Must enter a valid date, or a valid date object."
  if(Number.isInteger(input)) throw "Must enter a valid date string, or a valid date object."
  if(typeof input === "string");{
    if(Date.parse(input)){
    if(inputTime < todayTime) return true;
    return false;
    }
  else throw "please enter a valid date or date object."
  }
  if(typeof input !== "string"){
    if(Date.parse(input)){
      if(input < todayTime) return true;
      return false;
    }
  }
};

validator.isAfterToday = function(input){
  var dateInput = new Date(input);
  var inputTime = dateInput.getTime() ;
  var todayTime = Date.now();
  if(input === undefined) throw "Must enter a valid date, or a valid date object."
  if(Number.isInteger(input)) throw "Must enter a valid date string, or a valid date object."
  if(typeof input === "string");{
    if(Date.parse(input)){
    if(inputTime > todayTime) return true;
    return false;
    }
  else throw "please enter a valid date or date object."
  }
  if(typeof input !== "string"){
    if(Date.parse(input)){
      if(input > todayTime) return true;
      return false;
    }
  }
};

validator.isEmpty = function(input){
    if(input === "") return true;
    if(!input) return false;
    var inputSplit = input.split('')
      for(var i = 0; i < inputSplit.length; i++){
          if(inputSplit[i] !== " ") return false;
        }
        return true;
};

validator.isTrimmed = function(input){
  if(typeof input !== "string") throw "Invalid input."
    for(var i=0; i < input.length; i++){
      var char1 = input.charAt(i);
      var char2 = input.charAt(i+1);
      if(char1 + char2 === "  ") return false;
    }
    return true;
};

validator.contains = function(input, words){
    var inputArr = input.split('');
    for(var i=0; i < inputArr.length; i++){
      if(validator.isAlphanumeric(inputArr[i]) === false)
      inputArr[i] = " ";
    }
  var inputArr = inputArr.join('');
  var inputArr = inputArr.split(' ');
  for(var i=0; i < inputArr.length; i++){
    if(inputArr[i] == "")
       inputArr.splice(i, 1);
  }
  for(var i=0; i < words.length; i++){
    words[i] = words[i].toLowerCase();
        if(inputArr.includes(words[i])) return true;
    return false;
    }
};

validator.lacks = function(input, words){
    var inputArr = input.split('');
    for(var i=0; i < inputArr.length; i++){
      if(validator.isAlphanumeric(inputArr[i]) === false)
      inputArr[i] = " ";
    }
  var inputArr = inputArr.join('');
  var inputArr = inputArr.split(' ');
  for(var i=0; i < inputArr.length; i++){
    if(inputArr[i] == "")
       inputArr.splice(i, 1);
  }
  for(var i=0; i < words.length; i++){
    words[i] = words[i].toLowerCase();
        if(inputArr.includes(words[i])) return false;
    return true;
    }
};

validator.isComposedOf = function(input, strings) {
  var input = input.split(" ").join("").toLowerCase();
  input = utilities.withoutSymbols(input);
  var check = [];
  for (var i = 0; i < input.length; i++) {
    check[i] = false;
  }
  for (var i = 0; i < strings.length; i++) {
    function search(index) {
      var position = input.indexOf(strings[i].toLowerCase(), index);
      if (position > -1) {
        var j = 0;
        while ( (j < strings[i].length) && ( (j + position) < check.length) ) {
          check[position + j] = true;
          j++;
        }
        search(position + 1);
      }
    } search(0);
  }
  for (var i = 0; i < check.length; i++) {
    if (check[i] === false) {
      return false
    }
  }
  return true;
};

validator.isOfLengthOrLessThan = function(input, n){
  if(typeof input !== "string") throw "first perimeter must be a string."
    if(Number.isInteger(n) == false) throw "second perimeter must be a number."
    if(input.length <= n) return true;
    return false;
};

validator.isOfLengthOrGreaterThan = function(input, n){
  if(typeof input !== "string") throw "first perimeter must be a string."
    if(Number.isInteger(n) == false) throw "second perimeter must be a number."
    if(input.length >= n) return true;
    return false;
};

validator.lessWordsThan = function(input, n){
  var count = utilities.countWords(input);
  if(count <= n) return true;
  return false;
};

validator.moreWordsThan = function(input, n){
  var count = utilities.countWords(input);
  if(count >= n) return true;
  return false;
};

validator.isNumberBetween = function(input, floor, ceil){
  if(Number.isInteger(input) == false) throw "first perimeter must be a number."
    if(Number.isInteger(floor) == false) throw "second perimeter must be a number."
    if(Number.isInteger(ceil) == false) throw "third perimeter must be a number."
    return(input >= floor && input <= ceil);
};

validator.isAlphanumeric = function(input){
    var input = input.toLowerCase();
    var letsAndNums = "abcdefghijklmnopqrstuvwxyz1234567890";
    for(i=0; i < input.length; i ++){
        for(k = 0; k < letsAndNums.length; k++){
            if(letsAndNums.indexOf(input.charAt(i)) == -1) return false;
    }
    }
return true;
};

validator.isCreditCard = function(input){
  if(input.length != 16 && input.length != 19)return false;
    var input = input.toLowerCase();
    var letsAndNums = "abcdefghijklmnopqrstuvwxyz1234567890-";
    for(i=0; i < input.length; i ++){
        for(k = 0; k < letsAndNums.length; k++){
            if(letsAndNums.indexOf(input.charAt(i)) == -1) return false;
    }
    }
    if(input.length == 16){
        for(i=0; i < input.length; i++)
            if(input.charAt(i) === "-") return false;
    }
  if(input.length == 19){
        for(i=0; i < input.length; i++)
            if(input.charAt(4, 9, 14) !== "-" && input.charAt(0-3, 5-8, 10-13, 15-16) === "-") return false
    }
return true;
};

validator.isHex = function(input){
  if(input.length != 7 && input.length != 4) return false;
    if(input.charAt(0) !== "#") return false;
    var allowed = "abcdef0123456789#";
    var input = input.toLowerCase();
    for(i=0; i < input.length; i++){
        for(k=0; k < allowed.length; k++)
            if(allowed.indexOf(input.charAt(i)) == -1) return false
    }
return true;
};

validator.isRGB = function (input){
  //make input lowercase
    var input = input.toLowerCase();
    //check contents of string for undesirables
    var allowed = "1234567 890,()rgb"
    for(i=0; i < input.length; i++){
        for(k=0; k < allowed.length; k++)
            if(allowed.indexOf(input.charAt(i)) == -1) return false
    }
  //verify the start and the ending of input is correct
  for(i=0; i < input.length; i++){
        if(input.charAt(0) !== "r"
          || input.charAt(1) !== "g"
          || input.charAt(2) !== "b"
          || input.charAt(3) !== "("
          || input.charAt(input.length-1) !== ")") return false;
    }
  //obtain what is inside the parenthesis
  var middleString = input.slice(4, input.length-1);
  //create an array, and test if it contains three items (and thus two commas)
    var numsArr = middleString.split(',');
    if(numsArr.length < 3 || numsArr.length > 3) return false;
    //remove all but numbers from the array items
    for(i=0; i < numsArr.length; i++){
        numsArr[i] = parseInt(numsArr[i]);
    }
    //loop through array and check that each item is indeed a number, and between 0 and 255
    for(i=0; i < numsArr.length; i++){
      if(numsArr[i] < 0 || numsArr[i] > 255) return false;
      if(Number.isInteger(numsArr[i]) == false) return false;
    }
return true;
}

validator.isHSL = function(input){
  //make input lowercase
    var input = input.toLowerCase();

  //verify the start and the ending of input is correct
  for(i=0; i < input.length; i++){
        if(input.charAt(0) !== "h"
          || input.charAt(1) !== "s"
          || input.charAt(2) !== "l"
          || input.charAt(3) !== "("
          || input.charAt(input.length-1) !== ")") return false;
    }
  //obtain what is inside the parenthesis
  var middleString = input.slice(4, input.length-1);
  //create an array, and test if it contains three items (and thus two commas)
    var numsArr = middleString.split(',');
    if(numsArr.length < 3 || numsArr.length > 3) return false;
    //remove all but numbers from the array items
    for(i=0; i < numsArr.length; i++){
        numsArr[i] = parseInt(numsArr[i]);
    }
    //loop through array and check that each item is indeed a number, and if first item is number
    //between 0 and 360, and second two items are numbers between 0 and 1
    for(i=0; i < numsArr.length; i++){
      if(Number.isInteger(numsArr[i]) === false) return false;
      if(numsArr[0] < 0 || numsArr[0] > 360) return false;
      if(numsArr[1] < 0 || numsArr [1] > 1) return false;
      if(numsArr[2] < 0 || numsArr [2] > 1) return false;
    }
    return true;
};

validator.isColor = function(input){
    if(validator.isHex(input) === true || validator.isRGB(input) === true || validator.isHSL(input) === true) return true;
    return false;
};

// })(window);

// window.validator = validator;
