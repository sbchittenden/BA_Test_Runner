let utilities = {
    // 1 -- by function iterates through array (arr) and calls bsck function (log) at
    // each interval specified by parameter n, diplay the value at that array index.
    by: function(arr, n, log) {
        try {
            // Check if first parameter is an array
            if (!arr instanceof Array)
                throw "First parameter must be of type array.";
            else if (typeof n !== "number")
                // Check if second paramater is a number
                throw "Second parameter must be of type number.";
            else if (typeof log !== "function")
                // Check if third paramater is a function
                throw "Third parameter must be function.";
            else {
                //  iterate through array
                for (var j = 0; j < arr.length; j++) {
                    if (
                        (j + 1) % n === 0 // find if index is a multiple of n
                    )
                        log(arr[j]); // call log function
                }
            }
        } catch (e) {
            console.log("Error occurred: " + e); // something happend, let user know
        }
    },

    // 2 -- keys function lists the properties (keys) of an object.
    // List the properties of the passed parameter object
    keys: function(object) {
        try {
            // Check if passed parameter is of type object
            if (typeof object !== "object")
                throw "Passed parameter must be of type object.";
            else {
                keys = []; // create array to hold property names
                for (let k in object) // iterate through passed object to read its keys
                    keys.push(k); // add current key (property) to array

                console.log(keys); // set result to console
            }
        } catch (e) {
            console.log("Error occurred: " + e); // something happend, let user know
        }
    },

    // 3 -- values function displays the value for each property (key) in an object.
    values: function(obj) {
        try {
            let tempArr = [];
            if (!obj instanceof Object) throw "Parameter must be an object.";
            else {
                for (o in obj) // loop through object's keys
                    tempArr.push(obj[o]); // add key value to temporaty array.
            }
            console.log(tempArr); // list values to console
        } catch (e) {
            console.log("Error occurred: " + e); // something happend, let user know
        }
    },

    // 4 -- pairs function creates an array of keys and corresponding values
    // present in an object.
    pairs: function(object) {
        try {
            // Check if passed parameter is of type object
            if (typeof object !== "object")
                throw "Passed parameter must be of type object.";
            else {
                let temp = []; // create array to store temporary key & values
                for (let p in object) { // iterate though object
                    temp.push(p); // add key name to array
                    temp.push(object[p]); // add key value to array
                }
                console.log(temp); // list result to console
            }
        } catch (e) {
            console.log("Error occurred: " + e); // something happend, let user know
        }
    },

    // 5 -- shuffle function gets an array with values and shuffles the values
    // returning the same array with the values listed in an random position.
    shuffle: function(array) {
        try {
            let temp = [];
            let randNumber;
            // Check if first parameter is an instance of an Array.
            if (!array instanceof Array)
                throw "Parameter is not an instance of an array.";
            else var counter = array.length; // set up a counter
            for (counter; counter > 0; counter--) {
                // loop through array decreasing counter with each iteration
                randNumber = Math.floor(Math.random() * counter); // Find a random number within less or equal to number of items in array.
                temp.push(array[randNumber]); //  add value from original array to our temp array
                array.splice(randNumber, 1); //  remove index from original array
            }
            console.log(temp);
        } catch (e) {
            console.log("Error occurred: " + e); // something happend, let user know
        }
    },

    // 6 -- pluralize function returns the plusral of a word, or a value input
    // by the user depending on the existance of the third parameters
    pluralize: function(n, word, pluralWord) {
        let emptyPluraWord = typeof pluralWord === "undefined";
        try {
            let returnWord = "";
            if (typeof n !== "number")
                throw "First parameter must be of type number";
            else if (typeof word !== "string")
                throw "Second paramater must be of type string.";
            else {
                // Check value of n to assign corresponding return value.
                // n === 1 returns the single value of word
                if (n === 1 && emptyPluraWord) returnWord = word;
                else if (n !== 1 && emptyPluraWord)
                    // n !== 1 returns the plural form of word
                    returnWord = word + "s";
                else if (n !== 1 && !emptyPluraWord)
                    // n !== 1 and a passing a value on third parameter returns that value.
                    returnWord = pluralWord;
            }
            console.log(returnWord);
        } catch (e) {
            console.log("Error occurred: " + e); // something happend, let user know;
        }
    },

    // 7 -- toDash function converts a camelCase string into a dashed (-) string.
    toDash: function(str) {
        let tempStr = "";
        let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        try {
            if (typeof str !== "string")
                throw "Parameter must be of type string.";
            else if (upperCaseLetters.indexOf(str.substr(0, 1)) >= 0)
                throw "Parameter is not of camel cased.";
            else if (str.indexOf(" ") > 0)
                throw "Parameter must not contain spaces.";
            else {
                str = str.trim();
                for (let i = 0; i < str.length; i++) {
                    // build tempString adding "-" before upper case letters found
                    // in str and converting upper to lower case letters
                    tempStr += upperCaseLetters.indexOf(str.substr(i, 1)) >= 0
                        ? "-" + str.substr(i, 1).toLowerCase()
                        : str.substr(i, 1);
                }
            }
            console.log(tempStr);
        } catch (e) {
            console.log("Error occurred: " + e); // something happend, let user know;
        }
    },

    // 8 -- toCamel function converts a dashed string into a camelCase string.
    toCamel: function(str) {
        let tempStr = "";

        try {
            if (typeof str !== "string")
                throw "Parameter must be of type string.";
            else if (str.indexOf(" ") > 0)
                throw "Parameter must not contain spaces.";
            else {
                str = str.trim(); // remove existing blank spaces at both ends of str
                let flag = false; // boolean to flag the existiance af a special symbol ("-")

                // iterate through each character in str
                for (let i = 0; i < str.length; i++) {
                    if (str.substr(i, 1) === "-") {
                        // if "-" is found, set a flag, do not append anything to tempStr.
                        flag = true;
                    } else if (flag) {
                        tempStr += str.substr(i, 1).toUpperCase(); // If flag, then convert current character to upper.
                        flag = false; // and add it to tempStr, then reset flag to false.
                    } else tempStr += str.substr(i, 1).toLowerCase(); // add current character to tempStr
                }
            }
            console.log(tempStr);
        } catch (e) {
            console.log("Error occurred: " + e); // something happend, let user know;
        }
    },

    // 9 -- has function loops through an array searching if a property values is
    // has the same valaue as the second parameter (search).
    has: function(obj, search) {
        let hasValue = false;
        try {
            if (typeof obj !== "object")
                throw "First parameter must be of type object";
            else if (typeof search === undefined)
                throw "Missing second parameter";
            else {
                for (let p in obj) {
                    // iterate through object
                    hasValue = obj[p] === search; // check if current key value equals parameter search
                    if (hasValue) break; // if a match is found, stop searching.
                }
            }
            console.log(hasValue);
        } catch (e) {
            console.log("Error occurred: " + e); // something happend, let user know;
        }
    },

    // 10 -- function pick returns an object with the pairs (key, value) listed in
    // second parameter (array keys).
    pick: function(obj, keys) {
        let tempObj = {};
        try {
            if (typeof obj !== "object")
                throw "First parameter must be of type object";
            else if (keys === undefined || !keys instanceof Array)
                throw "Missing or invalid second parameter. Must be of type array";
            else {
                for (
                    let i = 0;
                    i < keys.length;
                    i++ // loop trough object properties
                ) {
                    for (let p in obj) { // check each property
                        if (obj.hasOwnProperty(keys[i])) {
                            // check if current property name equals
                            // current item in array. If it does, add
                            tempObj[keys[i]] = obj[keys[i]]; // property name/value to temporary array.
                        }
                    }
                }
            }
            console.log(tempObj);
            return tempObj;
        } catch (e) {
            console.log("Error occurred: " + e); // something happend, let user know;
        }
    },

    // 11 -- withoutSymbols function removes non-alphanumeric characters from an input
    // string.
    withoutSymbols: function(input) {
        let tempStr = "";
        try {
            if (typeof input !== "string")
                throw "Parameter must be of type string.";
            else {
                let alphaNumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 "; // alphanumeric characters template
                for (let i = 0; i < input.length; i++) {
                    // Loop through input string
                    tempStr += alphaNumeric.indexOf(
                        input.substr(i, 1).toUpperCase()
                    ) >= 0
                        ? input.substr(i, 1)
                        : ""; // if current character (non-case sensitive)
                    // is matched, added it to temporary string.
                }
            }
            console.log(tempStr);
        } catch (e) {
            console.log("Error occurred: " + e); // something happend, let user know;
        }
    },

    // 12 -- countWords countWords function counts the number of words contained in an input string.
    countWords: function(input) {
        let tempInput = ""; // Will hold the value of input once it has been cleaned.
        let tempArray = []; // will hold a word or blannk at each index
        let count = 0;
        let invalidCharacters = "~`!@#$%^&*()_-+={}[]|:;'<>,.?/\"\\"; // non valid characters in a word.
        try {
            if (typeof input !== "string")
                throw "Parameter must be of type string";
            else {
                for (
                    let i = 0;
                    i < input.length;
                    i++ // loop through input string
                )
                    // remove invalid characters from input and store them in tempInput
                    tempInput += invalidCharacters.indexOf(
                        input.substr(i, 1)
                    ) >= 0
                        ? " "
                        : input.substr(i, 1);

                tempArray = tempInput.split(" "); // split tempInput at each blank character

                for (
                    let w = 0;
                    w < tempArray.length;
                    w++ //  count the number of words by eleminating the
                )
                    count += tempArray[w].trim() !== "" ? 1 : 0; //  blank spaces.
            }
        } catch (e) {
            console.log("Error occurred: " + e); // something happend, let user know;
        }
        console.log(count);
    }
};
