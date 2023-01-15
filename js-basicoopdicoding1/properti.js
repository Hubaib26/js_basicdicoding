/* Properti dan Method
Di materi sebelumnya, Anda sudah tahu bahwa class (function constructor dalam JavaScript) 
merupakan sebuah object blueprint yang dapat membuat sebuah objek serupa lebih mudah. 
Dengan menggunakan class, kita bisa terhindar dari banyak duplikasi kode 
dalam membuat banyak objek sekaligus.

Di dalam sebuah class, kita dapat mendefinisikan dua hal, yaitu properti dan method. 
Di materi kali ini kita akan membahas lebih detail mengenai keduanya.


Properti
Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang terkandung dalam sebuah 
instance class. Contohnya, jika Anda membuat class Car, properti adalah informasi yang 
sekiranya terdapat pada sebuah mobil seperti brand, color, maxSpeed, dan chasissNumber. Contoh lain, 
jika Anda membuat class Mail, secara umum propertinya adalah sender, receiver, subject, dan body. */
/* class Car {
  constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
}

class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }
} */
/* Nilai dari properti biasanya diambil dari dari argumen constructor agar nilainya dapat bervariasi setiap kali membuat instance. */
class Car {
  constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
}

const car1 = new Car("BMW", "red", 200, "b-1");
const car2 = new Car("Audi", "blue", 220, "a-1");
const car3 = new Car("BMW", "black", 250, "b-2");

console.log(car1);
console.log(car2);
console.log(car3);

/* Output:
   Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'b-1' }
   Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'a-1' }
   Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'b-2' }
   */
/* Namun, adakalanya nilai properti juga bisa didefinisikan di dalam class itu sendiri. Contohnya, kita tidak ingin pengguna menentukan nomor rangka mobil secara mandiri, maka kita bisa memberi nilai properti chassisNumber langsung di dalam fungsi constructor. */
class Car1 {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    // Set a random chassis number
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }
}

const car4 = new Car1("BMW", "red", 200);
const car5 = new Car1("Audi", "blue", 220);
const car6 = new Car1("BMW", "black", 250);

console.log(car4);
console.log(car5);
console.log(car6);

/* Output:
  Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-558' }
  Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'Audi-215' }
  Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'BMW-799' }
  */

/* Properti Getter dan Setter
Secara standar, properti di dalam sebuah instance class bersifat mutable atau dapat diubah nilainya. 
Meskipun kita sudah menetapkan nilai chassisNumber oleh sistem, nyatanya nilai tersebut dapat diubah 
dengan mudah ketika objek mobil telah dibuat. */
class Car2 {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

const car = new Car2("BMW", "red", 200);
car.chassisNumber = "BMW-1";

console.log(car);

/* Output:
  Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-1' }
  */
/* Lalu, bagaimana cara memproteksi agar nilai dari properti chassisNumber tidak dapat diubah? Nah, 
ketika kita berhadapan dengan kasus seperti ini, kita bisa memanfaatkan properti getter dan setter.

Sebelum memecahkan masalah di atas, ketahuilah bahwa ada dua tipe properti, yaitu data property dan 
accessor property.

Data property merupakan properti yang sejauh ini kita lihat, properti yang langsung menampung sebuah 
nilai di dalam sebuah objek.

Sedangkan accessor property merupakan properti yang dikontrol oleh sebuah getter dan setter. 
Nilai yang didapatkan dari properti tersebut dikontrol oleh method get dan cara menetapkan nilai tersebut 
dikontrol oleh method set.

Berikut contoh dari accessor property */
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("John", "Doe");
console.log(user);
console.log(user.fullName);

user.fullName = "Fulan Fulanah";
console.log(user);
console.log(user.fullName);

/* Output:
  User { firstName: 'John', lastName: 'Doe' }
  John Doe
  User { firstName: 'Fulan', lastName: 'Fulanah' }
  Fulan Fulanah
  */

/* Di dalam class User, Anda bisa melihat bahwa terdapat data property firstName dan lastName. 
  Nilai dari properti tersebut ditetapkan via argumen constructor. Selain itu, Anda juga bisa melihat 
  sebuah method get fullName dan set fullname. Method tersebut merupakan accessor property yang mengatur 
  cara akses dari properti fullName.

Sebab kita menetapkan getter dan setter untuk properti fullName, maka kita bisa mengakses properti 
tersebut melalui instance User. Ketika kita coba mendapatkan nilai properti fullName dengan cara user.
fullName, method getter akan dijalankan dan nilai yang dikembalikan akan menjadi nilai dari properti 
tersebut. Begitu juga ketika kita coba menetapkan nilai properti fullName dengan cara 
user.fullName = “Fulan Fulanah”, kode di dalam method setter akan dijalankan. */

/* Catatan penting yang perlu Anda ketahui mengenai getter setter adalah:

method getter harus mengembalikan sebuah nilai dan nilai tersebut akan menjadi nilai properti;
method setter harus menerima satu argumen yang nilainya diambil dari operand ke dua ketika melakukan 
assignment operator.
Mari kita kembali ke masalah perubahan nilai properti chassisNumber. Bagaimana getter dan setter 
dapat memproteksi perubahan properti chassisNumber? Di JavaScript, pola yang sering diterapkan 
untuk memecahkan masalah ini adalah dengan memanfaatkan getter setter sebagai “wrapper” dari properti 
aslinya. Tujuannya agar getter setter bisa mengontrol akses seperti mendapatkan dan menetapkan nilai 
properti.

Untuk menerapkan pola ini, pertama kita perlu mengubah nama dari properti chassisNumber, 
misalnya dengan menambahkan tanda garis bawah di depannya menjadi _chassisNumber. */

class Car3 {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }
  get chassisNumber() {
    return this._chassisNumber;
  }
  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }
}
/* Lalu, kita tetapkan getter dan setter untuk properti chassisNumber. Untuk getter, 
kita kembalikan dengan nilai properti _chassisNumber.

Kita tidak ingin nilai chassisNumber dapat diubah sehingga untuk setter properti chassisNumber, 
cetak saja teks peringatan menggunakan console.log() seperti ini. 

Lantas, ketika kita membuat instance Car, nilai chassisNumber tidak dapat diubah.*/
class Car4 {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }
}

const caar = new Car4("BMW", "red", 200);
console.log(caar.chassisNumber);
caar.chassisNumber = "BMW-1";
console.log(caar.chassisNumber);

/* Output:
  BMW-232
  you are not allowed to change the chassis number
  BMW-232
  */
/* Catatan

Sebenarnya nilai chassisNumber masih bisa berubah jika kita mengubah langsung melalui 
properti _chassisNumber. Namun, ketahuilah bahwa mengubah atau mendapatkan nilai 
properti objek yang diawali dengan tanda underscore tidak direkomendasikan. Alasanya, 
komunitas JavaScript menyepakati bahwa hal properti yang diberi tanda underscore bukan untuk diakses, 
alias bersifat privat.

JavaScript versi ES2022 hadir dengan fitur private identifier. Dengan fitur tersebut, kita bisa 
membuat private property. Ini akan memecahkan masalah di atas. Private property akan kami bahas pada 
materi Member Visibility. */
