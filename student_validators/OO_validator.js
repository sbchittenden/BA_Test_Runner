// (function (window) {
var validator = {};

validator.isEmailAddress = function(input) {
    try {
        if (!input) throw "No Input";
    } catch (err) {
        return `Please try again with a valid email`;
    }

    let atPosition = input.indexOf("@");
    console.log(atPosition);
    if (input.includes("@") && input.includes(".com") && atPosition !== 0) {
        return true;
    }
    return false;
};

validator.isPhoneNumber = function(input) {
    try {
        if (!input) throw "No Input";
    } catch (err) {
        return `Please provide a valid phone number`;
    }

    input = String(input);
    input = input.padStart(13, "234");

    return input.length <= 13;
};
/*
validator.isBeforeDate = function(input, reference) {
    input = new Date(input);
    reference = new Date(reference);

    try {
        if (typeof input !== "object" || typeof reference !== "object")
            throw "Invalid Input or Reference";
    } catch (err) {
        return `Please provide valid inputs`;
    }

    // return input > reference;
    return input < reference;
};

validator.isAfterDate = function(input, reference) {
    input = new Date(input);
    reference = new Date(reference);

    try {
        if (typeof input !== "object" || typeof reference !== "object")
            throw "Invalid Input or Reference";
    } catch (err) {
        return `Please provide valid inputs`;
    }

    return input > reference;
};

validator.isBeforeToday = function(input) {
    input = new Date(input);

    try {
        if (typeof input !== "object") throw "Invalid Input";
    } catch (err) {
        return `Please provide a valid input`;
    }

    return input < Date.now();
};

validator.isAfterToday = function(input) {
    input = new Date(input);

    try {
        if (typeof input !== "object") throw "Invalid Input";
    } catch (err) {
        return `Please provide a valid input`;
    }

    return input > Date.now();
};
*/
validator.isBeforeDate = function(input, reference) {
    input = new Date(input);
    reference = new Date(reference);

    try {
        if (typeof input !== "object" || typeof reference !== "object")
            throw "Invalid Input or Reference";
    } catch (err) {
        return `Please provide valid inputs`;
    }

    return input > reference;
};

validator.isAfterDate = function(input, reference) {
    input = new Date(input);
    reference = new Date(reference);

    try {
        if (typeof input !== "object" || typeof reference !== "object")
            throw "Invalid Input or Reference";
    } catch (err) {
        return `Please provide valid inputs`;
    }

    return input < reference;
};

validator.isBeforeToday = function(input) {
    input = new Date(input);

    try {
        if (typeof input !== "object") throw "Invalid Input";
    } catch (err) {
        return `Please provide a valid input`;
    }

    return input > Date.now();
};

validator.isAfterToday = function(input) {
    input = new Date(input);

    try {
        if (typeof input !== "object") throw "Invalid Input";
    } catch (err) {
        return `Please provide a valid input`;
    }

    return input < Date.now();
};

// ==================
validator.isEmpty = function(input) {
    try {
        if (input === null) {
            throw `Null Input Provided`;
        }
    } catch (err) {
        return false;
    }

    return input.length == 0 || !input.trim();
};

validator.isTrimmed = function(input) {
    try {
        if (typeof input != "string" || input.length == 0)
            throw "Wrong type of input or input is empty";
    } catch (err) {
        return `Please try again with a string`;
    }

    input = input.split(" ");
    let space = " ", result = true, count = 0;
    for (let char1 = 0; char1 < input.length; char1++) {
        if (input[char1] == "" && input[char1] === input[char1 + 1]) {
            result = false;
        }
    }

    return result;
};

