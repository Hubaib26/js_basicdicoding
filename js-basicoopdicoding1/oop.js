/* Object-Oriented Programming
Object-Oriented Programming (OOP) adalah salah satu paradigma dalam pemrograman yang berfokus pada 
pembuatan sebuah objek dan interaksi dengan objek-objek tersebut. Di OOP, objek merupakan sebuah entitas 
yang terdiri dari dua hal, yakni properties dan methods.

Properti merupakan nilai di dalam objek yang menyimpan informasi tentang objek tersebut.
Method merupakan fungsi yang menggambarkan aksi yang dapat dilakukan oleh objek tersebut.
Paradigma OOP kerap digambarkan dengan kehidupan dunia nyata. Objek di dalam OOP, bisa kita anggap 
seperti objek yang ada di dunia nyata. Kita ambil contoh, mobil. Dalam OOP, sebuah mobil dapat dilihat 
sebagai objek yang memiliki beberapa properti seperti merek, warna, kecepatan maksimal, dan nomor rangka. 
Objek tersebut memiliki kemampuan atau method seperti maju, mundur, dan belok. */

/* Lalu, seperti apa bentuk objek mobil dalam bentuk JavaScript? Sama seperti yang sudah Anda ketahui di 
modul Struktur Data, objek mobil dibuat dengan menggunakan tanda kurung kurawal dan untuk method-nya, 
Anda cukup buat properti yang merupakan sebuah fungsi, contohnya seperti ini. */

const car = {
  // properties
  brand: "Ford",
  color: "red",
  maxSpeed: 200,
  chassisNumber: "f-1",
  // methods
  drive: () => {
    console.log("driving");
  },
  reverse: () => {
    console.log("reversing");
  },
  turn: () => {
    console.log("turning");
  },
};

console.log(car.brand); // Ford
console.log(car.color); // red
console.log(car.maxSpeed); // 200
console.log(car.chassisNumber); // f-1
car.drive(); // driving
car.reverse(); // reversing
car.turn(); // turning

/* Kode di atas merupakan contoh objek mobil atau car di JavaScript. Seperti yang Anda lihat, 
objek car memiliki properti brand, color, maxSpeed, dan chassisNumber; dan juga method drive, reverse, dan 
turn. Kita bisa akses nilai properti dan panggil method yang ada di dalam objek tersebut. */

/* Di JavaScript untuk membuat sebuah objek terlihat mudah, bukan? Namun, masalah yang dipecahkan oleh 
paradigma OOP tidak hanya sebatas membuat objek sederhana saja. Seiring berkembangnya aplikasi, 
pembuatan objek akan semakin banyak dan saling berinteraksi satu dengan yang lainnya. Sehingga, 
kita harus mengetahui cara efektif mengelola objek termasuk cara membuatnya. */

/* Mari kita angkat sebuah masalah baru dari contoh kode di atas. Bagaimana jika Anda ingin membuat objek 
dua mobil baru dengan nilai yang berbeda? Haruskah Anda mendefinisikan properti dan method yang sama 
secara berulang seperti contoh kode di bawah ini? */

const car1 = {
  brand: "Ford",
  color: "red",
  maxSpeed: 200,
  chassisNumber: "f-1",
  drive: () => {
    console.log("driving");
  },
  reverse: () => {
    console.log("reversing");
  },
  turn: () => {
    console.log("turning");
  },
};

const myCar1 = {
  brand: "Tesla",
  color: "black",
  maxSpeed: 250,
  chassisNumber: "t-1",
  drive: () => {
    console.log("driving");
  },
  reverse: () => {
    console.log("reversing");
  },
  turn: () => {
    console.log("turning");
  },
};

const yourCar1 = {
  brand: "BMW",
  color: "white",
  maxSpeed: 300,
  chassisNumber: "b-1",
  drive: () => {
    console.log("driving");
  },
  reverse: () => {
    console.log("reversing");
  },
  turn: () => {
    console.log("turning");
  },
};

console.log(car1.brand); // Ford
console.log(car1.color); // red
console.log(car1.maxSpeed); // 200
console.log(car1.chassisNumber); // f-1
car1.drive(); // driving
car1.reverse(); // reversing
car1.turn(); // turning

console.log(myCar1.brand); // Ford
console.log(myCar1.color); // red
console.log(myCar1.maxSpeed); // 200
console.log(myCar1.chassisNumber); // f-1
myCar1.drive(); // driving
myCar1.reverse(); // reversing
myCar1.turn(); // turning

console.log(yourCar1.brand); // Ford
console.log(yourCar1.color); // red
console.log(yourCar1.maxSpeed); // 200
console.log(yourCar1.chassisNumber); // f-1
yourCar1.drive(); // driving
yourCar1.reverse(); // reversing
yourCar1.turn(); // turning
