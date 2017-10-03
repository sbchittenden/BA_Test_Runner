var assert = chai.assert;

// replace u variable assignment with correct utilities object reference as needed
var u = utilities;

describe('Utilities functions', function() {

  /* ===============================================
  .by(list, n, callback)
  =============================================== */
  describe('.by', function() {
    it('should be a function', function() {
      assert.isFunction(u.by, 'missing .by as a method on utilities');
    });

    it('should execute callback on a list at n interval', function() {
      var test1 = (function() {
        var result = [];
        u.by([1, 2, 3, 4, 5, 6], 2, function(val, index, list) {
          result.push(val);
        });
        return result;
      })();
      assert.deepEqual(test1, [2, 4, 6]);
    });

    it('should execute callback on a list at n interval', function() {
      var test2 = (function() {
        var result = [];
        u.by([1, 2, 3, 4, 5, 6], 3, function(val) {
          result.push(val * val);
        });
        return result;
      })();
      assert.deepEqual(test2, [9, 36]);
    });
  });

  /* ===============================================
  .keys(object)
  =============================================== */
  describe('.keys', function() {
    it('should be a function', function() {
      assert.isFunction(u.keys, 'missing .keys as a method on utilities');
    });

    it('should return an array of object keys', function() {
      var test1 = (function() {
        return u.keys({ count: 5, length: 10, total: 16 });
      })();
      assert.deepEqual(test1, ['count', 'length', 'total']);
    });
  });

  /* ===============================================
  .values(object)
  =============================================== */
  describe('.values', function() {

    it('should be a function', function() {
      assert.isFunction(u.values, 'missing .values as a method on utilities');
    });

    it('should return an array of object values', function() {
      var test1 = (function() {
        return u.values({ count: 5, length: 10, total: 16 });
      })();
      assert.deepEqual(test1, [5, 10, 16]);
    });
  });

  /* ===============================================
  .pairs(object)
  =============================================== */
  describe('.pairs', function() {
    it('should be a function', function() {
      assert.isFunction(u.pairs, 'missing .pairs as a method on utilities');
    });

    it('should return an array of object key / value pairs', function() {
      var test1 = (function() {
        return u.pairs({ count: 5, length: 10, total: 16 });
      })();
      assert.deepEqual(test1, ['count', 5, 'length', 10, 'total', 16]);
    });
  });

  /* ===============================================
  .shuffle(array)
  =============================================== */
  describe('.shuffle', function() {
    it('should be a function', function() {
      assert.isFunction(u.shuffle, 'missing .shuffle as a method on utilities');
    });

    it('should return an array', function() {
      assert.isArray(u.shuffle([1, 2, 3, 4, 5]));
    });

    it('should return an array of the same length', function() {
      assert.lengthOf(u.shuffle([1, 2, 3, 4, 5]), 5);
    });

    it('should return an array containing the same elements', function() {
      assert.sameMembers(u.shuffle([1, 2, 3, 4, 5]), [5, 3, 4, 1, 2]);
    });
  });

  /* ===============================================
  .pluralize(n, word, pluralWord)
  =============================================== */
  describe('.pluralize', function() {
    it('should be a function', function() {
      assert.isFunction(u.pluralize, 'missing .pluralize as a method on utilities');
    });

    it('should return a string', function() {
      assert.isString(u.pluralize(1, 'lion'));
    });

    it('should return a non-plural word when passed n value of 1', function() {
      assert.strictEqual(u.pluralize(1, 'lion'), 'lion', 'should not pluralize word');
    });

    it('should return a plural word when passed n value other than 1', function() {
      assert.strictEqual(u.pluralize(2, 'lion'), 'lions', 'should pluralize word');
    });

    it('should return a pluralWord parameter when provided', function() {
      assert.strictEqual(u.pluralize(2, 'lioness', 'lionesses'), 'lionesses', 'should return pluralWord parameter');
    });
  });

  /* ===============================================
  .toDash(str)
  =============================================== */
  describe('.toDash', function() {
    it('should be a function', function() {
      assert.isFunction(u.toDash, 'missing .toDash as a method on utilities');
    });

    it('should return a string', function() {
      assert.isString(u.toDash('hotDog'), 'should return a string');
    });

    it('should convert camelCase to a dashed string', function() {
      assert.strictEqual(u.toDash('hotDog'), 'hot-dog');
    });

    it('should convert camelCase to a dashed string', function() {
      assert.strictEqual(u.toDash('spaceStationComplex'), 'space-station-complex');
    });
  });

  /* ===============================================
  .toCamel(str)
  =============================================== */
  describe('.toCamel', function() {
    it('should be a function', function() {
      assert.isFunction(u.toCamel, 'missing .toCamel as a method on utilities');
    });
    it('should return a string', function() {
      assert.isString(u.toCamel('hot-dog'), 'should return a string');
    });

    it('should convert dashed string to a camel case string', function() {
      assert.strictEqual(u.toCamel('hot-dog'), 'hotDog');
    });

    it('should convert dashed string to a camel case string', function() {
      assert.strictEqual(u.toCamel('space-station-complex'), 'spaceStationComplex');
    });
  });

  /* ===============================================
  .has(obj, search)
  =============================================== */
  describe('.has', function() {
    it('should be a function', function() {
      assert.isFunction(u.has, 'missing .has as a method on utilities');
    });

    it('should return true if object contains a value equal to the search parameter', function() {
      var testObj = {foo: 'bar', baz: 'bibby', baf: 'barf'};
      assert.isTrue(u.has(testObj, 'bar'));
    });

    it('should return false if object does not contain a value equal to the search parameter', function() {
      var testObj = {foo: 'bar', baz: 'bibby', baf: 'barf'};
      assert.isFalse(u.has(testObj, 'gold'));
    });
  });

  /* ===============================================
  .pick(obj, keys)
  =============================================== */
  describe('.pick', function() {
    it('should be a function', function() {
      assert.isFunction(u.pick, 'missing .pick as a method on utilities');
    });

    // test object
    var data = { type: "transformer", index: 19, siblings: 19,access: "full"};

    it('should return an object', function() {
      assert.isObject(u.pick(data, ['type', 'index']));
    });

    it('should return an object containing the key/value pairs specified by the array parameter keys', function() {
      assert.deepEqual(u.pick(data, ['type', 'index']), {type: 'transformer', index: 19});
    });

    it('should return an object containing only the key/value pairs specified by the array parameter keys', function() {
      assert.deepEqual(u.pick(data, ['access', 'animals']), {access: 'full'});
    });
  });

  /* ===============================================
  .withoutSymbols(input)
   ===============================================*/
  describe('.withoutSymbols', function() {
    it('should be a function', function() {
      assert.isFunction(u.withoutSymbols, 'missing .withoutSymbols as a method on utilities');
    });

    it('should return a string', function() {
      assert.isString(u.withoutSymbols('Hi, john.doe@live.com., is that you?/'));
    });

    it('should remove non-alphanumeric characters from a string', function() {
      assert.strictEqual(u.withoutSymbols('Hi, john.doe@live.com., is that you?/'), 'Hi johndoelivecom is that you');
    });

    it('should remove non-alphanumeric characters from a string', function() {
      assert.strictEqual(u.withoutSymbols('I a$m not rea@ll&^y s*u[r]e# abou!t t<h>is o?n\e'), 'I am not really sure about this one');
    });
  });

  /* ===============================================
  .countWords(input)
  =============================================== */
  describe('.countWords', function() {
    it('should be a function', function() {
      assert.isFunction(u.countWords, 'missing .countWords as a method on utilities');
    });

    it('should return a number', function() {
      assert.isNumber(u.countWords('Hello'));
    });

    it('should count the number of words in a string', function() {
      assert.strictEqual(u.countWords('Hello'), 1);
    });

    it('should count the number of words in a string even if separated by punctuation', function() {
      assert.strictEqual(u.countWords('Hard-to-type-really-fast!'), 5);
    });

    it('should count the number of words in an empty string', function() {
      assert.strictEqual(u.countWords(''), 0);
    });
  });

  // ****************************** //
  // end of utilities functions
  // ****************************** //
});
