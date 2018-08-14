var validator = (function(window) {
    var validator = {};

    validator.isEmailAddress = function(input) {
        var bool = true;
        var atIndex = input.indexOf("@");
        if (atIndex <= 0) {
            bool = false;
        }
        if (input.length <= atIndex + 1) {
            bool = false;
        }
        return bool;
    };

    validator.isPhoneNumber = function(input) {
        var bool = true;
        if (input.length != 10) {
            bool = false;
        }
        if (input.charAt(0) == 0 || input.charAt(0) == 1) {
            bool = false;
        }
        for (var i in input) {
            if (isNaN(input.charAt(i))) {
                bool = false;
            }
        }
        return bool;
    };

    validator.isDate = function(input) {
        var bool = true;
        var date = new Date(input);
        if (date == "Invalid Date") {
            bool = false;
        }
        return bool;
    };

    validator.isBeforeDate = function(input, reference) {
        var bool = true;

        try {
            if (!validator.isDate(reference)) {
                throw "The following is an Invalid Date: " +
                    reference +
                    ". Please try again.";
            }
            if (!validator.isDate(input)) {
                throw "The following is an Invalid Date: " +
                    input +
                    ". Please try again.";
            }
            var beforeDate = new Date(reference);
            var afterDate = new Date(input);

            if (beforeDate < afterDate) {
                bool = false;
            }
        } catch (err) {
            console.log("This is the error: " + err);
            bool = false;
        } finally {
            return bool;
        }
    };

    validator.isAfterDate = function(input, reference) {
        var bool = true;

        try {
            if (!validator.isDate(reference)) {
                throw "The following is an Invalid Date: " +
                    reference +
                    ". Please try again.";
            }
            if (!validator.isDate(input)) {
                throw "The following is an Invalid Date: " +
                    input +
                    ". Please try again.";
            }
            var beforeDate = new Date(input);
            var afterDate = new Date(reference);

            if (beforeDate < afterDate) {
                bool = false;
            }
        } catch (err) {
            console.log("This is the error: " + err);
            bool = false;
        } finally {
            return bool;
        }
    };

    validator.isBeforeToday = function(input) {
        var bool = true;

        try {
            if (!validator.isDate(input)) {
                throw "The following is an Invalid Date: " +
                    reference +
                    ". Please try again.";
            }
            var inputDate = new Date(input);
            var todayDate = new Date();

            if (inputDate > todayDate) {
                bool = false;
            }
        } catch (err) {
            console.log("This is the error: " + err);
            bool = false;
        } finally {
            return bool;
        }
    };

    validator.isAfterToday = function(input) {
        var bool = true;

        try {
            if (!validator.isDate(input)) {
                throw "The following is an Invalid Date: " +
                    reference +
                    ". Please try again.";
            }
            var inputDate = new Date(input);
            var todayDate = new Date();

            if (inputDate < todayDate) {
                bool = false;
            }
        } catch (err) {
            console.log("This is the error: " + err);
            bool = false;
        } finally {
            return bool;
        }
    };

    validator.isEmpty = function(input) {
        var bool = true;
        if (typeof input != "string" || !input.trim() == "") {
            bool = false;
        }
        return bool;
    };

    validator.isTrimmed = function(input) {
        var bool = true;
        if (!(input == input.trim())) {
            bool = false;
        }
        for (var i = 0; i < input.length; i++) {
            if (
                input.charAt(i) == " " && input.charAt(i) == input.charAt(i + 1)
            ) {
                bool = false;
            }
        }
        return bool;
    };

    validator.contains = function(input, words) {
        var bool = false;
        for (var i = 0; i < input.length; i++) {
            if (
                input.charAt(i).toLowerCase() == input.charAt(i).toUpperCase()
            ) {
                if (input.charAt(i) != " ") {
                    input =
                        input.slice(0, i) +
                        " " +
                        input.slice(i + 1, input.length);
                }
            }
        }
        var arr = input.split(" ");
        for (var i = 0; i < words.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (words[i].toLowerCase() == arr[j].toLowerCase()) {
                    bool = true;
                }
            }
        }
        return bool;
    };
    validator.lacks = function(input, words) {
        var bool = true;
        for (var i = 0; i < input.length; i++) {
            if (
                input.charAt(i).toLowerCase() == input.charAt(i).toUpperCase()
            ) {
                if (input.charAt(i) != " ") {
                    input =
                        input.slice(0, i) +
                        " " +
                        input.slice(i + 1, input.length);
                }
            }
        }
        var arr = input.split(" ");
        for (var i = 0; i < words.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (words[i].toLowerCase() == arr[j].toLowerCase()) {
                    bool = false;
                }
            }
        }
        return bool;
    };

    validator.isComposedOf = function(input, strings) {
        var bool = true;
        for (var i = 0; i < input.length; i++) {
            if (input.charAt(i) == " " || input.charAt(i) == ".") {
                input = input.slice(0, i) + input.slice(i + 1, input.length);
            }
        }
        for (var j = 0; j < strings.length; j++) {
            for (var k = 0; k < input.length; k++) {
                if (input.indexOf(strings[j]) != -1) {
                    input =
                        input.slice(0, input.indexOf(strings[j])) +
                        input.slice(
                            input.indexOf(strings[j]) + strings[j].length,
                            input.length
                        );
                }
            }
        }
        if (input != "") {
            bool = false;
        }
        return bool;
    };

    validator.isOfLengthOrLessThan = function(input, n) {
        var bool = true;
        if (input.length > n) {
            bool = false;
        }
        return bool;
    };

    validator.isOfLengthOrGreaterThan = function(input, n) {
        var bool = true;
        if (input.length < n) {
            bool = false;
        }
        return bool;
    };

    validator.lessWordsThan = function(input, n) {
        var bool = true;
        var arr = input.split(" ");
        if (arr.length > n) {
            bool = false;
        }
        return bool;
    };

    validator.moreWordsThan = function(input, n) {
        var bool = true;
        var arr = input.split(" ");
        if (arr.length < n) {
            bool = false;
        }
        return bool;
    };

    validator.isNumberBetween = function(input, floor, ceil) {
        var bool = true;
        if (
            !(parseInt(input) >= parseInt(floor) &&
                parseInt(input) <= parseInt(ceil))
        ) {
            bool = false;
        }
        return bool;
    };

    validator.isAlphanumeric = function(input) {
        var bool = true;
        var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < input.length; i++) {
            if (
                input.charAt(i).toLowerCase() == input.charAt(i).toUpperCase()
            ) {
                bool = false;
            }
            for (var j in numArr) {
                if (parseInt(input.charAt(i)) == numArr[j]) {
                    bool = true;
                }
            }
        }
        return bool;
    };

    validator.isCreditCard = function(input) {
        var bool = true;
        for (var i = 0; i < input.length; i++) {
            if (input.charAt(i) == "-") {
                input = input.slice(0, i) + input.slice(i + 1, input.length);
            }
        }
        if (!validator.isAlphanumeric(input) || input.length != 16) {
            bool = false;
        }

        return bool;
    };

    validator.isHex = function(input) {
        var bool = true;
        if (input.charAt(0) != "#" || input.length > 7 || input.length < 4) {
            bool = false;
        }
        var arr = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f"
        ];
        for (var i = 1; i < input.length; i++) {
            var valid = false;
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] == input.charAt(i)) {
                    valid = true;
                }
            }
            if (!valid) {
                bool = false;
            }
        }
        return bool;
    };

    validator.isRGB = function(input) {
        var bool = true;
        if (input.substr(0, 4) != "rgb(") {
            bool = false;
            return bool;
        } else {
            input = input.slice(4, input.length - 1);
        }
        for (var i = 0; i < input.length; i++) {
            if (input.charAt(i) == " ") {
                input = input.slice(0, i) + input.slice(i + 1, input.length);
            }
        }
        var arr = input.split(",");
        if (arr.length != 3) {
            bool = false;
        }
        for (var j in arr) {
            if (arr[j] > 255 || arr[j] < 0) {
                bool = false;
            }
        }
        return bool;
    };

    validator.isHSL = function(input) {
        var bool = true;
        if (input.substr(0, 4) != "hsl(") {
            bool = false;
            return bool;
        } else {
            input = input.slice(4, input.length - 1);
        }
        for (var i = 0; i < input.length; i++) {
            if (input.charAt(i) == " ") {
                input = input.slice(0, i) + input.slice(i + 1, input.length);
            }
        }
        var arr = input.split(",");
        if (
            arr.length != 3 ||
            arr[0] > 360 ||
            arr[0] < 0 ||
            arr[1] > 1 ||
            arr[1] < 0 ||
            arr[2] > 1 ||
            arr[2] < 0
        ) {
            bool = false;
        }
        return bool;
    };

    validator.isColor = function(input) {
        var bool = true;
        if (
            !(validator.isHex(input) ||
                validator.isRGB(input) ||
                validator.isHSL(input))
        ) {
            bool = false;
        }
        return bool;
    };

    return validator;
})(window);
