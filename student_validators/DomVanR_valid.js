// (function(window) {
var validator = {};

validator.isEmailAddress = function(input) {
  //Begin isEmailAddress

  //if the string is empty or there is no @ or . charachter, it can't be an email address. check first is @ is the beginning character before splitting
  if (
    0 === input.length ||
    "@" === input[0] ||
    -1 === input.indexOf("@") ||
    -1 === input.indexOf(".")
  ) {
    return false;
  }
  var inputArray = input.split("@");
  var userName = inputArray[0];
  var domainName = inputArray[1];

  if (2 !== inputArray.length) {
    //if after splitting on @ we don't have two parts then return false.
    return false;
  }

  if ("." === domainName[0] || -1 === domainName.indexOf(".")) {
    //. location is at beginning of domainName or not there -> not a valid email address
    return false;
  }

  if (domainName.length < 4 || domainName.split(".")[1].length < 2) {
    //min length of domain name portion is 4 characters including the dot + TLD; TLD min length is 2 (we're disallowing TLD 1 length)
    return false;
  }

  //check to make sure chars are in the list of allowed values
  //using rules inspired by https://en.wikipedia.org/wiki/Email_address#Syntax

  var allowedCharsUser =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'*+-/=?^_`{|}~;.";
  var allowedCharsDomain =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-";
  var domain = domainName.split(".")[0];

  for (var i = 0; i < domain; i++) {
    //Making sure all chars are allowed for domain name
    if (allowedCharsDomain.indexOf(domain[i]) === -1) {
      return false;
    }
  }

  for (var i = 0; i < userName; i++) {
    //Making sure all chars are allowed for username
    if (allowedCharsUser.indexOf(userName[i]) === -1) {
      return false;
    }
  }

  return true;
  //end isEmailAddress
};

//console.log("+++++++++ 'isEmailAddress' Tests +++++++++");
//console.log(validator.isEmailAddress("admin@gmail.com")); // returns true
//console.log(validator.isEmailAddress("@facebook.com")); // returns false
//console.log(validator.isEmailAddress("domi@.com")); // returns false
//console.log(validator.isEmailAddress("domi.domi@gmail.com")); // returns true
//console.log(validator.isEmailAddress("domi@g.co")); // returns true
//console.log(validator.isEmailAddress("domi@gmailcom")); // returns false
//console.log(validator.isEmailAddress("do.mi@gmailcom")); //returns false

validator.isPhoneNumber = function(input) {
  //Begin isPhoneNumber

  if (0 === input.length || 10 > input.length) {
    return false;
  } //telephone numbers must have at least 10 characters; we're including all digits and if longer than 10 possible special characters and whitespace

  var validDigits = "0123456789";
  var strippedNumber = "";
  for (var i = 0; i < input.length; i++) {
    if (validDigits.indexOf(input[i]) >= 0) {
      strippedNumber += input[i];
    }
  }
  if (10 !== strippedNumber.length) {
    return false;
  } //10 digits should be left after stripping out anything that's not a digit

  return true;
  //End isPhoneNumber
};

//console.log("+++++++++ 'isPhoneNumber' Tests +++++++++");
//console.log("returned '" + validator.isPhoneNumber("(408)-838-8888") + "' : valid phone number" );
//console.log("returned '" + validator.isPhoneNumber("408.838.8888") + "' : valid phone number" );
//console.log("returned '" + validator.isPhoneNumber("408-8384-8888") + "' : NOT a valid phone number" );

validator.isDate = function(input) {
  //Begin isDate
  var date = typeof input === "string" ? new Date(input) : input;
  return (
    date &&
    !isNaN(date) &&
    Object.prototype.toString.call(date) === "[object Date]"
  );
  //End isDate
};

//console.log("+++++++++ 'isDate' Tests +++++++++");
//console.log(validator.isDate("2015-03-25"));
//console.log(validator.isDate("3/25/2015"));

validator.isBeforeDate = function(input, reference) {
  //Begin isBeforeDate
  if (!this.isDate(input)) throw "'input' is not a valid date value";
  if (!this.isDate(reference)) throw "'reference' is not a valid date value";

  var date = typeof input === "string" ? new Date(input) : input;
  var ref = typeof reference === "string" ? new Date(reference) : reference;

  return date.getTime() < ref.getTime();
  //End isBeforeDate
};

