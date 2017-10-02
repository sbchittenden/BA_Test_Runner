var assert = chai.assert;

// replace v variable assignment with correct validator object reference as needed
var v = validator;

describe('Validation functions', function() {

  /*===========================================================
  isEmailAddress
  Checks if the input parameter is an email address, consisting of three parts: An email address consists of two strings combined by an @ symbol.
  ===========================================================*/

  describe('isEmailAddress', function() {
    it('should return true for a valid email with a dot in the left side', function() {
      assert.equal(v.isEmailAddress('joe.momma@mail.com'), true, 'should validate email with \'.\' in left side of address');
    });

    it('should return false for an email with no TLD', function() {
      assert.equal(v.isEmailAddress('joe.momma@mail'), false, 'an email with no top-level domain should not validate');
    });

    it('should return false for an email with no @ symbol', function() {
      assert.equal(v.isEmailAddress('joe.momma.co'), false, 'an email with no @ symbol should not validate');
    });

    it('should return false for an email with no string before the @ symbol', function() {
      assert.equal(v.isEmailAddress('@fake.com'), false, 'an email with no @ symbol should not validate');
    });
  });

  /*===========================================================
  isPhoneNumber
  Checks if the input parameter is a valid phone number for your country.
  ===========================================================*/

  describe('isPhoneNumber', function() {
    it('UK phone 11 digit', function() {
      assert.equal(v.isPhoneNumber('02025467889'), true, '11-digit phone number - UK');
    });

    it('USA phone 10 digit', function() {
      assert.equal(v.isPhoneNumber('12549683215'), true, '10-digit phone number - US');
    });
  });

  /*===========================================================
   .isDate(input)
  Checks if the input parameter text is a valid date. For your purposes, a valid date is any string that can be turned into a JavaScript Date Object.
  ===========================================================*/

  describe('isDate', function() {
    it('string can be turned into a JS Date object', function() {
      assert.equal(v.isDate('January 5, 2017'), true);
    });

    it('input can be turned into a JS Date object', function() {
      assert.equal(v.isDate('October 17, 2000 05:54:10'), true);
    });

    it('input can be turned into a JS Date object', function() {
      assert.equal(v.isDate('March'), true);
    });
  });

  /*===========================================================
  isBeforeDate(input, reference)
  Checks if the input parameter is a date that comes after the reference date. Both the input and the reference can be strings or Date Objects. This function relies on two valid dates; if two are not found, it should throw a new error.
  ===========================================================*/

  describe('isBeforeDate', function() {
    it('should accept strings and should return false if the input date is after the reference date', function() {
      assert.equal(v.isBeforeDate("10-10-2016", "4-5-2012"), false);
    });

    it('should accept strings and should return true if the input date is before the reference date', function() {
      assert.equal(v.isBeforeDate("10-10-2016", "10-12-2016"), true);
    });

    var dec25 = new Date("12-25-2016");
    var oct31 = new Date("10-31-2016");

    it('should accept Date objects and should return true if the input date is before the reference date', function() {
      assert.equal(v.isBeforeDate(oct31, dec25), true);
    });

    it('should accept Date objects and should return false if the input date is after the reference date', function() {
      assert.equal(v.isBeforeDate(dec25, oct31), false);
    });
  });

  /*===========================================================
  isAfterDate(input, reference)
  Checks if the input parameter is a date that comes before the reference date. Both the input and the reference can be strings or Date Objects. This function relies on two valid dates; if two are not found, it should throw a new error.
  ===========================================================*/

  describe('isAfterDate', function() {
    it('should accept strings and should return true if the input date is after the reference date', function() {
      assert.equal(v.isAfterDate("10-10-2016", "4-5-2012"), true);
    });

    it('should accept strings and should return false if the input date is before the reference date', function() {
      assert.equal(v.isAfterDate("10-10-2016", "10-12-2016"), false);
    });

    var dec25 = new Date("12-25-2016");
    var oct31 = new Date("10-31-2016");

    it('should accept Date objects and should return true if the input date is after the reference date', function() {
      assert.equal(v.isAfterDate(dec25, oct31), true);
    });

    it('should accept Date objects and should return false if the input date is before the reference date', function() {
      assert.equal(v.isAfterDate(oct31, dec25), false);
    });
  });

  /*===========================================================
  isBeforeToday(input)
  Checks if the input parameter is a date that comes before today. The input can be either a string or a Date Object. This function relies on one valid date; if one is not found, it should throw a new error.
  ===========================================================*/

  describe('isBeforeToday', function() {
    it('should accept strings and should return true if the input date is before today', function() {
      assert.equal(v.isBeforeToday("April 8, 1879"), true);
    });

    it('should accept strings and should return false if the input date is after today', function() {
      assert.equal(v.isBeforeToday("April 8, 2079"), false);
    });

    var tomorrow = new Date();
    tomorrow.setTime(tomorrow.getTime() + 24 * 60 * 60 * 1000);

    var yesterday = new Date();
    yesterday.setTime(yesterday.getTime() - 24 * 60 * 60 * 1000);

    it('should accept Date objects and should return true if the input date is before today', function() {
      assert.equal(v.isBeforeToday(yesterday), true);
    });

    it('should accept Date objects and should return false if the input date is after today', function() {
      assert.equal(v.isBeforeToday(tomorrow), false);
    });


  });

  /*===========================================================
  isAfterToday(input)
  Checks if the input parameter is a date that comes after today. The input can be either a string or a Date Object. This function relies on one valid date; if one is not found, it should throw a new error.
  ===========================================================*/

  describe('isAfterToday', function() {
    it('should accept strings and should return true if the input date is after today', function() {
      assert.equal(v.isAfterToday("April 8, 2079"), true);
    });

    it('should accept strings and should return false if the input date is before today', function() {
      assert.equal(v.isAfterToday("April 8, 1879"), false);
    });

    var tomorrow = new Date();
    tomorrow.setTime(tomorrow.getTime() + 24 * 60 * 60 * 1000);

    var yesterday = new Date();
    yesterday.setTime(yesterday.getTime() - 24 * 60 * 60 * 1000);

    it('should accept Date objects and should return true if the input date is after today', function() {
      assert.equal(v.isAfterToday(tomorrow), true);
    });

    it('should accept Date objects and should return false if the input date is before today', function() {
      assert.equal(v.isAfterToday(yesterday), false);
    });
  });

  /*===========================================================
  isEmpty(input)
  Checks the input parameter and returns true if it is an empty string–a string with no length or characters that is represented as "" or only contains whitespace(s).
  ===========================================================*/

  describe('isEmpty', function() {
    it('should return true if the input is an empty string', function() {
      assert.equal(v.isEmpty(''), true);
    });

    it('should return true if the input is a string containing only whitespaces', function() {
      assert.equal(v.isEmpty('            '), true);
    });

    it('should return false if the input is an not empty string', function() {
      assert.equal(v.isEmpty('Hello!'), false);
    });

    it('should return false if the input is a number', function() {
      assert.equal(v.isEmpty(42), false);
    });

    it('should return false if the input is null', function() {
      assert.equal(v.isEmpty(null), false);
    });

    it('should return false if the input is undefined', function() {
      assert.equal(v.isEmpty(undefined), false);
    });

    it('should return false if the input is a boolean', function() {
      assert.equal(v.isEmpty(true), false);
    });

    it('should return false if the input is a boolean', function() {
      assert.equal(v.isEmpty(false), false);
    });

  });

  /*===========================================================
   *isTrimmed(input)
  Checks if the input parameter has leading or trailing whitespaces or too many spaces between words. Leading refers to before while trailing refers to after. This function will help validate cases where extra spaces were added accidentally by the user.
  ===========================================================*/

  describe('isTrimmed', function() {
    it('should return true for trimmed input', function() {
      assert.equal(v.isTrimmed("harmony and irony"), true);
    });

    it('should return false for leading whitespace', function() {
      assert.equal(v.isTrimmed("     harmony and irony"), false);
    });

    it('should return false for trailing whitespace', function() {
      assert.equal(v.isTrimmed("harmony and irony      "), false);
    });

    it('should return false for leading and trailing whitespace', function() {
      assert.equal(v.isTrimmed("       harmony and irony      "), false);
    });
  });

  /*===========================================================
   *contains(input, words)
  Checks if the input text parameter contains one or more of the words within the words array. A word is defined as the following: having undefined, whitespace, or punctuation before and after it. The function should be case-insensitive.
  ===========================================================*/

  describe('contains', function() {
    it('should return false if input does not contain one or more words in the words array', function() {
      assert.equal(v.contains("Visiting new places is fun.", ["coconut"]), false);
    });

    it('should return false if input does not contain one or more words in the words array', function() {
      assert.equal(v.contains("Visiting new places is fun.", ["aces"]), false);
    });

    it('should return true if input contains one or more words in the words array', function() {
      assert.equal(v.contains("Visiting new places is fun.", ["places"]), true);
    });

    it('should return true if input contains one or more words in the words array', function() {
      assert.equal(v.contains('"Definitely," he said in a matter-of-fact tone.', ["matter", "definitely"]), true);
    });
  });

  /*===========================================================
  lacks(input, words)
  Checks if the input text parameter does not contain any of the words within the words array. Use the “word” definition used in the above .contains description. The function should be case-insensitive. A function like this could be used for checking blacklisted words.
  ===========================================================*/

  describe('lacks', function() {
    it('should return true if input does not contain one or more words in the words array', function() {
      assert.equal(v.lacks("Visiting new places is fun.", ["coconut"]), true);
    });

    it('should return true if input does not contain one or more words in the words array', function() {
      assert.equal(v.lacks("Visiting new places is fun.", ["aces"]), true);
    });

    it('should return false if input contains one or more words in the words array', function() {
      assert.equal(v.lacks("Visiting new places is fun.", ["places"]), false);
    });

    it('should return false if input contains one or more words in the words array', function() {
      assert.equal(v.lacks('"Definitely," he said in a matter-of-fact tone.', ["matter", "definitely"]), false);
    });
  });

  /*===========================================================
  isComposedOf(input, strings)
  Checks that the input text parameter contains only strings found within the strings array. Note that this function doesn’t use a strong word definition the way .contains and .lacks does. The function should be case-insensitive.

  To understand it better take a close at the examples below. It is not necessary that the input contains all the strings found in the array but it is very much necessary that the input does not have a string that is not present in the strings array.
  ===========================================================*/

  describe('isComposedOf', function() {
    it('should return true if the input string contains only strings found within the strings array.', function() {
      assert.equal(v.isComposedOf("10184", ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]), true);
    });

    it('should return true if the input string contains only strings found within the strings array.', function() {
      assert.equal(v.isComposedOf("I am ready.", ["I", "I'm", "am", "not", "ready"]), true);
    });

    it('should be case-insensitive', function() {
      assert.equal(v.isComposedOf("I AM READY.", ["I", "I'm", "am", "not", "ready"]), true);
    });

    it('should return true if the input string contains only strings found within the strings array.', function() {
      assert.equal(v.isComposedOf("Iamnotready.", ["I", "I'm", "am", "not", "ready"]), true);
    });

    it('should return true if the input string contains only strings found within the strings array.', function() {
      assert.equal(v.isComposedOf("applesound", ["apples", "sound"]), true);
    });

    it('should return false if the input string contains strings other than those found within the strings array.', function() {
      assert.equal(v.isComposedOf("foobarbaz", ["foo", "bar"]), true);
    });

    it('should return true even if input has multiple instances of strings in array', function() {
      assert.equal(v.isComposedOf("fooamazonFOO", ['Foo', 'Amazon']), true);
    });
  });

  /*===========================================================
  isOfLengthOrLessThan(input, n)
  Checks if the input parameter’s character count is less than or equal to the n parameter.
  ===========================================================*/

  describe('isOfLengthOrLessThan', function() {
    it('should return true if the input’s character count is less than or equal to the n parameter', function() {
      assert.equal(v.isOfLengthOrLessThan("123456789", 20), true);
    });

    it('should return true if the input’s character count is less than or equal to the n parameter', function() {
      assert.equal(v.isOfLengthOrLessThan("AHHHH", 25), true);
    });

    it('should return true if the input’s character count is less than or equal to the n parameter', function() {
      assert.equal(v.isOfLengthOrLessThan("This could be a tweet!", 140), true);
    });

    it('should return false if the input’s character count is greater than the n parameter', function() {
      assert.equal(v.isOfLengthOrLessThan("123456789", 6), false);
    });
  });

  /*===========================================================
  isOfLengthOrGreaterThan(input, n)
  Checks if the input parameter’s character count is less than or equal to the n parameter.
  ===========================================================*/

  describe('isOfLengthOrGreaterThan', function() {
    it('should return true if the input’s character count is greater than or equal to the n parameter', function() {
      assert.equal(v.isOfLengthOrGreaterThan("123456789", 6), true);
    });

    it('should return false if the input’s character count is less than or equal to the n parameter', function() {
      assert.equal(v.isOfLengthOrGreaterThan("AHHHH", 25), false);
    });

    it('should return false if the input’s character count is less than or equal to the n parameter', function() {
      assert.equal(v.isOfLengthOrGreaterThan("This could be a tweet!", 140), false);
    });

    it('should return false if the input’s character count is less than the n parameter', function() {
      assert.equal(v.isOfLengthOrGreaterThan("123456789", 20), false);
    });
  });

  /*===========================================================
  lessWordsThan(input, n)
  Checks if the input parameter has a word count less than or equal to the n parameter.
  ===========================================================*/

  describe('lessWordsThan', function() {
    it('should return true if the input parameter has a word count less than or equal to the n parameter.', function() {
      assert.equal(v.lessWordsThan('I am a short sentence.', 10), true);
    });

    it('should return true if the input parameter has a word count less than or equal to the n parameter.', function() {
      assert.equal(v.lessWordsThan('I am a short sentence.', 5), true);
    });

    it('should return false if the input parameter has a word count greater than the n parameter.', function() {
      assert.equal(v.lessWordsThan('I am a short sentence.', 2), false);
    });

    it('should return true if the input parameter has a word count less than or equal to the n parameter.', function() {
      assert.equal(v.lessWordsThan('Iamashortsentence.', 5), true);
    });
  });

  /*===========================================================
  moreWordsThan(input, n)
  Checks if the input parameter has a word count greater than or equal to the n parameter.
  ===========================================================*/

  describe('moreWordsThan', function() {
    it('should return false if the input parameter has a word count less than the n parameter.', function() {
      assert.equal(v.lessWordsThan('I am a short sentence.', 10), false);
    });

    it('should return true if the input parameter has a word count greater than or equal to the n parameter.', function() {
      assert.equal(v.lessWordsThan('I am a short sentence.', 5), true);
    });

    it('should return true if the input parameter has a word count greater than or equal to the n parameter.', function() {
      assert.equal(v.lessWordsThan('I am a short sentence.', 2), true);
    });

    it('should return false if the input parameter has a word count less than the n parameter.', function() {
      assert.equal(v.lessWordsThan('Iamashortsentence.', 5), false);
    });
  });

  /*===========================================================
  isNumberBetween(input, floor, ceil)
  Checks that the input parameter matches all of the following:
  - input is greater than or equal to the floor parameter
  - input is less than or equal to the ceil parameter.
  ===========================================================*/

  describe('isNumberBetween', function() {
    it('should return true for an input that is between floor and ceiling parameters (inclusive)', function() {
      assert.equal(v.isNumberBetween(5, 2, 100), true);
    });

    it('should return true for an input that is between floor and ceiling parameters (inclusive)', function() {
      assert.equal(v.isNumberBetween(5, 5, 100), true);
    });

    it('should return true for an input that is between floor and ceiling parameters (inclusive)', function() {
      assert.equal(v.isNumberBetween(5, 1, 5), true);
    });

    it('should return false for an input that is not between floor and ceiling parameters (inclusive)', function() {
      assert.equal(v.isNumberBetween(-5, 1, 5), false);
    });

    it('should return false for an input that is not between floor and ceiling parameters (inclusive)', function() {
      assert.equal(v.isNumberBetween(100, 10, 50), false);
    });
  });

  /*===========================================================
  isAlphanumeric(input)
  Checks that the input parameter string is only composed of the following characters: a—z, A—Z, or 0—9. Unicode characters are intentionally disregarded.
  ===========================================================*/

  describe('isAlphanumeric', function() {
    it('should return true if string is alphanumeric', function() {
      assert.equal(v.isAlphanumeric("Hello"), true);
    });

    it('should return false if string contains punctuation', function() {
      assert.equal(v.isAlphanumeric("Hello."), false);
    });

    it('should return true for an empty string', function() {
      assert.equal(v.isAlphanumeric(""), true);
    });

    it('should return false if string is not alphanumeric', function() {
      assert.equal(v.isAlphanumeric("ArTᴉ$ʰARd"), false);
    });
  });

  /*===========================================================
  isCreditCard(input)
  Checks if the input parameter is a credit card or bank card number. A credit card number will be defined as four sets of four alphanumeric characters separated by hyphens (-), or a single string of alphanumeric characters (without hyphens).
   ===========================================================*/

  describe('isCreditCard', function() {
    it('should return true if is valid credit card with hyphens', function() {
      assert.equal(v.isCreditCard("1234-5678-9101-1121"), true);
    });

    it('should return true if is valid credit card without hyphens', function() {
      assert.equal(v.isCreditCard("1234567891011121"), true);
    });

    it('should return true if is valid credit card with mix of letters and numbers without hyphens', function() {
      assert.equal(v.isCreditCard("4427A693CF324D14"), true);
    });

    it('should return true if is valid credit card with mix of letters and numbers with hyphens', function() {
      assert.equal(v.isCreditCard("4427-A693-CF32-4D14"), true);
    });

    it('should return false if is not alphanumeric', function() {
      assert.equal(v.isCreditCard("----------------"), false);
    });

    it('should return false if is not a credit card number', function() {
      assert.equal(v.isCreditCard("testcard"), false);
    });

    it('should return false if is not long enough', function() {
      assert.equal(v.isCreditCard("4427A693CF32"), false);
    });
  });

  /*===========================================================
  isHex(input)
  Checks if the input string is a hexadecimal color, such as #3677bb. Hexadecimal colors are strings with a length of 7 (including the #), using the characters 0—9 and A—F. isHex should also work on shorthand hexadecimal colors, such as #333. The input must start with a # to be considered valid.
  ===========================================================*/

  describe('isHex', function() {
    it('should return true for valid hexadecimal color', function() {
      assert.equal(v.isHex("#abcdef"), true);
    });

    it('should return false for invalid hexadecimal color', function() {
      assert.equal(v.isHex("#bcdefg"), false);
    });

    it('should return false for input that is too long', function() {
      assert.equal(v.isHex("#1234a68"), false);
    });

    it('should return false if missing #', function() {
      assert.equal(v.isHex("bada55"), false);
    });

    it('should return false for more than one #', function() {
      assert.equal(v.isHex("#fafaf#"), false);
    });

    it('should return true for valid shorthand hexadecimal color', function() {
      assert.equal(v.isHex("#bbb"), true);
    });

    it('should return true for valid shorthand hexadecimal color', function() {
      assert.equal(v.isHex("#1cf"), true);
    });

    it('should return false for invalid shorthand hexadecimal color', function() {
      assert.equal(v.isHex("#g54"), false);
    });
  });

  /*===========================================================
  isRGB(input)
  Checks if the input string is an RGB color, such as rgb(200, 26, 131). An RGB color consists of:
  Three numbers between 0 and 255
  A comma between each number
  The three numbers should be contained within “rgb(” and “)“.
  ===========================================================*/

  describe('isRGB', function() {
    it('should return false if missing any of the required characters: rgv(0,0,0)', function() {
      assert.equal(v.isRGB("rgv(0,0,0)"), false);
    });

    it('should return false if missing any of the required characters: rgb(0,0,0', function() {
      assert.equal(v.isRGB("rgb(0,0,0"), false);
    });

    it('should return false if missing any of the required values: rgb(0,0)', function() {
      assert.equal(v.isRGB("rgb(0,0"), false);
    });

    it('should return true for rgb(0,0,0)', function() {
      assert.equal(v.isRGB("rgb(0,0,0)"), true);
    });

    it('should return true for valid input with leading whitespace: rgb(0, 0, 0)', function() {
      assert.equal(v.isRGB("rgb(0, 0, 0)"), true);
    });

    it('should return true for input within valid range: rgb(255, 255, 112)', function() {
      assert.equal(v.isRGB("rgb(255, 255, 112)"), true);
    });

    it('should return false for input specifying rgba format: rgba(0,0,0, 0)', function() {
      assert.equal(v.isRGB("rgba(0,0,0, 0)"), false);
    });

    it('should return false for input outside of valid range: rgb(0,300,0)', function() {
      assert.equal(v.isRGB("rgb(0,300,0)"), false);
    });

    it('should return false for input outside of valid range: rgb(0,-14,0)', function() {
      assert.equal(v.isRGB("rgb(0,-14,0)"), false);
    });

    it('should return false for input with fractional values: rgb(255, 0, 153.0)', function() {
      assert.equal(v.isRGB("rgb(255, 0, 153.0)"), false);
    });

    // optional robustness tests
    it('should return true for input with percentage values: rgb(100%, 0%, 60%)', function() {
      assert.equal(v.isRGB("rgb(100%, 0%, 60%)"), true);
    });

    it('should return false for input with mixed  values: rgb(100%, 0, 60%)', function() {
      assert.equal(v.isRGB("rgb(100%, 0, 60%)"), false);
    });

    it('should return true for input with no commas separating values: rgb(255 0 153)', function() {
      assert.equal(v.isRGB("rgb(255 0 153)"), true);
    });

  });

  /*===========================================================
  isHSL(input)
  Checks if the input string is an HSL color, such as hsl(122, 1, 1). An HSL color consists of:
  Three numbers:
  the first number, Hue, is between 0 and 360
  the second and third numbers, Saturation and Lightness, are between 0 and 1
  A comma between each number
  The three numbers should be contained within “hsl(” and “)“.
  ===========================================================*/

  describe('isHSL', function() {
    it('should return true for a valid hsl format with floating point numbers: hsl(270, 0.6, 0.7)', function() {
      assert.equal(v.isHSL("hsl(270, 0.6, 0.7)"), true);
    });

    it('should return true for a valid hsl format with percentages: hsl(270,60%,70%)', function() {
      assert.equal(v.isHSL("hsl(270,60%,70%)"), true);
    });

    it('should return false for input with missing required chars: hl(270, 0.6, 0.7)', function() {
      assert.equal(v.isHSL("hl(270, 0.6, 0.7)"), false);
    });

    it('should return false for input with incorrect required chars: hxl(270, 0.6, 0.7)', function() {
      assert.equal(v.isHSL("hxl(270, 0.6, 0.7)"), false);
    });

    it('should return false for input with missing required chars: hsl270, 0.6, 0.7)', function() {
      assert.equal(v.isHSL("hxl(270, 0.6, 0.7)"), false);
    });

    it('should return false for input that is missing required values: hsl(270, 0.6)', function() {
      assert.equal(v.isHSL("hsl(270, 0.6)"), false);
    });

    it('should return false for a out of range input: hsl(400,0,1)', function() {
      assert.equal(v.isHSL("hsl(400,0,1)"), false);
    });

    it('should return false for a out of range input: hsl(200,3,5)', function() {
      assert.equal(v.isHSL("hsl(200,3,5)"), false);
    });

    it('should return false for a out of range input: hsl(-135,0,5)', function() {
      assert.equal(v.isHSL("hsl(-135,0,5)"), false);
    });

    // optional robustness tests
    it('should return true for a valid hsl format with degs: hsl(270deg, 60%, 70%)', function() {
      assert.equal(v.isHSL("hsl(270deg, 60%, 70%)"), true);
    });

    it('should return true for a valid hsl format with rads: hsl(4.71239rad, 0.6, 0.7)', function() {
      assert.equal(v.isHSL("hsl(4.71239rad, 60%, 70%)"), true);
    });

    it('should return true for a valid hsl format with turn: hsl(.75turn, 60%, 70%)', function() {
      assert.equal(v.isHSL("hsl(.75turn, 60%, 70%)"), true);
    });
  });

  /* ===========================================================
  isColor(input)
  Checks if the input parameter is a hex, RGB, or HSL color type.
  =========================================================== */

  describe('isColor', function() {
    it('should return true for valid hex: #ccccff', function() {
      assert.equal(v.isColor("#ccccff"), true);
    });

    it('should return true for valid hex: #363', function() {
      assert.equal(v.isColor("#363"), true);
    });

    it('should return false for invalid hex: #ccccxf', function() {
      assert.equal(v.isColor("#ccccxf"), false);
    });

    it('should return false for invalid hex: abc345', function() {
      assert.equal(v.isColor("abc345"), false);
    });

    it('should return true for valid rgb: rgb(255,255,200)', function() {
      assert.equal(v.isColor("rgb(255,255,200)"), true);
    });

    it('should return false for invalid hex: rgb(275,255,200)', function() {
      assert.equal(v.isColor("rgb(275,255,200)"), false);
    });

    it('should return true for valid hsl: hsl(46,0.66,0.21)', function() {
      assert.equal(v.isColor("hsl(46,0.66,0.21)"), true);
    });

    it('should return false for invalid hsl: hsl(255,255,255)', function() {
      assert.equal(v.isColor("hsl(255,255,255)"), false);
    });
  });



  // ****************************** //
  // end of validation functions
  // ****************************** //
});