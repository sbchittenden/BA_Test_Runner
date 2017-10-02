var validator = {};

/*
* isEmailAddress(email)
* Checks if the input parameter is an email address, consisting of three parts:
* An email address consists of two strings combined by an @ symbol.
*/

validator.isEmailAddress = function(email) {
  if (!email) throw "Missing Parameter in the isEmailAddress function: 'email'."

  if (email.includes('@') && email.includes('.')) {
    // check there is only one '@' sign
    var atCount=0;
    for (var i=0; i<email.length; i++) {if (email[i]==='@') atCount++;}
    if (atCount > 1) { return false; }

    // check there is a '.' after the '@' sign
    var lastInstanceOfPeriod=email.lastIndexOf('.');
    var instanceOfAt=email.indexOf('@');
    if (lastInstanceOfPeriod < instanceOfAt) { return false; }

    // check there is a string before and after the '@' sign
    if (instanceOfAt===0 || instanceOfAt===(email.length-1)) { return false; }

    return true;
  }
  else {
    return false;
  }
};


/*
* isPhoneNumber(phoneNumber)
*
* Checks if the input parameter is a valid phone number for UK Phone Numbers
* 02x are followed by 8-digit local numbers and should be written as 02x AAAA AAAA
* Area codes with the form 011x or 01x1 are used for many of the major population centers in the UK,
* are always followed by 7-digit local numbers and should be written as 01xx AAA BBBB
* Numbers for mobile phones and pagers are formatted as 07AAA BBBBBB
*/

validator.isPhoneNumber = function(phoneNumber) {
  if (!phoneNumber) throw "Missing Parameter in the phoneNumber function: 'phoneNumber'."

  var numberLength = phoneNumber.length;

  // check first digit
  if(phoneNumber[0]!=='0')
    return false;

  // check for any invalid characters
  for (i=0; i<numberLength; i++) {
    var c = phoneNumber[i];
    if (c !== ' ' && c !== '0' && c !== '1' && c !== '2' && c !== '3' && c !== '4' && c !== '5' && c !== '6' &&
      c !== '7' && c !== '8' && c !== '9' )
       return false;
  }

  // check each accepted phone number type
  var startCode = phoneNumber.substring(0,2);
  if (startCode=="01") {
    return numberLength===13 ? true : false;
  }
  else if (startCode==="02") {
    return numberLength===13 ? true : false;
  }
  else if (startCode==="07") {
    return numberLength===12 ? true : false;
  }
  else {
    return false;
  }
};

/*
* .isDate(date)
*
* Checks if the input parameter text is a valid date.
* A valid date is any string that can be turned into a JavaScript Date Object.
*/

validator.isDate = function(date) {
  if (!date) throw "Missing Parameter in the isDate function: 'date'."

  if (date instanceof Date)
    return true;

  var testDate = new Date(date);
  if (testDate instanceof Date) {
    if (testDate.toString() === "Invalid Date") {
      return false;
    }
    else {
      return true;
    }
  }
  else
    return false;
};
                        // -> error

/*
* .isBeforeDate(input, reference)
*
* Checks if the input parameter is a date that comes before the reference date.
* Both the input and the reference can be strings or Date Objects.
* This function relies on two valid dates; if two are not found, it should throw a new error.
*/

validator.isBeforeDate = function(input, reference) {
  if (!input) throw "Missing Parameter in the isBeforeDate function: 'input'.";
  if (!reference) throw "Missing Parameter in the isBeforeDate function: 'd2'.";
  if (!validator.isDate(input)) throw "Parameter 'input' in the isBeforeDate function not a date: " + input;
  if (!validator.isDate(reference)) throw "Parameter 'reference' in the isBeforeDate function not a date: " + reference;

  // convert to dates
  // to pass the input test, must be either a string or a date already
  if (typeof input === "string") {
    input = new Date(input);
  }
  if (typeof reference === "string") {
    reference = new Date(reference);
  }

  return input < reference ? true : false;
};


/*
* .isAfterDate(input, reference)
*
* Checks if the input parameter is a date that comes after the reference date.
* Both the input and the reference can be strings or Date Objects.
* This function relies on two valid dates; if two are not found, it should throw a new error.
*/