//console.log("+++++++++ 'isBeforeDate' Tests +++++++++");
//console.log(validator.isBeforeDate("10/10/2016", "4/5/2012") + " : is not before");
//console.log(validator.isBeforeDate("10/10/2016", "10/12/2016") + " : is before");
//var dec25 = new Date("12/25/2016"), oct31 = new Date("10/31/2016")
//console.log(validator.isBeforeDate(oct31, dec25));
//console.log(validator.isBeforeDate(dec25, oct31));

validator.isAfterDate = function(input, reference) {
  //Begin isAfterDate
  if (!this.isDate(input)) throw "'input' is not a valid date value";
  if (!this.isDate(reference)) throw "'reference' is not a valid date value";

  var date = typeof input === "string" ? new Date(input) : input;
  var ref = typeof reference === "string" ? new Date(reference) : reference;

  return date.getTime() > ref.getTime();
  //End isAfterDate
};

//console.log("+++++++++ 'isAfterDate' Tests +++++++++");
//console.log(validator.isAfterDate("10/10/2016", "4/5/2012"));
//console.log(validator.isAfterDate("10/10/2016", "10/12/2016"));
//console.log(validator.isAfterDate(oct31, dec25));
//console.log(validator.isAfterDate(dec25, oct31));

validator.isBeforeToday = function(input) {
  //Begin isBeforeToday
  if (!this.isDate(input)) throw "'input' is not a valid date value";

  var date = typeof input === "string" ? new Date(input) : input;
  var ref = new Date();

  return date.getTime() < ref.getTime();
  //End isBeforeToday
};

//console.log("+++++++++ 'isBeforeToday' Tests +++++++++");
//console.log(validator.isBeforeToday("10/10/2016"));
//console.log(validator.isBeforeToday("10/10/2019"));

validator.isAfterToday = function(input) {
  //Begin isAfterToday
  if (!this.isDate(input)) throw "'input' is not a valid date value";

  var date = typeof input === "string" ? new Date(input) : input;
  var ref = new Date();

  return date.getTime() > ref.getTime();
  //End isAfterToday
};

//console.log("+++++++++ 'isAfterToday' Tests +++++++++");
//console.log(validator.isAfterToday("10/10/2019"));

validator.isEmpty = function(input) {
  //Begin isEmpty
  return !isNaN(input) &&
    Object.prototype.toString.call(input) === "[object String]"
    ? !input.trim().length
    : false;
  //End isEmpty
};

//console.log("+++++++++ 'isEmpty' Tests +++++++++");
//console.log(validator.isEmpty('') + " : true");
//console.log(validator.isEmpty('   ') + " : true");
//console.log(validator.isEmpty('   test ') + " : false");
//console.log(validator.isEmpty('   1 ') + " : false");
//console.log(validator.isEmpty('  0 ') + " : false");
//console.log(validator.isEmpty(42) + " : false");
//console.log(validator.isEmpty(undefined) + " : false");
//console.log(validator.isEmpty(null) + " : false");
//console.log(validator.isEmpty(true) + " : false");
//console.log(validator.isEmpty(false) + " : false");

validator.isTrimmed = function(input) {
  //Begin isTrimmed
  return input.trim().length === input.length && input.indexOf("  ") === -1; //if already trimmed then doing more trimming won't do anything and also there won't be any double or larger whitespace anywhere between words
  //End isTrimmed
};
//console.log("+++++++++ 'isTrimmed' Tests +++++++++");
//console.log(validator.isTrimmed("   harmony and irony") + " : false"); // returns false
//console.log(validator.isTrimmed("harmony and irony      ") + " : false"); // returns false
//console.log(validator.isTrimmed("harmony  and  irony") + " : false"); // returns false
//console.log(validator.isTrimmed("harmony and irony") + " : true"); // returns true

