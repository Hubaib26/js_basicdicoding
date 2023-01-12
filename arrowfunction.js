/* S6 memperkenalkan fungsi baru yang dinamakan arrow function expression atau lebih dikenal 
sebagai arrow function. Arrow function mirip seperti regular function secara perilaku, tetapi berbeda 
dalam penulisannya. Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ).
Tentunya penulisan arrow function ini akan lebih singkat */

// function declaration
function sayHello(greet) {
  console.log(`${greet}!`);
}
console.log(sayHello("hubaibbb"));
// function expression
const sayName1 = function (name) {
  console.log(`Nama saya ${name}`);
};
console.log(sayName1("hubaibaa"));
/* Pada arrow function kita tidak perlu menuliskan keyword function setiap membuat fungsi. 
Kita tetap menuliskan parameter di dalam tanda kurung lalu diikuti dengan tanda panah (=>) 
sebelum kurung kurawal. */

const sayName = (name) => {
  console.log(`Nama saya ${name}`);
};
console.log(sayName("hubaib"));

/* Namun, jika kita sama sekali tidak membutuhkan parameter, 
maka kita tetap menuliskan tanda kurung namun kosong seperti ini: */
const sayHello3 = () => {
  console.log("Selamat pagi semuanya!");
};

sayHello();

/* output
Selamat pagi semuanya!
 */

/* Namun, jika kita sama sekali tidak membutuhkan parameter, 
maka kita tetap menuliskan tanda kurung namun kosong seperti ini: */

const sayName2 = (name) => console.log(`Nama saya ${name}`);
console.log(sayName2("Leia"));

const sayHello2 = () => console.log("Selamat pagi semuanya!");
console.log(sayHello2());

/* output
Nama saya Leia
Selamat pagi semuanya!
 */

/* Ketika sebuah fungsi perlu mengembalikan nilai, 
kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris). */

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
12
 */
