const cities = [
  "Mumbai",
  "Hyderabad",
  "Delhi",
  "Mumbai",
  "Calcutta",
  "Chennai",
];
console.log(cities.length);
cities[4] = "Kolkatta";
console.log(cities);

// Methods in JS
// Adding an Element
// push() -- It will Push the elements in to an ARRAY

const teams = ["CSK", "SRH", "MI", "RCB"];
teams.push("GSK");
console.log(teams);

// unshift() -- Push the new value to starting of an ARRAY
teams.unshift("KKR");
console.log(teams);

// Romoving an element
// pop()
teams.pop();
console.log(teams);

// shift() -- it pops the value from an ARRAY in starting
teams.shift();
console.log(teams);

// Check the Element is present or not
// indexOf()
const RCBIndex = teams.indexOf("RCB");
console.log(RCBIndex); /**Returns the index value of RCB*/

/**If the element is not present in the array then it returns -1 */
const LSGIndex = teams.indexOf("LSG");
console.log(LSGIndex); //-1 is answer

// includes() /** it is used to find the element in an ARRAY -- It returns True or False */
const SRHIndex = teams.includes("SRH");
console.log(SRHIndex); // true

// slice()  /** It will Helps to trim an array but it will not make changes to the original array */
console.log(teams);// ['CSK', 'SRH', 'MI', 'RCB']
console.log(teams.slice(2)); // it removes first 2 elements from ARRAY
//['MI', 'RCB']
console.log(teams.slice(-1)); // It will retain only the last element in an ARRAY
//['RCB']

// splice() /** It will add the elements in between the ARRAY */
// splice(Index, DeleteCount, Insert)
teams.splice(2, 0, "GT");
console.log(teams); //['CSK', 'SRH', 'GT', 'MI', 'RCB']
teams.splice(2, 1, "PBKS");
console.log(teams); //['CSK', 'SRH', 'PBKS', 'MI', 'RCB']

// concat() /** Merges 2 or more ARRAYS */
// and it will not do any changes to original ARRAY
const teams2 = ["INDIA", "AUSTRAILIA", "New Zealand"];
const mergedTeams = teams.concat(teams2);
console.log(mergedTeams); //['CSK', 'SRH', 'PBKS', 'MI', 'RCB', 'INDIA', 'AUSTRAILIA', 'New Zealand']
