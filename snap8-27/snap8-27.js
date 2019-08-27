//array counter
// In pseudocode, write a function that takes an array of numbers, and returns another array that counts the number of times each number appears in the array.

var array = [1,4,4,5,5,7,5,3,3,5,7,8,8,5,3,3,3,5,6,7,9,0];
var obj = {};
for (var i=0; i < array.length; i++) {
	obj[array[i]] = (obj[array[i]] || 0 ) +1;
}
console.log(obj);

//instructor solution
//"PHP" SOLUTION

// Numbers = [1,7,5,1,3,5,1];
// for each (numbers as number) {
// 	count[number] ++
// 	count[numbers] = count[number] + 1
// }



//fizz buzz
// In pseudocode, write a function that takes two integers. For each integer in between those two numbers (inclusive), output 'fizz' if the number is even, 'buzz' if the number is divisible by 3, and 'baz' without 'fizz' or 'buzz' if the number is divisible by both.


for (i=0; i <= 50; i++) {
	if(i % 6 ===0)
		console.log("Baz");
	else if(i % 2 === 0)
		console.log("Fizz");
	else if(i % 3 === 0)
		console.log("Buzz");
	else
		console.log(i);
}