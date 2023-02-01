//Perbedaan mendasar antara keduanya antara lain:

//Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi. Contoh
function multiply(a, b) {
  return a * b;
}
//Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi. Contohnya:
console.log(multiply(4, 3));

//destructuring objects
/* Parameter dari fungsi dapat berupa tipe data apa pun, 
mulai dari string, number, object, bahkan fungsi lain.
Jika parameter dari fungsi adalah sebuah object, 
kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya. 
Contohnya seperti berikut: */

const user = {
  id: 24,
  displayName: "kren",
  fullname: "kylo kren",
};

function introduct({ displayName, fullname }) {
  console.log(`${displayName} is ${fullname}`);
}

introduct(user);

/* Default Parameters
Fungsi pada JavaScript tidak melakukan pengecekan terhadap jumlah maupun 
tipe argumen yang dimasukkan ke dalam parameter. 
Ini berarti kita bisa memasukkan argumen meskipun tidak sesuai 
dengan parameter yang telah didefinisikan. */

function exponentsFormula(baseNumber, exponent) {
  let result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);

/* output
2^undefined = NaN
*/

/* Seperti yang kita lihat pada contoh kode di atas, ketika argumen lebih sedikit dari parameternya, 
maka parameter yang tidak terdefinisi akan bernilai undefined. Sebagai solusi jika memungkinkan, 
kita bisa memberikan nilai default pada parameter. Nilai ini akan digunakan jika kita tidak memasukkan 
parameter. */

function exponentsFormula(baseNumber, exponent = 2) {
  let result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

/* output
3^2 = 9
*/

/* Rest Parameter
Masih ingat dengan spread operator (...)? 
Jika spread operator menyebarkan array menjadi beberapa elemen berbeda, 
rest parameter ini adalah kebalikan dari operator tersebut. Penasaran?

Rest parameter juga dituliskan menggunakan three consecutive dots (...).
Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array.
Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi dengan parameter 
yang tidak pasti. */

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));

/* out
15
*/
