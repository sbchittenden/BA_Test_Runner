var assert = chai.assert;

// replace u variable assignment with correct utilities object reference as needed
var u = utilities;

describe('Utilities functions', function() {

  /*
  .by(list, n, callback)
  Write a function that operates similarly to .forEach. Your function should iterate and call the callback parameter for each element or property of a list at the interval specified by the n parameter. It should not call callback on values greater than the list’s number of elements.
  */
  describe('.by', function() {

    var log = function(val, index, list) {
      resultArray.push(val);
    };

    var test1 = function() {
    var resultArray = [];
    u.by([1, 2, 3, 4, 5, 6], 2, log);
    return resultArray;
    }

    it('should execute callback on a list at n interval', function(){
      assert.equal(u.by([1, 2, 3, 4, 5, 6], 2, log), [2,4,6]);
    });

  });

  /*
  .keys(object)
   */
  describe('.keys', function() {

  });

  /*
  .values(object)
   */
  describe('.values', function() {

  });

  /*
  .pairs(object)
   */
  describe('.pairs', function() {

  });

  /*
  .shuffle(array)
   */
  describe('.shuffle', function() {

  });

  /*
  .pluralize(n, word, pluralWord)
   */
  describe('.pluralize', function() {

  });

  /*
  .toDash(str)
   */
  describe('.toDash', function() {

  });

  /*
  .toCamel(str)
   */
  describe('.toCamel', function() {

  });

  /*
  .has(obj, search)
   */
  describe('.has', function() {

  });

  /*
  .pick(obj, keys)
   */
  describe('.pick', function() {

  });

  /*
  .withoutSymbols(input)
   */
  describe('.withoutSymbols', function() {

  });

  /*
  .countWords(input)
   */
  describe('.countWords', function() {

  });



  // ****************************** //
  // end of utilities functions
  // ****************************** //
});