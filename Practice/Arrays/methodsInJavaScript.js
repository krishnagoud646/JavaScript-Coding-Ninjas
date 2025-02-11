/** Methods in String */
let str = 'JavaScript is a dynamically is typed language';

// includes()
console.log(str.includes('is'));

// replace()
console.log(str.replace('is','was'));

// replaceAll()
console.log(str.replaceAll('is', 'was'));

// trim() -- Removes all leading and trailing spaces
console.log(str.trim());

// substring() -- it will remove the indexes before
console.log(str.substring(3));//aScript is a dynamically is typed language
console.log(str.substring(1 , 12)); // defines starting and ending
//avaScript i
console.log(str.substring(-4, 12)); // -4 will automatcally converts to 0
//JavaScript i

// slice()
console.log(str.slice(-3)); // returns last 3 chars
console.log(str.slice(-9, -3));

// split() -- converts string to an array
let words = str.split(" ");
console.log(words);
