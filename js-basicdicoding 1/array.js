let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
*/

let myArray1 = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray1[1]);
/* output:
42.5
*/

let myArray2 = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray2[0]);
console.log(myArray2[1]);
console.log(myArray2[2]);
console.log(myArray2[3]);
console.log(myArray2[4]);
console.log(myArray2[5]);
console.log("Panjang nilai myArray adalah " + myArray2.length + ".");

/* output:
Cokelat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

const myArray3 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray3.push("JavaScript");
console.log(myArray3);

/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */

const myArray4 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray4.pop();
console.log(myArray4);

/* output
[ Cokelat, 42.5, 22, true ]
*/

const myArray5 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray5.shift();
myArray5.unshift("Apple");

console.log(myArray5);

/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/
const myArray6 = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray6[1];
console.log(myArray6);

/* output
[ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]
*/

const myArray7 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray7.splice(2, 1); // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray7);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/
