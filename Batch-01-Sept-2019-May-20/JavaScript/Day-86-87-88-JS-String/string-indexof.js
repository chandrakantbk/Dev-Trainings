let str = 'Hello, I am from oman. I am a student and as a student I study hard.';
 
let target = 'a'; // let's look for it

let pos = 0;

while ( 1 ) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log( `Found at ${foundPos}` );
  
  pos = foundPos + 1; // continue the search from the next position
}


/*

let target = [ "bad", "am", "student" ]  //'am'; // let's look for it
let no_of_times  = 0;

let pos = 0;
  
  // for-in
  
  for( let ch in target){
	
     let searchVal = target[ch]; //bad
	  
	 while ( true ) {
		 
		  var foundPos = str.indexOf(searchVal, pos);
		 
		  if (foundPos == -1) break;

		  console.log( "Found at "+foundPos );
		  
		  pos = foundPos + 1; // continue the search from the next position
		  
		  no_of_times++;
		  
	 }
	 
	console.log( searchVal + ": found :"+no_of_times );
	 	 
  }
  
  
  */