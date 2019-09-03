// Map this array of text to the DOM.
//
// 	['Bob', 'Jim', Matt', 'Mary', 'Suzy', ' Sarah']
//
// hint: Each array element must appear in it's own html tag in the browser.

const names = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah'];

names.map(name => {
//create p
	const newName = document.createElement("p");
//create content to add to p
	const newContent = document.createTextNode(name);
//add text to p
	newName.appendChild(newContent);
//append p tag with content to the div with the id of names
	document.getElementById("dom").appendChild(newName)
});