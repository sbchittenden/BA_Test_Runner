// JavaScript Utility Functions

// function(window) {
var utilities = {};

utilities.isArray = Array.isArray || function(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
};

/*
* .by(list, n, callback)
*
* Write a function that operates similarly to .forEach.
* Your function should iterate and call the callback parameter for each element or property of a list at the interval specified by the n parameter.
* It should not call callback on values greater than the lists number of elements.
*/

utilities.by = function(list, n, callback) {
  // start on the first entry as given by 'n', perform the callback method on the nth entry, then increment the counter by n
  for(i=n-1; i<list.length; i+=n) {
    callback(list[i]);
  }
};

// var log = function(val, index, list) {
//   console.log(val);
// };

// utilities.by([1,2,3,4,5,6], 2, log); // will output: 2, 4, 6


/*
* .keys(object)
*
* Write a function that will create an array of all the keys of an object.
* Remember that a key is the name of an objects property.
*/

utilities.keys = function(object) {
  // create an empty array for the result
  result = [];
  // cycle through each key in the object and push it to the result array
  for(var i in object) {
    result.push(i);
  }
  // return the result array
  return result;
};


/*
* .pairs(object)
*
* Write a function that will create an array of all the keys and values of an object in the order of [key, value, key, value]
* for as many key/value pairs as exist in the object.
*/

utilities.pairs = function(object) {
  // create an empty array for the result
  result = [];
  // cycle through each key in the object and push the key then the value to the result array
  for(var i in object) {
    result.push(i);
    result.push(object[i]);
  }
  // return the result array
  return result;
};


/*
* .shuffle(array)
*
* Write a function that returns a randomly re-arranged copy of the elements in its parameter array.
*/
utilities.shuffle = function(array) {
  // set up results - shallow copy array into results array
  var result = array.splice(0);
  // decide how many times to shuffle the array (arbitrary number)
  var shuffleTimes = result.length+10;

  for (i=0; i<shuffleTimes; i++) {
    // calculate which element we want to remove, and store that element in a temporary variable
    var removeLocation = Math.floor(Math.random()*result.length);
    var tempItem = result[removeLocation];
    // remove the item from the array
    result.splice(removeLocation, 1);

    // decide where the element will be reinserted into the array
    var insertionLocation  = Math.floor(Math.random()*result.length);
    // add the result back in to the results array
    result.splice(insertionLocation, 0, tempItem);
  }

  return result;
};


/*
* .pluralize(n, word, pluralWord)
*
* Write a function that will return the plural of a word depending on the value of the n parameter.
* If n is 1, return the non-plural word (parameter word); otherwise, add an s to the plural word.
* If the pluralWord parameter is provided, instead of adding an s, return the pluralWord.
*/

utilities.pluralize = function(n, word, pluralWord) {
  if (n===1)
    return word;
  else {
    if (pluralWord)
      return pluralWord;
    else
      return word + 's';
  }
};


/*
* .toDash(str)
*
* Write a function for converting a camelCase string to a dashed string.
* Camel case presents words with no spaces separating them and with each words first letter capitalized
* except the first word, which is lower case.
* Examples: hotDog, spaceStationComplex, myFirstFunction.
*
* Dashed strings are entirely lowercase, and words are separated by hyphens (-).
* Examples: hot-dog, space-station-complex, my-first-function.
*/

utilities.toDash = function(str) {
  var result = "";

  // cycle through the characters in the input string
  for (var c in str) {
    // if character is uppercase, insert a dash first to the result string, plus the lowercase character
    if (str[c] === 'A' || str[c] === 'B' || str[c] === 'C' || str[c] === 'D' || str[c] === 'E' || str[c] === 'F' || str[c] === 'G'
        || str[c] === 'H' || str[c] === 'I' || str[c] === 'J' || str[c] === 'K' || str[c] === 'L' || str[c] === 'M' || str[c] === 'N'
        || str[c] === 'O' || str[c] === 'P' || str[c] === 'Q' || str[c] === 'R' || str[c] === 'S' || str[c] === 'T' || str[c] === 'U'
        || str[c] === 'V' || str[c] === 'W' || str[c] === 'X' || str[c] === 'Y' || str[c] === 'Z')
      result += ('-' + str[c].toLowerCase());
    // add the character to the result string
    else
      result += str[c];
  }

  return result;
};



