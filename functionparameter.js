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