validator.contains = function(input, words) {
  //Begin contains
  var inputLowercase = input.toLowerCase();
  var index, preChar, postChar, preCharIndex, postCharIndex;
  var wordChars = "'!\"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~] ";

  for (var i in words) {
    index = inputLowercase.indexOf(words[i].toLowerCase());
    if (index !== -1) {
      //let's check if this is a word or just a partial word so now we look at the character right before it
      preChar = inputLowercase[index - 1];
      postChar = inputLowercase[index + words[i].length];
      preCharPunc = wordChars.indexOf(preChar) !== -1; //true if punctuation
      postCharPunc = wordChars.indexOf(postChar) !== -1; //true if punctuation

      if (
        (preCharPunc || preChar === undefined) &&
        (postCharPunc || postChar === undefined)
      ) {
        return true; //we checked if before and after the string there is puncutation, whitespace or undefined. If so then true word match
      }
    }
  }
  return false;
  //End contains
};

//console.log("+++++++++ 'contains' Tests +++++++++");
//console.log(validator.contains("Visiting new places is fun.", ["coconut"]) + " : false"); // returns false

//console.log(validator.contains("Visiting new places is fun.", ["aces"])+ " : false"); // returns false

//console.log(validator.contains("Visiting new places is fun.", ["places"])+ " : true"); // returns true

//console.log(validator.contains('"Definitely," he said in a matter-of-fact tone.', ["matter", "definitely"]) + " : true"); // returns true

validator.lacks = function(input, words) {
  //Begin lacks
  return !this.contains(input, words);
  //End lacks
};

//console.log("+++++++++ 'lacks' Tests +++++++++");
//console.log(validator.lacks("Visiting new places is fun.", ["coconut"]) + " : true"); // returns false

//console.log(validator.lacks("Visiting new places is fun.", ["aces"])+ " : true"); // returns false

//console.log(validator.lacks("Visiting new places is fun.", ["places"])+ " : false"); // returns true

//console.log(validator.lacks('"Definitely," he said in a matter-of-fact tone.', ["matter", "definitely"]) + " : false"); // returns true

//isComposedOf

validator.isComposedOf = function(input, strings) {
  //Begin isComposedOf
  var words = strings;
  var allLocations = [];
  var location;
  var inputString = input.toLowerCase();

  for (var i in words) {
    allLocations[i] = [];
    location = inputString.indexOf(words[i].toLowerCase());
    allLocations[i].push(location);

    //building array of locations
    if (location !== -1) {
      var j = location + words[i].length;
      while (j < inputString.length) {
        if (inputString.substr(j).indexOf(words[i].toLowerCase()) !== -1) {
          location = inputString.substr(j).indexOf(words[i].toLowerCase()) + j;
          allLocations[i].push(location);
          j = location + words[i].length;
        } else {
          j = inputString.length;
        }
      }
    }
  }

  //now use locations to write whitespace in those index values
  //loop through words and subloop through various locations for those words
  for (var i in words) {
    for (var j in allLocations[i]) {
      var k = allLocations[i][j];
      if (k !== -1) {
        var end = k + words[i].length;
        while (k < end) {
          inputString =
            inputString.substr(0, k) + " " + inputString.substr(k + 1);
          k++;
        }
      }
    }
  }
  //strip all whitespace and puctuation. If string is empty return true
  if (
    inputString
      .trim()
      .split("")
      .filter(function(char) {
        return !";:.,?!-'\"(){} \t\n".includes(char);
      })
      .join("").length === 0
  ) {
    return true;
  }
  return false;
  //End isComposedOf
};
//console.log("+++++++++ 'isComposedOf' Tests +++++++++");
//console.log(validator.isComposedOf("10184", ["1", "2", "3", "4", "5", "6" ,"7", "8", "9", "0"])); //returns true
//console.log(validator.isComposedOf("I am ready.", ["I", "I'm", "am", "not", "ready"]));// returns true
//console.log(validator.isComposedOf("Iamnotready.", ["I", "I'm", "am", "not", "ready"])); // returns true
//console.log(validator.isComposedOf("applesound", ["apples", "sound"])); //returns true
//console.log(validator.isComposedOf("foobarbaz", ["foo", "bar"])); // returns false
//console.log(validator.isComposedOf("fooamazonFOO", ['Foo', 'Amazon'])); // returns true
//console.log(validator.isComposedOf(" bahbahbah.", ['bah', 'blah'])); //returns true

//isComposedOf

validator.isOfLengthOrLessThan = function(input, n) {
  //Begin isOfLengthOrLessThan
  return input.length <= n;
  //End isOfLengthOrLessThan
};

