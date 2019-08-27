//array counter

var array = [1,4,4,5,5,7,5,3,3,5,7,8,8,5,3,3,3,5,6,7,9,0];
var obj = {};
for (var i=0; i < array.length; i++) {
	obj[array[i]] = (obj[array[i]] || 0 ) +1;
}
console.log(obj);

//fizz buzz

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