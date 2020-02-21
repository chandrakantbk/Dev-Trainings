let str = 'Hello, I am from oman. I am a student and as a student I study hard.';

let target = 'a'; // let's look for it

let pos = 0;

while ( 1 ) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  
  pos = foundPos + 1; // continue the search from the next position
}