/* /**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */

// TODO

/**
 * Jangan hapus kode di bawah ini
 */
//gunakan cara ini untuk menjawab
const minimal = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};
console.log(minimal(4, 1));
console.log(minimal(3, 2));
console.log(minimal(3, 3));

const minimal1 = (a, b) => {
  if (a < b) {
    return a;
  } else if (a == b) {
    return b;
  } else {
    return b;
  }
};
console.log(minimal1(4, 1));
console.log(minimal1(3, 2));
console.log(minimal1(3, 3));

//bisa menggunakan cara1
const power2 = (a, b = 2) => {
  let result = a ** b;
  console.log(`${a}^${b} = ${result}`);
};
console.log(power(7, 3)); // 343
console.log(power(3, 3)); // 27
console.log(power(4, 0.5)); // 2

//bisa menggunakan cara2
const power1 = (a, b) => a ** b;
console.log(power1(7, 3)); // 343
console.log(power1(3, 3)); // 27
console.log(power1(4, 0.5)); // 2

//bisa menggunakan cara yang lebih simple dengan Math.pow untuk jawaban
function power(a, b) {
  return Math.pow(a, b);
}
console.log(power(7, 3)); // 343
console.log(power(3, 3)); // 27
console.log(power(4, 0.5)); // 2