validator.isOfLengthOrGreaterThan = function(input, n) {
  //Begin isOfLengthOrGreaterThan
  return input.length >= n;
  //End isOfLengthOrGreaterThan
};

validator.lessWordsThan = function(input, n) {
  //Begin lessWordsThan
  if (validator.isEmpty(input) === true) throw "'input' is empty";
  if (n < 1) throw "give 'n' a value that is 1 or more";

  input = input
    .split(" ")
    .filter(function(char) {
      return !";:.,?!-'\"(){} \t\n".includes(char);
    })
    .join(" ");

  return input.split(" ").length <= n;
  //End lessWordsThan
};

//console.log("+++++++++ 'lessWordsThan' Tests +++++++++");
//console.log(validator.lessWordsThan("! this  test.", 3));
//console.log(validator.lessWordsThan("this is a test", 3));

validator.moreWordsThan = function(input, n) {
  //Begin moreWordsThan
  if (validator.isEmpty(input) === true) throw "'input' is empty";
  if (n < 1) throw "give 'n' a value that is 1 or more";

  input = input
    .split(" ")
    .filter(function(char) {
      return !";:.,?!-'\"(){} \t\n".includes(char);
    })
    .join(" ");

  return input.split(" ").length >= n;
  //End moreWordsThan
};

//console.log("+++++++++ 'lessWordsThan' Tests +++++++++");
//console.log(validator.moreWordsThan("! this  is test.", 3));
//console.log(validator.moreWordsThan("this is a test", 3));

validator.isNumberBetween = function(input, floor, ceil) {
  //Begin isNumberBetween
  return input >= floor && input <= ceil;
  //End isNumberBetween
};

//console.log("+++++++++ 'isNumberBetween' Tests +++++++++");
//console.log(validator.isNumberBetween(4, 3, 5)); //should return true
//console.log(validator.isNumberBetween(-3,6.0, 7)); //should return false
//console.log(validator.isNumberBetween(NaN,6.0, 7)); //should return false

validator.isAlphanumeric = function(input) {
  //Begin isAlphanumeric
  var allowedValues = "abcdefghijklmnopqrstuvwxyz0123456789";
  var inputString = input
    .toLowerCase()
    .split("")
    .filter(function(char) {
      return allowedValues.includes(char);
    })
    .join("");
  return inputString.length === input.length;
  //End isAlphanumeric
};

//console.log("+++++++++ 'isAlphanumeric' Tests +++++++++");
//console.log(validator.isAlphanumeric("aAbbeelske5667")); //should return true
//console.log(validator.isAlphanumeric("4%%")); //should return false
//console.log(validator.isAlphanumeric("    ")); //should return false

validator.isCreditCard = function(input) {
  //Begin isCreditCard
  var inputString = input.split("-").join(""); //get rid of dash

  //if length all wrong or not alphanumeric then we return false. Otherwise we're happy.
  if (this.isAlphanumeric(inputString) === false || inputString.length !== 16) {
    return false;
  } else {
    return true;
  }
  //End isCreditCard
};

//console.log("+++++++++ 'isCreditCard' Tests +++++++++");
//console.log(validator.isCreditCard("1234-5678-9101-1121")); // returns true
//console.log(validator.isCreditCard("1234567891011121")); // returns true
//console.log(validator.isCreditCard("4427A693CF324D14")); // returns true
//console.log(validator.isCreditCard("4427-A693-CF32-4D14")); // returns true
//console.log(validator.isCreditCard("----------------")); // returns false
//console.log(validator.isCreditCard("testcard")); // returns false

validator.isHex = function(input) {
  //Begin isHex
  var badChars = function(string) {
    var allowedChars = "abcdefABCDEF0123456789";
    var bad = false;
    string = string.substr(1); //we're only interested in what is past the # character
    var i = 0;
    while (i < string.length) {
      if (allowedChars.indexOf(string[i]) === -1) {
        //if there is only one of the chars that is not in the allowed list the whole string is bad
        bad = true;
      }
      i++;
    }
    return bad;
  };
  //if the string doesn't start with # or isn't either 4 or 7 long and doesn't have allowed chars we return false
  if (
    input[0] !== "#" ||
    !(input.length === 4 || input.length === 7) ||
    badChars(input)
  ) {
    return false;
  } else {
    return true;
  }
  //End isHex
};

