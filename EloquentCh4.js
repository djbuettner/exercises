console.log("4.1 The sum of range\n");

// Your code here.
function range(start, end, increment) {
  let array = [];
  for(i = start; start < end ? i <= end : i >= end; i = i + (increment == undefined ? 1 : increment) ) {
    array.push(i);
  }
  return array;
}
function sum(array) {
  total = 0;
  for(i = 0; i < array.length; ++i) {
    total += array[i];
  }
  return total;
}
    
console.log(range(1, 10));
// ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// ? [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// ? 55


console.log("\n\n4.2 Reversing an array");

// Your code here.
function reverseArray(array) {
  let rarray = [];
  while ( (value = array.pop() ) != undefined ) {
    rarray.push(value);
  }
  return rarray;
}
function reverseArrayInPlace (array ) {
  for(i = 0; i < ( array.length / 2 ); ++i) {
    x = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = x;
  }
}
console.log(reverseArray(["A", "B", "C"]));
// ? ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// ? [5, 4, 3, 2, 1]


console.log("\n\n4.3 A list\n");

// Your code here.
function arrayToList(array) {
  let list = null;
  for(i = array.length -1; i >= 0; --i) {
    list = { value: array[i], rest: list };
  }
  return list;
}
function listToArray(list) {
  let array= [];
  for(let top = list; top; top = top.rest) {
    array.push(top.value);
  }
  return array;
}
function prepend(value, list) {
  return { value, rest: list };
}
function nth(list, index) {
  if ( list == undefined )
  	return undefined;
  if ( index == 0 ) 
    return list.value;
  else
    return nth(list.rest, index - 1);
}
console.log(arrayToList([10, 20]));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// ? [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// ? 20


console.log("\n\n4.4 Deep comparison\n");

// Your code here.
function deepEqual(obj1, obj2) {
  if ( obj1 === obj2)
    return true;
  if ( obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 !="object")
    return false;
  let keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);
  if ( keys1.length != keys2.length )
    return false;
  for (let key of keys1) {
    if ( !keys2.includes(key) || !deepEqual(obj1[key], obj2[key]) ) 
      return false;
  }
  return true;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// ? true
console.log(deepEqual(obj, {here: 1, object: 2}));
// ? false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// ? true

