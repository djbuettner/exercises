console.log("5.1 Flattening\n");

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// → [1, 2, 3, 4, 5, 6]

console.log("\n\n5.2 Your own loop\n");

// Your code here.
function loop(start, testfnc, updatefnc, bodyfnc) {
  for( let value = start; testfnc(value); value = updatefnc(value)) {
    bodyfnc(value);
  }
}
loop(3, n => n > 0, n => n - 1, console.log);
// ? 3
// ? 2
// ? 1


console.log("\n\n5.3 Everything\n");

function every(array, test) {
  // Your code here.
  for ( let value of array ) {
    if ( !test(value) )
      return false;
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
// ? true
console.log(every([2, 4, 16], n => n < 10));
// ? false
console.log(every([], n => n < 10));
// ? true


console.log("\n\n5.4  Dominant writing direction\n");

console.log("Could not solve");


