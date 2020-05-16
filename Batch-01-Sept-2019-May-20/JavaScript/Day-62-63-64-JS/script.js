/** 
* Author: CUBKS
* Date: 18-Dec-2019
* Updated log: 19-Dec-2019
* Updated log: 21-Dec-2019
* 
* @function Calculator
* @description Mathmatics Library 
* @Copyright: CUBKS 
* @Licence: MIT Licence

* #https://github.com/chandrakantbk/Dev-Trainings

* JavaScript Hoisting
*/

var test;

function Calculator(){
	/** Function Body */
	/** Set of statements */
	
	/** +  */
	
	var a = 10;
	var b = 10;
	
	var c;
	
	c = a + b;
	
	b = test; //b=40
	
	test = 30 + test; //test = 70
	
	console.log( c ); //20
	
	console.log( test ); //70
	
	var add = 50 + 60;
	
	
	var str = "Name" + 50; // "Name50"
	var str2 = "Name" + 50 + 100; // "Name50100"
	
	var str3 =  100  + "Name" + 50 + 200; // "100Name50200"
	
	var doubleNumber = 40 + 10.2500; //50.2500
	
	var Problem = 0.1 + 0.2; //0.3 //0.30000000000000004
		
	
}

test = 40;

Calculator();


var myfunVal = fun();

function fun(){
	var a = 20;
	var b = 10;
	
	var test = "10";
	
	var c;
	
	
	c = b + test; 
	
	console.log("kjjksdf");
	
	console.log(c)
	
	return c;
	
	
}


function run(){
	var a=10, b = 20;
	
	var c = a+b;
	
	console.log( c );
	
}

//Variable hoisting
//Datatypes in JavaScript
//functions in javascript








