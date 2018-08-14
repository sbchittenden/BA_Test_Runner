var utilities = (function(window) {
    var utilities = {};

    utilities.isArray =
        Array.isArray ||
        function(arr) {
            return Object.prototype.toString.call(arr) === "[object Array]";
        };

    utilities.by = function(list, n, callback) {
        for (var i = n - 1; i < list.length; i = n + i) {
            callback(list[i]);
        }
    };

    utilities.keys = function(object) {
        var arrKeys = [];
        if (typeof object != "object") {
            throw "This item is not an object.";
        }
        var string = JSON.stringify(object);
        var arr = string.split(",");
        for (var i = 0; i < arr.length; i++) {
            var tempArr = arr[i].split(":");
            arrKeys[i] = tempArr[0];
        }
        for (var i in arrKeys) {
            for (var j = 0; j < arrKeys[i].length; j++) {
                if (
                    arrKeys[i].charAt(j) == '"' ||
                    arrKeys[i].charAt(j) == "{" ||
                    arrKeys[i].charAt(j) == "}"
                ) {
                    console.log(arrKeys[i].slice(0, j));
                    arrKeys[i] =
                        arrKeys[i].slice(0, j) +
                        arrKeys[i].slice(j + 1, arrKeys[i].length - 1);
                }
            }
        }
        arrKeys[0] = arrKeys[0].slice(1);

        return arrKeys;
    };

    utilities.values = function(object) {
        var arrValues = [];
        if (typeof object != "object") {
            throw "This item is not an object.";
        }
        var string = JSON.stringify(object);
        var arr = string.split(",");
        for (var i = 0; i < arr.length; i++) {
            var tempArr = arr[i].split(":");
            arrValues[i] = tempArr[1];
        }
        for (var i in arrValues) {
            for (var j = 0; j < arrValues[i].length; j++) {
                if (
                    arrValues[i].charAt(j) == '"' ||
                    arrValues[i].charAt(j) == "{" ||
                    arrValues[i].charAt(j) == "}"
                ) {
                    console.log(arrValues[i].slice(0, j));
                    arrValues[i] =
                        arrValues[i].slice(0, j) +
                        arrValues[i].slice(j + 1, arrValues[i].length - 1);
                }
            }
        }
        return arrValues;
    };

    utilities.pairs = function(object) {
        var arrBoth = [];
        if (typeof object != "object") {
            throw "This item is not an object.";
        }
        var arrKeys = utilities.keys(object);
        var arrValues = utilities.values(object);
        var j = 0;
        for (var i = 0; i < arrKeys.length * 2; i += 2) {
            arrBoth[i] = arrKeys[j];
            arrBoth[i + 1] = arrValues[j];
            j++;
        }
        return arrBoth;
    };

    utilities.shuffle = function(array) {
        var newArray = new Array(array.length);
        for (var i = 0; i < array.length; i++) {
            var rand = Math.floor(Math.random() * array.length);
            if (newArray[rand] == undefined) {
                newArray[rand] = array[i];
            } else {
                i--;
            }
        }

        return newArray;
    };

    utilities.pluralize = function(n, word, pluralWord) {
        if (pluralWord != undefined) {
            return pluralWord;
        }
        if (n == 1) {
            return word;
        } else {
            word = word + "s";
        }
        return word;
    };

    utilities.toDash = function(str) {
        while (str.toLowerCase() != str) {
            for (var i = 0; i < str.length; i++) {
                if (str.charAt(i) == str.charAt(i).toUpperCase()) {
                    str =
                        str.slice(0, i) +
                        "-" +
                        str.charAt(i).toLowerCase() +
                        str.slice(i + 1, str.length);
                }
            }
        }
        return str;
    };

    utilities.toCamel = function(str) {
        var arr = str.split("-");
        var string = arr[0];
        for (var i = 1; i < arr.length; i++) {
            arr[i] =
                arr[i].charAt(0).toUpperCase() + arr[i].slice(1, arr[i].length);
            string += arr[i];
        }
        return string;
    };

    utilities.has = function(obj, search) {
        var bool = false;
        var arrValues = utilities.values(obj);
        for (var i in arrValues) {
            if (arrValues[i] == search) {
                bool = true;
            }
        }
        return bool;
    };

    utilities.pick = function(obj, keys) {
        var string = "{";
        var arrAllKeys = utilities.keys(obj);
        var arrAllValues = utilities.values(obj);
        for (var i = 0; i < arrAllKeys.length; i++) {
            for (var j = 0; j < keys.length; j++) {
                if (keys[j] == arrAllKeys[i]) {
                    string += arrAllKeys[i] + ' : "' + arrAllValues[i] + '", ';
                }
            }
        }
        string = string.slice(0, string.length - 2);
        string += "}";
        return string;
    };

    utilities.withoutSymbols = function(input) {
        var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < input.length; i++) {
            var bool = false;
            if (
                input.charAt(i) == " " ||
                input.charAt(i).toLowerCase() != input.charAt(i).toUpperCase()
            ) {
                bool = true;
            }
            for (var j in numArr) {
                if (parseInt(input.charAt(i)) == numArr[j]) {
                    bool = true;
                }
            }
            if (!bool) {
                input = input.slice(0, i) + input.slice(i + 1, input.length);
            }
        }
        // input = input.slice(0, input.length - 1);
        return input;
    };

    utilities.countWords = function(input) {
        var wordsArr = [];
        wordsArr = utilities.withoutSymbols2(input).split(" ");
        for (var i in wordsArr) {
            if (wordsArr[i].trim() == "") {
                wordsArr.splice(i, 1);
            }
        }
        return wordsArr.length;
    };

    // assistance method for .countWords; slight variation on .withoutSymbols
    // adds spaces where punctuation is instead of just removing them
    utilities.withoutSymbols2 = function(input) {
        var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < input.length; i++) {
            var bool = false;
            if (
                input.charAt(i) == " " ||
                input.charAt(i).toLowerCase() != input.charAt(i).toUpperCase()
            ) {
                bool = true;
            }
            for (var j in numArr) {
                if (parseInt(input.charAt(i)) == numArr[j]) {
                    bool = true;
                }
            }
            if (!bool) {
                input =
                    input.slice(0, i) + " " + input.slice(i + 1, input.length);
            }
        }
        // input = input.slice(0, input.length - 1);
        return input;
    };

    return utilities;
})(window);
