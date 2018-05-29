console.log("2.1 Looping a triangle\n");

// Your code here.
line = "";
for (i = 1; i <= 7; ++i) {
  line = line + '#';
  console.log(line);
}

console.log("\n\n2.2 FizzBuzz\n");

for (i=1; i <= 100; ++i) {
  line = "";
  if ( i % 3 == 0 ) 
    line = "Fizz";
  if ( i % 5 == 0 )
    line = line + "Buzz";
  else if ( i % 3 != 0 ) 
    line = i;
  console.log (line);
}

console.log("\n\n2.3 Chessboard\n");

// Your code here.
for ( n = 1; n <= 8; ++n ) {
  line = "";
  for ( m = 1; m <= 8; ++m) {
    if ( ((n + m) % 2) == 0 ) {
      line += " ";
    }
    else {
      line += "#";
    }
  };
  console.log(line);
};