//console.log("+++++++++ 'isHex' Tests +++++++++");
//console.log(validator.isHex("#abcdef")); // returns true
//console.log(validator.isHex("#bcdefg")); // returns false
//console.log(validator.isHex("#bbb")); // returns true
//console.log(validator.isHex("#1cf")); // returns true
//console.log(validator.isHex("#1234a6")); // returns true
//console.log(validator.isHex("#1234a68")); // returns false
//console.log(validator.isHex("cc4488")); // returns false

validator.isRGB = function(input) {
  //Begin isRGB
  if (
    input.length < 10 ||
    input.indexOf("rgb(") !== 0 ||
    input.indexOf(".") !== -1 ||
    input.indexOf(")") !== input.length - 1
  ) {
    //checking for proper components to string but also making sure no fractional values with dot check
    return false;
  }
  var bad = true;
  var rgbString = input.substr(4, input.length - 5); //we're only interested in the number part
  var rgbArray = rgbString.split(",");

  var R = parseInt(rgbArray[0].trim());
  var G = parseInt(rgbArray[1].trim());
  var B = parseInt(rgbArray[2].trim());
  var lower = 0;
  var upper = 255;
  if (
    this.isNumberBetween(R, lower, upper) &&
    this.isNumberBetween(G, lower, upper) &&
    this.isNumberBetween(B, lower, upper)
  ) {
    bad = false;
  }

  if (bad) {
    return false;
  } else {
    return true;
  }
  //End isRGB
};

//console.log("+++++++++ 'isRGB' Tests +++++++++");
//console.log(validator.isRGB("rgb(0,0,0)")); // returns true
//console.log(validator.isRGB("rgb(0, 0, 0)")); // returns true
//console.log(validator.isRGB("rgb(12,1.0,0)")); //returns false
//console.log(validator.isRGB("rgb(255, 255, 112)")); // returns true
//console.log(validator.isRGB("rgba(0,0,0, 0)")); // returns false
//console.log(validator.isRGB("rgb(0,300,0)")); // returns false
//console.log(validator.isRGB("rgb(0,-14,0)")); // returns false

validator.isHSL = function(input) {
  //Begin isHSL
  if (
    input.length < 10 ||
    input.indexOf("hsl(") !== 0 ||
    input.indexOf(")") !== input.length - 1
  ) {
    return false;
  }
  var bad = true;
  var hslString = input.substr(4, input.length - 5); //we're only interested in the numbers part
  var hslArray = hslString.split(",");
  var H = parseInt(hslArray[0].trim());
  var S = parseFloat(hslArray[1].trim());
  var L = parseFloat(hslArray[2].trim());

  if (
    this.isNumberBetween(H, 0, 360) &&
    this.isNumberBetween(S, 0, 1) &&
    this.isNumberBetween(L, 0, 1)
  ) {
    bad = false;
  }

  if (bad) {
    return false;
  } else {
    return true;
  }
  //End isHSL
};

//console.log("+++++++++ 'isHSL' Tests +++++++++");
//console.log(validator.isHSL("hsl(0,0,0)")); // returns true
//console.log(validator.isHSL("hsl(0, 0, 0)")); // returns true
//console.log(validator.isHSL("hsl(255, .5, 1)")); // returns true
//console.log(validator.isHSL("hsla(0,0,0, 0)")); // returns false
//console.log(validator.isHSL("hsl(1000,.4,0)")); // returns false
//console.log(validator.isHSL("hsl(0,1,3)")); // returns false
// console.log(validator.isHSL("hsl(0,1)")); // returns false
// console.log(validator.isHSL("hsl(0)")); // returns false
// console.log(validator.isHSL("abc345")); // returns false

validator.isColor = function(input) {
  //Begin isColor
  return this.isHex(input) || this.isRGB(input) || this.isHSL(input);
  //End isColor
};

//console.log("+++++++++ 'isColor' Tests +++++++++");
//console.log(validator.isColor("#ccccff")); // returns true
//console.log(validator.isColor("rgb(255,255,200)")); // returns true
//console.log(validator.isColor("hsl(46,0.66,0.21)")); // returns true
//console.log(validator.isColor("hsl(255,255,255)")); // returns false
//console.log(validator.isColor("abc345")); // returns false
//console.log(validator.isColor("#363")); // returns true
// })(window);
