var validator = {
    // 1
    isEmailAddress: function(email) {
        let isValid = false;
        let error = "good";

        if (typeof email === "string") {
            email = email.trim();
            let localPart = email.substr(0, email.indexOf("@"));
            let domainPart = email.substr(email.indexOf("@") + 1);

            if (email.indexOf("@") <= 0)
                error =
                    "Invalid email. Input is missing the @ symbol \nor is the first character of the input.";
            else if (email.substr(email.length - 4, 1) !== ".")
                error =
                    "Invalid input. String is missing the domain or the domain has the incorrect length.";
            else if (
                email.substr(0, 1) === "." ||
                email.substr(email.indexOf(".") - 1, 1) === "."
            )
                error =
                    ". cannot be the first or last character of your account name";
            else if (email.indexOf("..") > 0)
                error = "Consecutive . not allowed.";
            else if (domainPart.indexOf("@") >= 0)
                error = "Invalid email. @ char appears more than once.";
            else isValid = true;
        } else {
            error = "Invalid input. Please input a valid email.";
        }
        console.log(error);
        return isValid;
    }, // Closing isEmailAddress function
    // 2
    isPhoneNumber: function(phone) {
        let phArray = phone.trim().split("");
        let digits = "0123456789";
        let error = "good";
        let isValid = false;
        let phNumsOnly = [];

        for (i = 0; i < phArray.length; i++) {
            if (digits.indexOf(phArray[i]) >= 0) phNumsOnly.push(phArray[i]);
        }

        if (phNumsOnly.length === 11 && phNumsOnly[0] !== "1")
            error =
                "Country code is invalid or phone number too long. \nNote: Area code not required.";
        else if (phNumsOnly.length === 7) error = "Missing area code";
        else if (phNumsOnly.length > 11 || phNumsOnly.length < 10)
            error =
                "Invalid phone number. \nPlease enter a 3 digit area code and 7 digit phone number only.";
        else {
            if (phNumsOnly.length === 11 && phNumsOnly[0] === "1")
                phNumsOnly.shift();

            isValid = true;
        }

        console.log(error);
        return isValid;
    },
    // 3
    isDate: function(date) {
        let error = "";
        let isValid = false;

        if (isNaN(Date.parse(date)))
            error = "Incorrect data type. Input cannot be converted to a date";
        else {
            let objDate = new Date(date);
            if (
                parseInt(
                    this.daysInMonth(objDate, parseInt(date.substr(0, 2)))
                ) > parseInt(date.toString().substr(8, 2))
            )
                error = "Please check the day value of your input";
            else {
                error = "good date";
                isValid = true;
            }
        }
        console.log(error);
        return isValid;
    },
    // 4
    isBeforeDate: function(input, reference) {
        let tmpInput, tmpReference;

        try {
            if (this.checkDate(input) && this.checkDate(reference)) {
                tmpInput = new Date(input);
                tmpReference = new Date(reference);
                return console.log(
                    "End result: " +
                        (tmpInput.getTime() < tmpReference.getTime()).toString()
                );
            }
        } catch (e) {
            console.log("One or both values cannot be evaluated. ");
        }
    },

    // 5
    isAfterDate: function(input, reference) {
        let tmpInput, tmpReference;

        try {
            if (this.checkDate(input) && this.checkDate(reference)) {
                tmpInput = new Date(input);
                tmpReference = new Date(reference);
                return console.log(
                    "End result: " +
                        (tmpInput.getTime() > tmpReference.getTime()).toString()
                );
            }
        } catch (e) {
            console.log("One or both values cannot be evaluated. ");
        }
    },

    // 6
    isBeforeToday: function(input) {
        let tmpInput, tmpReference;

        try {
            if (this.checkDate(input) && this.checkDate(reference)) {
                tmpInput = new Date(input);
                tmpReference = new Date.now();
                return console.log(
                    "End result: " +
                        (tmpInput.getTime() < tmpReference.getTime()).toString()
                );
            }
        } catch (e) {
            console.log("One or both values cannot be evaluated. ");
        }
    },

    // 7
    isAfterToday: function(input) {
        let tmpInput, tmpReference;

        try {
            if (this.checkDate(input) && this.checkDate(reference)) {
                tmpInput = new Date(input);
                tmpReference = new Date.now();
                return console.log(
                    "End result: " +
                        (tmpInput.getTime() > tmpReference.getTime()).toString()
                );
            }
        } catch (e) {
            console.log("One or both values cannot be evaluated. ");
        }
    },

    // 8
    isEmpty: function(input) {
        var isValid = false;

        try {
            if (typeof input !== "string")
                throw " Input is not of type string. ";
            else isValid = input.trim().length === 0;

            return isValid;
        } catch (e) {
            console.log("Error occurred. " + e);
        }
    },

    // 9
    isTrimmed: function(input) {
        var isValid = false;

        try {
            if (typeof input !== "string")
                throw " Input is not of type string. ";
            else
                isValid =
                    input.substr(0, 1) === " " ||
                    input.substr(input.length - 1, 1) === " " ||
                    input.indexOf("  ") >= 0;
            return isValid;
        } catch (e) {
            console.log("Error occurred. " + e);
        }
    },

    // 10
    contains: function(input, words) {
        let isValid = false;

        try {
            if (typeof input !== "string" || words instanceof Array === false)
                console.log(
                    "Function requires an string and an array as input (string, array)"
                );
            else {
                for (i = 0; i < words.length; i++) {
                    if (input.toUpperCase().includes(words[i].toUpperCase())) {
                        isValid = true;
                    } else {
                        isValid = false;
                        break;
                    }
                }
            }
            return isValid;
        } catch (e) {
            console.log("Error occurred. " + e);
        }
    },

    // 11
    lacks: function(input, words) {
        let isValid = true;

        try {
            if (typeof input !== "string" || words instanceof Array === false)
                console.log(
                    "Function requires an string and an array as input (string, array)"
                );
            else {
                for (i = 0; i < words.length; i++) {
                    if (!input.toUpperCase().includes(words[i].toUpperCase())) {
                        isValid = true;
                    } else {
                        isValid = false;
                        break;
                    }
                }
            }
            return isValid;
        } catch (e) {
            console.log("Error occurred. " + e);
        }
    },

    // 12
    isComposedOf: function() {},

    // 13
    isOfLengthOrLessThan(input, n) {
        let isValid = false;
        try {
            if (typeof input !== "string" || typeof n !== "number")
                console.log(
                    "Function requires an string and a number (string, number)"
                );
            else isValid = true;

            return isValid ? input.length <= n : null;
        } catch (e) {
            console.log("Error occurred. " + e);
        }
    },

    // 14
    isOfLengthOrGreaterThan(input, n) {
        let isValid = false;
        try {
            if (typeof input !== "string" || typeof n !== "number")
                console.log(
                    "Function requires an string and a number (string, number)"
                );
            else isValid = true;

            return isValid ? input.length >= n : null;
        } catch (e) {
            console.log("Error occurred. " + e);
        }
    },

    // 15
    lessWordsThan: function(input, n) {
        let isValid = false;
        let count = 0;
        try {
            if (typeof input !== "string" || typeof n !== "number")
                console.log(
                    "Function requires an string and a number (string, number)"
                );
            else {
                isValid = true;
                let inputArr = input.split(" ");
                console.log(inputArr);
                for (i = 0; i < inputArr.length; i++)
                    count += inputArr[i].trim() !== "" ? 1 : 0;
            }
            console.log(isValid ? n <= count : null);
            return isValid ? n <= count : null;
        } catch (e) {
            console.log("Error occurred. " + e);
        }
    },
    //  16
    moreWordsThan: function(input, n) {
        let isValid = false;
        let count = 0;
        try {
            if (typeof input !== "string" || typeof n !== "number")
                console.log(
                    "Function requires an string and a number (string, number)"
                );
            else {
                isValid = true;
                let inputArr = input.split(" ");

                for (i = 0; i < inputArr.length; i++)
                    count += inputArr[i].trim() !== "" ? 1 : 0;
            }

            return isValid ? n >= count : null;
        } catch (e) {
            console.log("Error occurred. " + e);
        }
    },

    // 17
    isNumberBetween: function(input, floor, ceil) {
        let isValid = false;
        try {
            if (
                typeof input !== "number" ||
                typeof floor !== "number" ||
                typeof ceil !== "number"
            )
                console.log("Function requires 3 parameter number.");
            else isValid = true;

            return isValid
                ? input >= Math.floor(floor) && input <= Math.ceil(ceil)
                : null;
        } catch (e) {
            console.log("Error occurred. " + e);
        }
    },

    // 18
    isAlphanumeric: function(input) {
        let isValid = false;
        let alphanumericOnly = false;
        let alphanumerics = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        try {
            if (typeof input !== "string")
                console.log("Function requires a string parameter.");
            else {
                isValid = true;
                for (i = 0; i <= input.length; i++) {
                    alphanumericOnly = alphanumerics.indexOf(
                        input.substr(i, 1).toUpperCase()
                    ) >= 0 || input.substr(i, 1) === ""
                        ? true
                        : false;
                    if (!alphanumericOnly) break;
                }
            }
            return isValid ? alphanumericOnly : null;
        } catch (e) {
            console.log("Error occurred. " + e);
        }
    },

    // 19
    isCreditCard: function(input) {
        let isValid = false;
        let inputFormat = "";
        let validCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-";
        let hypensPosition = [4, 9, 14];
        let validLength = [16, 19];
        let template = input.length === 16
            ? "0000000000000000"
            : "0000-0000-0000-0000";

        try {
            if (typeof input !== "string")
                console.log("Function requires a string parameter.");
            else if (validLength.indexOf(input.length) < 0) {
                console.log("Invalid string length");
            } else {
                isValid = true;
                for (i = 0; i < input.length; i++)
                    inputFormat += validCharacters.indexOf(
                        input.substr(i, 1)
                    ) >= 0 && input.substr(i, 1) !== "-"
                        ? "0"
                        : input.substr(i, 1);
            }

            console.log(input);
            return isValid ? inputFormat === template : false;
        } catch (e) {
            console.log("Error occurred. " + e);
        }
    },

    // 20
    isHex: function(input) {
        let isValid = false;
        let hexCharacters = "1234567890ABCDEF";
        let template = input.length === 4 ? "#000" : "#000000";
        let validLength = [4, 7];
        let inputFormat = "#";

        try {
            if (typeof input !== "string")
                console.log("Function requires a string parameter.");
            else if (validLength.indexOf(input.length) < 0)
                console.log("Invalid string length");
            else if (input.substr(0, 1) !== "#")
                console.log(
                    "String must start with character the pound symbol."
                );
            else {
                isValid = true;
                for (i = 1; i < input.length; i++)
                    inputFormat += hexCharacters.indexOf(
                        input.toUpperCase().substr(i, 1)
                    ) >= 0
                        ? "0"
                        : input.substr(i, 1);
            }

            console.log(input);
            return isValid ? inputFormat === template : false;
        } catch (e) {
            console.log("Error occurred. " + e);
        }
    },

    checkDate: function(item) {
        let isValid = false;

        try {
            if (this.findDataType(item) === "object" && item instanceof Date) {
                isValid = this.dateObject(item);
                if (isValid === false)
                    throw " Input object is an instance of Date but its value does not convert to date. ";
            } else if (!this.dateString(item)) {
                throw " Input string does not seem to be properly formatted. ";
            } else if (
                this.findDataType(item) === "object" &&
                item instanceof Date === false
            ) {
                throw " Input object is not an instance of Date. ";
            } else if (this.dateString(item)) {
                let inputObj = new Date(item);
                isValid =
                    parseInt(
                        item.substr(
                            item.indexOf("/") + 1,
                            item.substr(item.indexOf("/") + 3, 1) === "/"
                                ? 2
                                : 1
                        )
                    ) <=
                    this.daysInMonth(inputObj, parseInt(item.substr(0, 2)));
                if (isValid === false)
                    throw " Input string cannot convert to a valid date. ";
            }
            return isValid;
        } catch (err) {
            console.log("Error occurred. " + err);
        }
    },

    daysInMonth: function(date, month) {
        var year = date.getFullYear();
        var daysInMonth = [
            31,
            year % 4 > 0 || (year % 100 === 0 && year % 400 !== 0) ? 28 : 29,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ];

        return daysInMonth[month - 1];
    },

    findDataType: function(value) {
        return typeof value;
    },

    dateString: function(str) {
        return !isNaN(Date.parse(str));
    },

    dateObject: function(obj) {
        return !isNaN(obj.getTime());
    }
}; // Closing validator function
