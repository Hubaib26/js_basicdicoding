const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

/* output:
Seafood
Salad
Nugget
Soup
*/

const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];

const [, , thirdFood1] = favorites;

console.log(thirdFood1);

/* output:
Nugget
*/

const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorites2;

console.log(myFood);
console.log(herFood);

/* output:
Seafood
Salad
*/

var a = 1;
var b = 2;
var temp;

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

temp = a;
a = b;
b = temp;

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

let c = 1;
let d = 2;

console.log("Sebelum swap");
console.log("Nilai c: " + c);
console.log("Nilai d: " + d);

[c, d] = [d, c]; // menetapkan nilai c dengan nilai d dan nilai d dengan nilai c.

console.log("Setelah swap");
console.log("Nilai d: " + c);
console.log("Nilai c: " + d);

/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/
const favorites3 = ["Seafood"];

const [myFood3, herFood3 = "Salad"] = favorites3;

console.log(myFood3);
console.log(herFood3);

/* output:
Seafood
Salad
*/