validator.isAfterDate = function(input, reference) {
  if (!input) throw "Missing Parameter in the isBeforeDate function: 'input'.";
  if (!reference) throw "Missing Parameter in the isBeforeDate function: 'd2'.";
  if (!validator.isDate(input)) throw "Parameter 'input' in the isBeforeDate function not a date: " + input;
  if (!validator.isDate(reference)) throw "Parameter 'reference' in the isBeforeDate function not a date: " + reference;

  // convert to dates
  // to pass the input test, must be either a string or a date already
  if (typeof input === "string") {
    input = new Date(input);
  }
  if (typeof reference === "string") {
    reference = new Date(reference);
  }

  return input > reference ? true : false;
};

/*
* .isBeforeToday(input)
*
* Checks if the input parameter is a date that comes before today.
* The input can be either a string or a Date Object.
* This function relies on one valid date; if one is not found, it should throw a new error.
*/

validator.isBeforeToday = function(input) {
  if (!input) throw "Missing Parameter in the isBeforeToday function: 'input'.";
  if (!validator.isDate(input)) throw "Parameter 'input' in the isBeforeDate function not a date: " + input;

  // convert to dates
  // to pass the input test, must be either a string or a date already
  if (typeof input === "string") {
    input = new Date(input);
  }
  var currentDate = new Date(Date.now());

  return input < currentDate ? true : false;
};


/*
* .isAfterToday(input)
*
* Checks if the input parameter is a date that comes after today.
* The input can be either a string or a Date Object.
* This function relies on one valid date; if one is not found, it should throw a new error.
*/

validator.isAfterToday = function(input) {
  if (!input) throw "Missing Parameter in the isAfterToday function: 'input'.";
  if (!validator.isDate(input)) throw "Parameter 'input' in the isAfterDate function not a date: " + input;

  // convert to dates
  // to pass the input test, must be either a string or a date already
  if (typeof input === "string") {
    input = new Date(input);
  }
  var currentDate = new Date(Date.now());

  return input > currentDate ? true : false;
};


/*
* .isEmpty(input)
*
* Checks the input parameter and returns true if it is an empty string
* - a string with no length or characters that is represented as "" or only contains whitespace(s).
*/

validator.isEmpty = function(input) {
  if (input === null)
    return false;
  else if (input.length===0)
    return true;
  else {
    var result = true;
    for (i=0; i<input.length; i++) {
      if (input[i] !== ' ')
        result = false;
    }
    return result;
  }
};

/*
* .isTrimmed(input)
*
* Checks if the input parameter has leading or trailing whitespaces or too many spaces between words.
* Leading refers to before, while trailing refers to after.
* This function will help validate cases where extra spaces were added accidentally by the user.
*/
validator.isTrimmed = function(input) {
  if (input === null)
    return false;
  else if (input.length===0)
    return true;
  else {
    if (input[0]===' ' || input[input.length-1]===' ' || input.indexOf('  ') !== -1)
      return false;
    else {
      return true;
    }
  }
};

/*
* .contains(input, words)
* Checks if the input text parameter contains one or more of the words within the words array.
* A word is defined as the following: having undefined, whitespace, or punctuation before and after it.
* The function should be case-insensitive.
*/

// added this validator to be used within the .contains function
// added this validator to be used within the .contains function
validator.isSpaceOrPunctuation = function(c) {
  if (c === ' ' || c === '!' || c === '-' || c=== '.' || c===',' || c==='"' || c==="'")
    return true;
  else
  return false;
}

validator.contains = function(input, words) {
  var result = false;
  input = input.toLowerCase();
  for (var i=0; i<words.length; i++) {
    var testWord = words[i].toLowerCase();
    var testWordLocation = input.indexOf(testWord);
    if (testWordLocation > -1) {
      // string has been matched; check to see if word is surrounded by space/punctuation/start/end.
      if(testWordLocation === 0 || validator.isSpaceOrPunctuation(input[testWordLocation-1])) {
      // word is at start of input string or preceding char is ok
        if (testWordLocation + testWord.length === input.length || validator.isSpaceOrPunctuation(input[testWordLocation + testWord.length]) ) {
          // word is at end of string, or next char is ok
          return true;
        }
      }
    }
  }
  return result;
};

