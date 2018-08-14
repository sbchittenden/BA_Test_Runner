// (function(window) {
let utilities = {};

utilities.by = function(list, n, callback) {
    for (times = n - 1; times < list.length; times += n) {
        callback(list[times]);
    }
};

utilities.keys = function(object) {
    let keys = []; // an array to hold the keys
    for (let key in object) {
        // for every key in object
        keys.push(key); // add that key to the 'keys' array
    }
    return keys; // return the final array of keys
};

utilities.values = function(object) {
    let values = []; // an array to hold the values
    for (let value in object) {
        // for every value in object
        if (object.hasOwnProperty(value)) {
            // if that value exists inside object
            values.push(object[value]); // add that value to the 'values' array
        }
    }
    return values; // return the final array of values
};

utilities.pairs = function(object) {
    let pairs = []; // an array to hold the key value pairs
    for (let key in object) {
        // for every key in object
        if (object.hasOwnProperty(key)) {
            // if the key has a value
            pairs.push(key); // add the key to the 'pairs' array
            pairs.push(object[key]); // add the value to the 'pairs' array
        }
    }
    return pairs; // return the final array of key value pairs
};

utilities.pluralize = function(n, word, pluralWorld) {
    switch (n) { // use a switch to determine if the n parameter is equal to '1'
        case "1":
            return word; // if it is, return 'word' as is else keep going
        default:
            if (pluralWorld) return pluralWorld; // if pluralWorld is provided, return pluralWorld as is
            return word + "s"; // if pluralWorld isn't provided, add an 's' to 'word' and return it
    }
};

utilities.toDash = function(str) {
    let upperCase = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ]; // an array of uppercase characters

    for (let char = 0; char < str.length; char++) {
        // loop through str
        if (upperCase.includes(str[char])) {
            // if current character is found in the upperCase array
            let upper = str[char].toLowerCase(); // convert that character to lowercase
            str = str.replace(str[char], "-" + upper); // remove the uppercase character and replace it with '-' and the lowercase version of the character
        }
    }
    return str; // return the processed string
};

utilities.toCamel = function(str) {
    let upperCase = ["-"]; // an array containing a single entry of the 'dash' character

    for (let char = 0; char < str.length; char++) {
        // loop through str
        if (upperCase.includes(str[char])) {
            // if the current character is == '-'
            let upper = str[char + 1].toUpperCase(); // convert the next character to uppercase
            str = str.replace(str[char], "").replace(str[char + 1], upper); // remove the dash and replace it with the uppercase version of the next character
        }
    }
    return str; // return the processed string
};

utilities.has = function(obj, search) {
    let allValues = values(obj); // an array containing all the values in obj

    return allValues.includes(search); // return true or false depending on if the value of 'search' is present in the array of all the values in obj

    /* reused function to get values of an object from above. Explanation already given.*/
    function values(object) {
        let values = [];
        for (let value in object) {
            if (object.hasOwnProperty(value)) {
                values.push(object[value]);
            }
        }
        return values;
    }
};

utilities.pick = function(obj, keys) {
    let objKeys = keysFunction(obj); // an array of all the keys in obj
    let objValues = valuesFunction(obj); // an array of all the values in obj
    let finalPair = {}; // an empty object. Key value pairs will be added to it
    let matchedKey; // an undefined variable representing every key present in both 'keys' and 'obj'

    for (let i = 0; i < objKeys.length; i++) {
        // loop through the array of keys in 'obj'
        for (let j = 0; j < keys.length; j++) {
            // loop through 'keys'
            if (objKeys[i] == keys[j]) {
                // if a match is found
                matchedKey = objKeys[i]; // assign that key to matchedKey
                finalPair[matchedKey] = objValues[i]; // add the matched key value pair to finalPair
            }
        }
    }

    return finalPair; // return the object containing all matched key value pairs

    /* These are the functions used in extracting the keys and values from obj. Explanation already given above*/
    function keysFunction(object) {
        let keys = [];
        for (let key in object) {
            keys.push(key);
        }

        return keys;
    }
    function valuesFunction(object) {
        let values = [];
        for (let value in object) {
            if (object.hasOwnProperty(value)) {
                values.push(object[value]);
            }
        }
        return values;
    }
};

utilities.withoutSymbols = function(input) {
    let allowed = [
        " ",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        0
    ]; // an array of all valid alphanumeric characters including space
    let length = input.length; // length of input
    for (let i = 0; i < length; i++) {
        // loop through input
        for (let j = 0; j < 3; j++) {
            // this is a workaround for a bug where not all the non-alphanumeric characters were being removed on the first go. This essentially goes through 'input' twice removing all non-alphanumeric characters
            if (!allowed.includes(input[i])) {
                // if the current character is not found in the array of valid characters
                input = input.replace(input[i], ""); // replace the character with nothing i.e delete the character
            }
        }
    }
    return input; // return the processed input
};

utilities.countWords = function(input) {
    let allowed = [
        " ",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        0
    ]; // array of all valid alphanumeric characters

    for (let index = 0; index < input.length; index++) {
        // loop through input
        if (!allowed.includes(input[index])) {
            // if current character is not valid
            input = input.replace(input[index], " "); // replace it with a space
        }
    }

    input = input.trimRight(); // to remove all spaces at the end in case there was a non-valid character at the end of input
    input = input.split(" "); // turn input into an array using space as the delimiter
    return input.length; // return the length of input. This works because by this point, only valid words are left in input
};
// })(window);