validator.contains = function(input, words) {
    try {
        if (!input || words.length == 0)
            throw "Invalid Input or words is empty";
    } catch (err) {
        return `Please provide valid input or add a word to check for`;
    }

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
    ];
    let count = 0;

    for (let index = 0; index < input.length; index++) {
        if (!allowed.includes(input[index])) {
            input = input.replace(input[index], " ");
        }
    }

    input = input.split(" ");

    for (let i = 0; i < input.length; i++) {
        for (let c = 0; c < 3; c++) {
            if (input[i] == " " || input[i] == "") {
                input.splice(i, 1);
            }
        }
    }

    for (word in input) {
        for (word2 in words) {
            if (input[word] == words[word2]) return true;
        }
    }
    return false;
};

validator.lacks = function(input, words) {
    try {
        if (!input || words.length == 0)
            throw "Invalid Input or words is empty";
    } catch (err) {
        return `Please provide valid input or add a word to check for`;
    }

    let count = 0;
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
    ];

    for (let index = 0; index < input.length; index++) {
        if (!allowed.includes(input[index])) {
            input = input.replace(input[index], " ");
        }
    }

    input = input.split(" ");

    for (let i = 0; i < input.length; i++) {
        for (let c = 0; c < 3; c++) {
            if (input[i] == " " || input[i] == "") {
                input.splice(i, 1);
            }
        }
    }

    for (word in input) {
        for (word2 in words) {
            if (input[word] == words[word2]) count++;
        }
    }
    return count == input.length;
};

validator.isComposedOf = function(input, strings) {
    input = input.toLowerCase();

    for (let i = 0; i < strings.length; i++) {
        let stringsLowerCase = strings[i].toLowerCase();
        while (input.indexOf(stringsLowerCase) > -1) {
            input = input.replace(stringsLowerCase, "");
        }
    }

    if (input === "") {
        return true;
    } else {
        return false;
    }
};

validator.isOfLengthOrLessThan = function(input, n) {
    return input.length <= n;
};

validator.isOfLengthOrGreaterThan = function(input, n) {
    return input.length >= n;
};

validator.lessWordsThan = function(input, n) {
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
    ];
    let count = 0;

    for (let index = 0; index < input.length; index++) {
        if (!allowed.includes(input[index])) {
            input = input.replace(input[index], " ");
        }
    }

    input = input.split(" ");

    for (let i = 0; i < input.length; i++) {
        for (let c = 0; c < 3; c++) {
            if (input[i] == " " || input[i] == "") {
                input.splice(i, 1);
            }
        }
    }
    return input.length <= n;
};

validator.moreWordsThan = function(input, n) {
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
    ];
    let count = 0;

    for (let index = 0; index < input.length; index++) {
        if (!allowed.includes(input[index])) {
            input = input.replace(input[index], " ");
        }
    }

    input = input.split(" ");

    for (let i = 0; i < input.length; i++) {
        for (let c = 0; c < 3; c++) {
            if (input[i] == " " || input[i] == "") {
                input.splice(i, 1);
            }
        }
    }
    return input.length >= n;
};

validator.isNumberBetween = function(input, floor, ceil) {
    return input >= floor && input <= ceil;
};

validator.isAlphanumeric = function(input) {
    let char, index = 0;
    for (; index < input.length; index++) {
        char = input.charCodeAt(index);
        if (
            !(char > 47 && char < 58) &&
            !(char > 64 && char < 91) &&
            !(char > 96 && char < 123)
        ) {
            return false;
        }
    }
    return true;
};

validator.isCreditCard = function(input) {
    if (input.length < 16 || input.length > 19) {
        throw "Invalid Card";
    }

    input = input.toLowerCase().split("");

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "-") {
            input.splice(i, 1);
        }
    }

    let count = 0;
    let allowed = [
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
        "-",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
    ];
    for (i = 0; i < input.length; i++) {
        if (allowed.includes(input[i])) {
            count++;
        }
    }
    return count == 16;
};

validator.isHex = function(input) {
    if (input[0] !== "#" || input.length > 7 || input.length < 4)
        throw "Invalid Input";
    let allowed = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "#",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
    ];
    let count = 0;
    input = input.toLowerCase();
    for (i in input) {
        if (allowed.includes(input[i])) {
            count++;
        }
    }
    return count == 4 || count == 7;
};