/*
* .lacks(input, words)
*
* Checks if the input text parameter does not contain any of the words within the words array
* Use the word definition used in the above .contains description
* The function should be case-insensitive. A function like this could be used for checking blacklisted words.
*/

validator.lacks = function(input, words) {
  var result = true;
  input = input.toLowerCase();
  for (var i=0; i<words.length; i++) {
    var testWord = words[i].toLowerCase();
    var testWordLocation = input.indexOf(testWord);
    if (testWordLocation > -1) {
      // string has been matched; check to see if word is surrounded by space/punctuation/start/end.
      if(testWordLocation === 0 || validator.isSpaceOrPunctuation(input[testWordLocation-1])) {
      // word is at start of input string or preceding char is ok
        if (testWordLocation + testWord.length === input.length || validator.isSpaceOrPunctuation(input[testWordLocation + testWord.length]) ) {
          // word is at end of string, or next char is ok
          return false;
        }
      }
    }
  }
  return result;
};

/*
* .isComposedOf(input, strings)
*
* Checks that the input text parameter contains only strings found within the strings array.
* Note that this function doesnt use a strong word definition the way .contains and .lacks does. The function should be case-insensitive.
*
* To understand it better take a close at the examples below.
* It is not necessary that the input contains all the strings found in the array
* but it is very much necessary that the input does not have a string that is not present in the strings array.
*
* To be honest, I had the same problem as the people here:
* https://qa.moderndeveloper.com/t/intro-to-the-dom-pa1-unclear-instruction-validation-function-iscomposedof/1260/36
*
* So I took the answer below from @jorge_rafael_garcia
*
*/

validator.isComposedOf = function(input, strings) {
    if (!input) throw "error in function isComposedOf: 'input' parameter missing";
    if (!strings) throw "error in function isComposedOf: 'strings' parameter missing";

    // Set all input to lower case
    var lowInp = (""+input).toLowerCase();
    var lowStrs = [];

    for (var i = 0; i < strings.length; i++) lowStrs[i] = strings[i].toLowerCase();

    // Create array of objects containing each char of the input string
    var charArr = lowInp.split("");

    // Helper function to detect non-alphanumeric characters.
    function isSymbol(c) {
      if ((c < "a" || c > "z") &&
          (c < "A" || c > "Z") &&
          (c < "0" || c > "9")) {
        return true;
      }
      else return false;
    }

    for (var i = 0; i < charArr.length; i++) {
      // Mark white spaces or symbols as used.
      if (isSymbol(charArr[i])) {
        charArr[i] = {
          char: charArr[i],
          used: true
        }
      }
      else {
        charArr[i] = {
          char: charArr[i],
          used: false
        }
      }
    }

    // Traverse the input string for each string in the strings array, marking each used char in charArr.
    for (var i = 0; i < lowStrs.length; i++) {

      var str = lowStrs[i];
      for (var j = 0; j < charArr.length; j++) {

        if (j + (str.length - 1) <= charArr.length) {

          // If first char of str matches a char on input, check rest of chars in str.
          if (charArr[j].char === str[0]) {

            var k;
            for (k = 0; k < str.length; k++) if (str[k] !== charArr[j + k].char) break;

            // Check if loop completed (all characters of str were found), then mark used chars.
            if (k === str.length) for (var l = 0; l < k; l++) charArr[j + l].used = true;
          }
        }
        // Check if all chars have been used before proceding to next string
        for (var m = 0; m < charArr.length; m++) if (charArr[m].used === false) break;

        // if the for loop ended, means all chars are used. Return true, else go to the next string.
        if (m === charArr.length) return true;
      }
    }
    return false;
 };


/*
* .isOfLengthOrLessThan(input, n)
*
* Checks if the input parameters character count is less than or equal to the n parameter.
*/

