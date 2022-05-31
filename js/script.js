// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from 0 up to the user number
 */
function calculateProduct() {
  // initialize the sum to 
  let counter = 1;
  let facAnswer = 1;
	
	// get the user number
	let userNum = parseInt(document.getElementById('userNum').value)	
	// use a for loop to calculate the product of the numbers using addition
	do {
		// build the string of sentences
		facAnswer = facAnswer * counter 
		
		//increment the counter
		counter = counter + 1
	} while (counter <= userNum)

	
  	// return the sum or product of the numbers back to html
  	document.getElementById('display-results').innerHTML = "The factorial of your  positive integer is = " + facAnswer
}