validator.isRGB = function(input) {
    if (!input.startsWith("rgb(") && !input.endsWith(")"))
        throw "Invalid Input";
    input = input.toLowerCase();
    input = input.replace("rgb(", "").replace(")", "");

    let firstComma = input.indexOf(",");
    let lastComma = input.lastIndexOf(",");
    let end = input.length - 1;
    let firstNumber = Number(input.slice(0, firstComma));
    let middleNumber = Number(input.slice(firstComma + 1, lastComma));
    let lastNumber = Number(input.slice(lastComma + 1, end));

    return (
        firstNumber >= 0 &&
        firstNumber <= 255 &&
        (middleNumber >= 0 && middleNumber <= 255) &&
        (lastNumber >= 0 && lastNumber <= 255)
    );
};

validator.isHSL = function(input) {
    if (!input.startsWith("hsl(") && !input.endsWith(")"))
        throw "Invalid Input";
    input = input.toLowerCase();
    input = input.replace("hsl(", "").replace(")", "");

    let firstComma = input.indexOf(",");
    let lastComma = input.lastIndexOf(",");
    let end = input.length - 1;
    let firstNumber = Number(input.slice(0, firstComma));
    let middleNumber = Number(input.slice(firstComma + 1, lastComma));
    let lastNumber = Number(input.slice(lastComma + 1, end));

    return (
        firstNumber >= 0 &&
        firstNumber <= 360 &&
        (middleNumber >= 0 && middleNumber <= 1) &&
        (lastNumber >= 0 && lastNumber <= 1)
    );
};

validator.isColor = function(arg) {
    let value = arg;
    let value2 = arg;

    if (isHex(arg)) {
        return true;
    } else if (isRGB(value)) {
        return true;
    } else if (isHSL(value2)) {
        return true;
    } else return false;

    function isHex(input) {
        try {
            if (input[0] !== "#" || input.length > 7 || input.length < 4)
                throw "Invalid Input";
        } catch (err) {
            isRGB(input);
        }
        let allowed = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "#",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
        ];
        let count = 0;
        input = input.toLowerCase();
        for (i in input) {
            if (allowed.includes(input[i])) {
                count++;
            }
        }
        return count == 4 || count == 7;
    }

    function isRGB(input) {
        try {
            if (!input.startsWith("rgb(") && !input.endsWith(")"))
                throw "Invalid Input";
        } catch (err) {
            isHSL(input);
        }
        input = input.toLowerCase();
        input = input.replace("rgb(", "").replace(")", "");

        let firstComma = input.indexOf(",");
        let lastComma = input.lastIndexOf(",");
        let end = input.length - 1;
        let firstNumber = Number(input.slice(0, firstComma));
        let middleNumber = Number(input.slice(firstComma + 1, lastComma));
        let lastNumber = Number(input.slice(lastComma + 1, end));

        return (
            firstNumber >= 0 &&
            firstNumber <= 255 &&
            (middleNumber >= 0 && middleNumber <= 255) &&
            (lastNumber >= 0 && lastNumber <= 255)
        );
    }

    function isHSL(input) {
        try {
            if (!input.startsWith("hsl(") && !input.endsWith(")"))
                throw "Invalid Input";
        } catch (err) {
            return false;
        }
        input = input.toLowerCase();
        input = input.replace("hsl(", "").replace(")", "");

        let firstComma = input.indexOf(",");
        let lastComma = input.lastIndexOf(",");
        let end = input.length - 1;
        let firstNumber = Number(input.slice(0, firstComma));
        let middleNumber = Number(input.slice(firstComma + 1, lastComma));
        let lastNumber = Number(input.slice(lastComma + 1, end));

        return (
            firstNumber >= 0 &&
            firstNumber <= 360 &&
            (middleNumber >= 0 && middleNumber <= 1) &&
            (lastNumber >= 0 && lastNumber <= 1)
        );
    }
};

// })(window);
