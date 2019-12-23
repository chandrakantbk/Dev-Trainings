/** 
* Author: CUBKS
* Date: 18-Dec-2019
* Updated log: 19-Dec-2019
* Updated log: 21-Dec-2019
* Updated log: 23-Dec-2019 [Condtional Statements, Looping]
* 
* @function Calculator
* @description Mathmatics Library 
* @Copyright: CUBKS 
* @Licence: MIT Licence

* # https://github.com/chandrakantbk/Dev-Trainings

* JavaScript Hoisting
*/

var g_test = 40;
var o_test = {};
var a_test = [];
var b_test = true;

var result; //undefined


function Calculator( param1, param2, action ){ //2 Arguments
	/** Function Body */
	/** Set of statements */
	
	var _answer; //undefined
	
	var left = param1;
	var right = param2;
	
	/* 
		if( param1 < param2 ){
			left = param2;
			right = param1;
		}
	*/
	
	if( action == "add" ){
	   _answer = param1 + param2;
	   
	} else if( action == "sub" ) {
		
		_answer = left - right;
		
	} else { 
		
		_answer = "no action defined "
		
	}
	
	return _answer;
	
}

result = Calculator(10, 20, "sub"); //2  pamameters

//result = getPositiveVal( Calculator(10, 20, "sub")  ) ; //2  pamameters

function getPositiveVal( param ){
	
	let _val = param;
	
	if( param < 0 ){
		
		positive_val = param * -1;
		
	}
	
	return positive_val;
}

getPositiveVal( -20 )

