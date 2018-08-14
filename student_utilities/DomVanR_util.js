(function(window) {
  var utilities = {};

  // You may include and use this function in your utilities.

  utilities.isArray =
    Array.isArray ||
    function(arr) {
      //Begin isArray
      return Object.prototype.toString.call(arr) === "[object Array]";
      //End isArray
    };

  utilities.by = function(list, n, callback) {
    //Begin by
    for (var i = n - 1; i < list.length; i += n) {
      //array starts at 0 so we subtract 1 for starting value of 'i'
      callback(list[i]);
    }
    return;
    //End by
  };

  //console.log("+++++++++ 'by' Tests +++++++++");
  //console.log(utilities.by([1,2,3,4,5,6], 2, console.log));

  utilities.keys = function(object) {
    //Begin keys
    return Object.keys(object);
    //End keys
  };

  //console.log("+++++++++ 'keys' Tests +++++++++");
  //console.log(utilities.keys({count: 5, length: 10, total: 16}));

  utilities.values = function(object) {
    //Begin values
    return Object.values(object);
    //End values
  };

  //console.log("+++++++++ 'keys' Tests +++++++++");
  //console.log(utilities.values({count: 5, length: 10, total: 16}));

  utilities.pairs = function(object) {
    //Begin pairs
    var result = [];
    for (var k in object) {
      result.push(k);
      result.push(object[k]);
    }
    return result;
    //End pairs
  };

  //console.log("+++++++++ 'pairs' Tests +++++++++");
  //console.log(utilities.pairs({count: 5, length: 10, total: 16}));

  utilities.shuffle = function(array) {
    //Begin shuffle
    var result = array;
    var al = result.length;
    for (var i = al - 1; i > 0; i--) {
      var j = Math.floor(Math.random(Math.random() * 10) * (i + 1));
      var temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
    return result;
    //End shuffle
  };

  //console.log("+++++++++ 'shuffle' Tests +++++++++");
  //console.log(utilities.shuffle([1,4,7,19,-1,9]));
  //console.log(utilities.shuffle([1,4,7,19,-1,9]));

  utilities.pluralize = function(n, word, pluralWord) {
    //Begin pluralize
    var args = Array.from(arguments);

    if (args.length < 2) {
      return undefined;
    }
    if (args.length === 3 && typeof pluralWord === "string") {
      return pluralWord;
    }
    if (typeof word === "string" && word.length > 0 && n === 1) {
      return word + "s";
    } else {
      return word;
    }

    //End pluralize
  };

  //console.log("+++++++++ 'pluralize' Tests +++++++++");
  //console.log(utilities.pluralize(1));
  //console.log(utilities.pluralize(1, "lion"));
  //console.log(utilities.pluralize(4, "lion"));
  //console.log(utilities.pluralize(2, "lion", "lions"));

  utilities.toDash = function(string) {
    //Begin toDash
    return string.replace(/([A-Z])/g, "-$1").toLowerCase();
    //End toDash
  };

  //console.log("+++++++++ 'toDash' Tests +++++++++");
  //console.log(utilities.toDash("hotDog"));
  //console.log(utilities.toDash("camelCaseExample"));
  //console.log(utilities.toDash("byTheRiverOfBabylon"));
  //console.log(utilities.toDash("whereWeSatDown"));

  utilities.toCamel = function(string) {
    //Begin toCamel
    return string.replace(/-[a-z]/g, function(word) {
      return word.slice(1).toUpperCase();
    });
    //End toCamel
  };

  //console.log("+++++++++ 'toCamel' Tests +++++++++");
  //console.log(utilities.toCamel("hot-dog"));
  //console.log(utilities.toCamel("dash-example"));
  //console.log(utilities.toCamel("by-the-river-of-babylon"));
  //console.log(utilities.toCamel("where-we-sat-down"));

  utilities.has = function(obj, value) {
    //Begin has
    return Object.values(obj).findIndex(v => v === value) !== -1;
    //End has
  };

  //console.log("+++++++++ 'has' Tests +++++++++");
  //console.log(utilities.has([0,2,3,4,5], 3));
  //console.log(utilities.has({key1: 0, key2: 2, key3: 3, key4: 4, key5: 5}, 2));
  //console.log(utilities.has({key1: '0', key2: '1', key3: '2', key4: '2', key5: '3'}, '2'));

  utilities.pick = function(obj, keys) {
    //Begin pick
    var result = {};
    if (typeof obj !== "object" || !this.isArray(keys))
      throw console.log("One or more parameters are not valid");
    for (var idx in keys) {
      if (obj.hasOwnProperty(keys[idx])) {
        result[keys[idx]] = obj[keys[idx]];
      }
    }
    return result;
    //End pick
  };

  var data = {
    type: "transformer",
    index: 19,
    siblings: 19,
    access: "full"
  };

  //console.log("+++++++++ 'pick' Tests +++++++++");
  //console.log(utilities.pick(data, ["type", "index"]));      // returns {type: "transformer", index: 19};
  //console.log(utilities.pick(data, ["siblings", "index"]));  // returns {siblings: 19, index: 19};
  //console.log(utilities.pick(data, ["access", "animals"]));  // returns {access: "full"};

  utilities.withoutSymbols = function(input) {
    //Begin withoutSymbols
    var allowedChars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";
    var result = "";
    for (var idx in input) {
      if (allowedChars.indexOf(input[idx]) !== -1) {
        result = result + input[idx];
      }
    }
    return result;
    //End withoutSymbols
  };

  //console.log("+++++++++ 'withoutSymbols' Tests +++++++++");
  //console.log(utilities.withoutSymbols("Hi, john.doe@live.com., is !that you?/")); // returns "Hi johndoelivecom, is that you"

  utilities.countWords = function(input) {
    //Begin countWords
    var puncChars = "'!\"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]";
    var allowedChars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ";
    var wipString = "";
    var array = [];
    var count = 0;

    //replace all punctuation with whitespace
    for (var i in input) {
      if (allowedChars.indexOf(input[i]) !== -1) {
        wipString = wipString + input[i];
      } else {
        wipString = wipString + " ";
      }
    }

    array = wipString.split(" "); //split on whitespace which will create some empty string artefacts along with actual words
    // only count non empty strings
    for (var idx in array) {
      if (array[idx].length !== 0) {
        count++;
      }
    }

    return count;
    //End countWords
  };

  //console.log("+++++++++ 'countWords' Tests +++++++++");
  //console.log(utilities.countWords("Hard--to-type-really-fast!"));
  //console.log(utilities.countWords("Hello."));
  //console.log(utilities.countWords("Hard, to   type! really. fast!"));
  window.utilities = utilities;
})(window);
