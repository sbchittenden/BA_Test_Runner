// (function(window){

var utilities = {};

utilities.by = function(list, n, callback){
  if(n > list.length) throw new Error("n parameter cannot be larger than the number of items in the list parameter");
//to avoid loops for eternity, n must be a number greater than 0.
if(n === 0) throw "second perimeter must be a number greater than 0."
//loop through items in the array, with i (index) starting at -1 to allow for value at index 0 to be included,
//then moving to next index which is equaled to the "n" perimeter added to i.
  for(var i = -1; i < list.length; i = i+n){
//apply the callback function to each item chosen by the loop.
    callback(list[i]);
  }
};

utilities.keys = function(object){
// assign variable p to holds each property(key).
var p;
//create empty array.
var arr = [];
//push property names to the empty array.
for (p in object) {
    arr.push(p);
}
//return array containing the property(keys)names
    return arr;
};

utilities.values = function(object){
//assign variable p to hold each property (key).
var p;
//create empty array
var arr = [];
//push values of each property to the array.
for(p in object) {
  arr.push(object[p]);
}
//return array which now contains values of each property.
  return arr;
};

utilities.pairs = function(object){
//assign variable p to hold each property (key).
var p;
//create empty array
var arr = [];
//push the property first, then push the property value.
for(p in object) {
  arr.push(p)
  arr.push(object[p])
}
//return the arr now containing each key, followed by its value, then the following key etc.
  return arr;
};


utilities.shuffle = function(array) {
//create empty array to push random items from "array" that is triggering the shuffle function.
    var shuffArr = [];
//assign "index" to a variable to represent the index position of each item in the array fed to the function.
    var index;
//start a loop, that stops when the length of the array is less than zero, i.e. empty
    while (array.length > 0) {
//index is a random number, between 0 and the array length
      index = Math.floor(Math.random() * array.length);
//push a random item to the shuffArr created earlier, using the random index created.
      shuffArr.push(array[index]);
//remove the pushed item from original array, so it of consideration, and array length is reduced.
      array.splice(index, 1);
    }
//return the shuffled array.
    return shuffArr;
};


utilities.pluralize = function(n, word, pluralWord){
    //test if pluralword is present, and if so, return it
    if(typeof pluralWord === "string") return pluralWord;
    //if n parimeter is 0, or n parimeter is more than 1, add an "s" to the end of word perimeter
    if(n === 0 || n > 1) return (word + "s");
    //when n = 1, return word as it is.
    else return word;
};

utilities.toDash = function(string){
    //create variable caps which is all capital letters of alphabet to compare with the perimeter.
    var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //make caps string an array.
    var caps = caps.split('');
    //make string perimeter
    var string = string.split('');
    //run a nested loop through each item of the perimeter array, and the caps array
    for(var i=0; i < string.length; i++){
        for(var k=0; k < caps.length; k++){
    //find all matching items
           if(string[i] === caps[k])
    //if string item is a capital letter, place a hyphen in front of it.
               string[i] = ("-" + string[i]);
           }
    }
    //make perimeter array a string again
    var string = string.join('');
    //make perimeter lowercase to remove all caps.
    var string = string.toLowerCase();
    //return the result.
    return string;
};

utilities.toCamel = function(string){
    //convert dash string to an array
    var arr = string.split('');
    //loop through array from start to finish
    for(var i=0; i < arr.length; i++){
    //if array it is found to be a hyphen
           if(arr[i] === "-"){
    //delete the hyphen
        arr.splice(i, 1)
    //capitalize the letter which is now in its place
    arr[i] = arr[i].toUpperCase();
           }
    }
    //rejoin the array as a string and return the result.
    var string = arr.join('');
    return string;
};

utilities.has = function(obj, search){
//use utilities.values function to create array of values found in object and assign to variable "objValues".
    var objValues = utilities.values(obj);
//loop through the array from start to finish
    for(var i=0; i < objValues.length; i++){
//if any item in the array matches the search perimeter, return true
        if(objValues[i] === search) return true;
    }
//if no matches, return false.
return false;
};

utilities.pick = function(obj, keys){
//assign var key 1 and key 2 for the two items in the array at perimeter two
    var key1 = keys[0];
    var key2 = keys[1];
// create an empty object called newObj utilize if matching keys are found in obj
  var newObj = {}
//examine properties(keys) of object at perimiter one
    for(p in obj){
//if matches are found assign them to key1val and key2val variable
        if(p = keys[0]) var key1val = obj[p];
        if(p = keys[1]) var key2val = obj[p];
    }
//if they are both found, and thus not "undefined"
    if(key1val !== undefined && key2val !== undefined){
//place both keys in the empty "newObj" object.
      newObj[key1] = key1val;
      newObj[key2] = key2val;
    }
//if key1val is found, and key2val is not
    if(key1val !== undefined && key2val === undefined){
//place only key1 and key1Val in the new object
      newObj[key1] = key1val;
    }
//else, key1Val is undefined, only key2 and key2Val are placed in the new object
    else newObj[key2] = key2val;
//return new object containing those keys and corresponding values found in "keys" array at perimeter two.
  return newObj;
};

utilities.withoutSymbols = function(input){
//create var allowed which is a string of characters we want in the result(includes a space for "white space")
    var allowed = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//make allowed string an array
    var allowed = allowed.split('');
//make input an array
    var input = input.split('');
//creat a new empty array
    var arr = [];
//loop through all items in the input array
    for(var i=0; i < input.length; i++){
//loop through all items in the allowed array
        for(var k = 0; k < allowed.length; k++){
//if any items in input array match with those in allowed array
            if(input[i] === allowed[k]){
//send them to the empty array
                arr.push(input[i])
            }
        }
    }
//return the empty array, rejoined as a string.
  return arr.join('');
};

utilities.countWords = function(input){
//if the input to function is an empty string, display 0
    if(input === "") return 0;
//split the string into characters
    var inputArr = input.split('');
//loop through chracters
    for(var i=0; i < inputArr.length; i++){
//if any character is not alphanumeric, e.g "-"
      if(validator.isAlphanumeric(inputArr[i]) === false)
//replace it with a blank space
      inputArr[i] = " ";
    }
//join the array of single chracters
  var inputArr = inputArr.join('');
//split array again, this time by spaces
  var inputArr = inputArr.split(' ');
//loop through items
  for(var i=0; i < inputArr.length; i++){
//and if any empty items are found
      if(inputArr[i] == "")
//delete them
        inputArr.splice(i, 1);
  }
//return the array length to the console.
  return inputArr.length;
};

// })(window);

// window.utilities = utilities;
