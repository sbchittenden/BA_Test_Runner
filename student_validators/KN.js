/* 
Project Assignment 1: Create JavaScript Validation Functions

All functions that start with “is” should return a Boolean type of true or false. If a necessary parameter is missing, throw an error and provide a detailed error description. You do not need to define the functions in the listed order. Do not use Regular Expressions in your answers.
*/

// (function(window){

 /* The contents of your JS file */

  var validator = {};

    validator.isEmailAddress = function(input) {
    /* 
    Checks if the input parameter is an email address, consisting of three parts: An email address consists of two strings combined by an @ symbol. 
    */

    if (!input) throw "Missing Parameter in isEmailAddress function: 'input'."
    var atSignIndex = input.indexOf("@");
    // @ sign missing:
    if(atSignIndex === -1) {
      console.log("@ sign missing");
      return false;
    } else {
        //too many @ signs:
        var count = 0;
        for(var i=0; i<input.length; i++) {
          if(input[i] === "@") {
            count++;
            if(count > 1) {
              console.log("too many @'s");
              return false;
            }
          }
        }
    }
    
    //split email into 3 parts:
    var emailName = input.slice(0, atSignIndex);
    var emailDomain = input.slice(atSignIndex+1);
    if(emailName ==="" || emailDomain ==="") {
      console.log("email or domain missing");
      return false;
    }
    return true;
  }; //end isEmailAddress()


  
  //Checks if the input parameter is a valid phone number for your country.
    
  validator.isPhoneNumber = function(input) {
  
    if (!input) throw "Missing Parameter in isPhoneNumber function: 'input'.";
    //check for valid length, including all special characters
    if(input.length < 14) {
      return false;
    }

    //check for correct number format
    var areaCode = input.slice(1,4);
    var prefix = input.slice(6,9);
    var postfix = input.slice(10, 14);
    var whole = areaCode + prefix + postfix;

    for(var i=0; i<whole.length; i++) {
      if(isNaN(parseInt(whole.charAt(i) ))) {
        return false;
      }
    }

    if(input.charAt(0) !="(" || input.charAt(4) !=")" || input.charAt(5) != " " || input.charAt(9) != "-") {
      return false;
    }
    return true;
  };

//code to test isPhoneNumber():
/*
var phoneNumber = "(432) 555-2698";
if(validator.isPhoneNumber(phoneNumber) === false) {
  console.log("Error! Phone number must be in the format: '(xxx) xxx-xxxx'");
} else {
  console.log("Phone number " + phoneNumber + " is a valid number.")
}
*/

  validator.isDate = function(input) {
    /*
    Checks if the input parameter text is a valid date. For your purposes, a valid date is any string that can be turned into a JavaScript Date Object.
    */
  };

  validator.isBeforeDate = function(input, reference) {
    /*
    Checks if the input parameter is a date that comes after the reference date. Both the input and the reference can be strings or Date Objects. This function relies on two valid dates; if two are not found, it should throw a new error.
    */
  }





// })(window);