validator.isOfLengthOrLessThan = function(input, n) {
  if (!input) throw "Missing Parameter in the isOfLengthOrLessThan function: 'input'.";
  if (!n) throw "Missing Parameter in the isOfLengthOrLessThan function: 'n'.";

  return input.length <= n ? true : false;
};

/*
* .isOfLengthOrGreaterThan(input, n)
*
* Checks if the input parameters character count is greater than or equal to the n parameter.
*/

validator.isOfLengthOrGreaterThan = function(input, n) {
  if (!input) throw "Missing Parameter in the isOfLengthOrGreaterThan function: 'input'.";
  if (!n) throw "Missing Parameter in the isOfLengthOrGreaterThan function: 'n'.";

  return input.length >= n ? true : false;
};

/*
* .lessWordsThan(input, n)
*
* Checks if the input parameter has a word count less than or equal to the n parameter.
*/

validator.lessWordsThan = function(input, n) {
  if (!input) throw "Missing Parameter in the lessWordsThan function: 'input'.";
  if (!n) throw "Missing Parameter in the lessWordsThan function: 'n'.";

  var wordArray = input.split(" ");
  return wordArray.length < n ? true : false;
};

/*
* .moreWordsThan(input, n)
*
* Checks if the input parameter has a word count greater than or equal to the n parameter.
*/

validator.moreWordsThan = function(input, n) {
  if (!input) throw "Missing Parameter in the moreWordsThan function: 'input'.";
  if (!n) throw "Missing Parameter in the moreWordsThan function: 'n'.";

  var wordArray = input.split(" ");
  return wordArray.length > n ? true : false;
};


/*
* isNumberBetween(input, floor, ceil)
*
* Checks that the input parameter matches all of the following:
*
*    input is greater than or equal to the floor parameter
*    input is less than or equal to the ceil parameter.
*/

validator.isNumberBetween = function(input, floor, ceil) {
  if (!input) throw "Missing Parameter in the isNumberBetween function: 'input'.";
  if (!floor) throw "Missing Parameter in the isNumberBetween function: 'floor'.";
  if (!ceil) throw "Missing Parameter in the isNumberBetween function: 'ceil'.";
  if (floor > ceil) throw "'floor' value must be less than 'ceil' value";

  return (input >= floor && input <= ceil) ? true : false;
};


/*
* .isAlphanumeric(input)
*
* Checks that the input parameter string is only composed of the following characters: a-z, A-Z, or 0-9.
* Unicode characters are intentionally disregarded.
*/

validator.isAlphanumeric = function(input) {
  if (input.length===0)
    return true;
  else {
    for (i=0; i<input.length; i++) {
      var t = input[i].toLowerCase();
      // check each character is a letter or number; any single character not meeting the rule returns false
      if ((t >='a' && t<='z') || (t >= 0 && t <=9)) {
        continue;
      }
      else
        return false;
    }
  }
  return true;
};

/*
* .isCreditCard(input)
*
* Checks if the input parameter is a credit card or bank card number.
* A credit card number will be defined as four sets of four alphanumeric characters separated by hyphens (-),
* or a single string of alphanumeric characters (without hyphens).
*/

validator.isCreditCard = function(input) {
  if(!input) throw "Missing Parameter in the isCreditCard function not found for 'input'" ;

  var inputLength = input.length;

  if (inputLength===16 || inputLength===19) {
    if (inputLength===16) {
      return validator.isAlphanumeric(input);
    }
    else if (inputLength===19) {
      for (j=0; j<19; j++) {
        if(j===4 || j===9 || j===14) {
          if (input[j] !== '-')
            return false;
        }
        else if (!validator.isAlphanumeric(input[j])) {
          console.log("Testing: " + input[j]);
          return false;
        }
      }
      return true;
    }
  }
  else
    return false;
};

/*
* .isHex(input)
*
* Checks if the input string is a hexadecimal color, such as #3677bb.
* Hexadecimal colors are strings with a length of 7 (including the #),
* using the characters 09 and AF.
* isHex should also work on shorthand hexadecimal colors, such as #333.
* The input must start with a # to be considered valid.
*/

