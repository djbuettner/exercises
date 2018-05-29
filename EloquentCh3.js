console.log("3.1 Minimum\n");

// Your code here.
function min (x, y) {
  return(Math.min(x, y));
}
console.log(min(0, 10));
// ? 0
console.log(min(0, -10));
// ? -10


console.log("\n\n3.2 Recursion\n");

// Your code here.
function isEven(n) {
  if( n < 0 ) return isEven(-n);
  if( n == 0 ) return true;
  if( n == 1 ) return false;
  return isEven(n-2); 
}
console.log(isEven(50));
// ? true
console.log(isEven(75));
// ? false
console.log(isEven(-1));
// ? ??


console.log("\n\n3.3 Bean counting\n");

// Your code here.
function countChar( x, y ) {
  n = 0;
  for(i = 0; i <= x.length; ++i) {
    if (x[i] == y)
      ++n;
    // console.log(x[i] + ":" + y);
  }
  return n;
}
function countBs (x) {
  return countChar(x, "B");
}
console.log(countBs("BBC"));
// ? 2
console.log(countChar("kakkerlak", "k"));
// ? 4