/*
* .toCamel(str)
* Write a function for converting a dashed string to a camelCase string
*/

utilities.toCamel = function(str) {
  var result = "";

  // cycle through the characters in the input string
  for (var c in str) {
    // if character is a dash, insert move the count on and insert an uppercase character
    if (str[c] === '-'){
      // use this to reference the 'c' in the calling function, ie the loop function.
      this.c++;
      result += (str[c].toUpperCase());
    }
    // else add the character to the result string
    else
      result += str[c];
  }
  return result;
};



/*
* .has(obj, search)
*
* Write a function that searches all values of the parameter obj and returns true if any are equal to the search parameter.
* Otherwise has should return false.
*/

utilities.has = function(obj, search) {
  // cycle through each attribute in the object
  for (var attr in obj) {
    // if the value of the attribute matches the search string, return true
    if (obj[attr] === search)
      return true;
  }
  // if we reach here, all comparisons failed, so return false
  return false;
};



/*
* .pick(obj, keys)
*
* Write a function that returns a new object by picking all key/value pairs from the parameter obj.
* The keys that are picked will be determined by the array parameter keys.
*/

utilities.pick = function(obj, keys) {
  //create a new result object to be returned
  var result = {};

  // cycle through each key in the keys array
  for (var key in keys) {
    // assign the values we will use to variables to make code easier to understand
    var cKey = keys[key];
    var cVal = obj[keys[key]]
    // if the value in the array has a corresponding value in the test object, add the attribute/value pair to the new object
    if (cVal !== undefined)
      result[cKey] = cVal;
  }

  return result;
};



/*
* .withoutSymbols(input)
*
* Returns the input parameter text with all symbols removed.
* Symbols refer to any non-alphanumeric character.
* A character is considered alphanumeric if it matches one of the following:
* az, AZ, or 09. Ignore whitespace.
*/

utilities.withoutSymbols = function(input) {
  var result = "";

  // cycle through the letters in the input
  for (var c in input) {
    // convert the test char to lowercase
    testChar = input.charAt(c).toLowerCase();
    // if the character is alphanumberic, add it to the result string
    if (testChar === ' ' || testChar === 'a' || testChar === 'b' || testChar === 'c' || testChar === 'd' || testChar === 'e' || testChar === 'f'  || testChar === 'g' || testChar === 'h' || testChar === 'i' || testChar === 'j' || testChar === 'k' || testChar === 'l' || testChar === 'm' || testChar === 'n' || testChar === 'o' || testChar === 'p' || testChar === 'q' || testChar === 'r' || testChar === 's' || testChar === 't' || testChar === 'u' || testChar === 'v' || testChar === 'w' || testChar === 'x' || testChar === 'y' || testChar === 'z' || testChar === '0' || testChar === '1'  || testChar === '2'  || testChar === '3' || testChar === '4' || testChar === '5' || testChar === '6' || testChar === '7' || testChar === '8' || testChar === '9') {
      result += testChar;
    }
  }

  return result;
};


/*
* .countWords(input)

* Counts the number of words in the input parameter.
* Refer to the definition of word used in the description of the .contains function above.
*/

utilities.countWords = function(input) {
  var result = 0;
  // if the input string is empty, return 0
  if (input === '')
    return result;
  else {
    // input is not 0, so we are starting parsing a word
    result++;
    for (var char in input) {
      var c = input[char];
      // this is the list of characters we count as punctuation
      if (c === ' ' || c === '!' || c === '-' || c=== '.' || c===',' || c==='"' || c==="'") {
        // if the character is not the last one, then there are more words to follow, so increase the word count.
        // if the character is the last one, then we don't need to increase the count any more.
        if (char != input.length-1)
          result++;
      }
    }
  }

  return result;
};


// })(window);