validator.isHex = function(input) {
  if(!input) throw "Missing Parameter in the isHex function not found for 'input'";

  input = input.toLowerCase();
  if(input[0]==='#') {
      if (input.length===4 || input.length===7) {
         for (i=1; i<input.length; i++) {
           if ( (input[i] >= 'a' && input[i] <= 'f') || (input[i] >= '0' && input[i] <= '9') )
              continue;
           else
             return false;
         }
         return true;
      }
      else {
        return false;
      }
  }
  else {
    return false;
  }
};


/*
* .isRGB(input)
*
* Checks if the input string is an RGB color, such as rgb(200, 26, 131). An RGB color consists of:
*
*    Three numbers between 0 and 255
*    A comma between each number
*    The three numbers should be contained within rgb( and ).
*/

validator.isRGB = function(input) {
  if(!input) throw "Missing Parameter in the isRGB function not found for 'input'";

  if(input.substring(0,4)==='rgb(' && input[input.length-1] === ')') {
    var cleanInput = "rgb(";
    var commaCount = 0;
    // tidy up spaces and add everything to the cleanInput string
    for (var i=4; i<input.length; i++) {
      if (input[i] !== ' ') { // push everything except spaces to the new string
        if (input[i] === ',') {
          commaCount++; // count the number of commas as we go along
        }
        cleanInput += input[i];
      }
    }
    cleanInput += ')';
    // now have a clean string with no spaces
    if (commaCount !== 2)
      return false;

    // get the list of numbers into an array
    inputArray=cleanInput.substring(4, cleanInput.length-2).split(",");

    // convert each entry to numbers
    for (var j=0; j<inputArray.length; j++) {
      inputArray[j] = parseInt(inputArray[j]);
    }

    // validate each number in the array
    for (var k=0; k<inputArray.length; k++) {
      if (inputArray[k] < 0 || inputArray[k] > 255)
        return false;
    }
    // if we reach here then all tests have passed!
    return true;
  }
  else {
    return false;
  }
};

/*
* .isHSL(input)
*
* Checks if the input string is an HSL color, such as hsl(122, 1, 1).
* An HSL color consists of three numbers:
*  the first number, Hue, is between 0 and 360
*  the second and third numbers, Saturation and Lightness, are between 0 and 1
*  A comma between each number
* The three numbers should be contained within hsl( and ).
*/

validator.isHSL = function(input) {
  if(!input) throw "Missing Parameter in the isHSL function not found for 'input'";

  if(input.substring(0,4)==='hsl(' && input[input.length-1] === ')') {
    var cleanInput = "hsl(";
    var commaCount = 0;
    for (var i=4; i<input.length; i++) {
      if (input[i] !== ' ') { // push everything except spaces to the new string
        if (input[i] === ',') {
          commaCount++;
        }
        cleanInput += input[i];
      }
    }
    cleanInput += ')';
    // now have a clean string with no spaces
    if (commaCount !== 2)
      return false;

    // get the list of numbers into an array
    inputArray=cleanInput.substring(4, cleanInput.length-2).split(",");

    // convert each entry to numbers & check
    inputArray[0] = parseInt(inputArray[0]);
    if (inputArray[0] < 0 || inputArray[0] > 360)
      return false;

    // convert each entry to numbers & check
    inputArray[1] = parseFloat(inputArray[1]);
    if (inputArray[1] < 0 || inputArray[1] > 1)
      return false;

    // convert each entry to numbers & check
    inputArray[2] = parseFloat(inputArray[2]);
    if (inputArray[2] < 0 || inputArray[2] > 1)
      return false;

    // if we reach here then all tests have passed!
    return true;
  }
  else {
    return false;
  }
};


/*
.isColor(input)
Checks if the input parameter is a hex, RGB, or HSL color type.
*/
validator.isColor = function(input) {
  if (!input) throw "Error: missing input for isColor: 'input'"

  var colorChar = input[0];

  switch (colorChar) {
    case '#':
      return validator.isHex(input);
    case 'r':
      return validator.isRGB(input);
    case 'h':
      return validator.isHSL(input);
    default:
      return false;
  }
};