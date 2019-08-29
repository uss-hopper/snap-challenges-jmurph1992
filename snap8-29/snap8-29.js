// In pseudocode, write a function that takes a string and returns it with all vowels (not including y) removed.

let string = "Hello, my name is Justin!";

function removeVowels(string) {
	return string.replace(/[aeiou]/gi, '');
}

console.log(removeVowels(string));

// Instructor answer
// function removeVowels(string mystring) {
// 	vowels = [a,e,i,o,u]
// 	string noVowels []
// 	foreach(character in myString) {
// 		if(!(character in vowels)) {
// 			noVowels = noVowels + character;
// 		}
// 	}
// 	return noVowels;
// }

// In pseudocode, write a function that takes an array of numbers and returns the greatest number in the array.

let array = [25, 876, 1, 58, 94, 272573, 742, 1];

function biggestNumber(array) {
	return Math.max(...array);
}
	console.log(biggestNumber(array));

// Instructor answer
// function greatestNumbers(array myNumbers) {
// 	previousNumber = null;
// 	for(i =0; i < myNumbers.length; i++) {
// 		currentValue = myNumbers[i];
// 		if(previousNumber = null) {
// 			previousNumber = currentValue;
// 		} elseif(currentValue > previousNumber) {
// 			previousNumber = currentValue;
// 		}
// 	}
// 	return previousNumber;
// }


// 	In pseudocode, write a function that computes the first 100 numbers in the Fibonacci sequence. The Fibonacci sequence is created by adding the two previous numbers in the sequence together, and starts 1, 1, 2, 3, 5, 8...

var i;
var fib = [];

fib[0] = 0;
fib[1] = 1;

for(i =2; i <= 100; i ++) {
	fib[i] = fib[i -2] + fib[i - 1];

	console.log(fib[i]);
}

// Instructor Answer
// function f100() {
// 	array fibonacci = [1,1];
// 	for(i = 2; i <= 100; i ++) {
// 		fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
// 	}
// 	return fibonacci;
// }