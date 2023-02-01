/* Method
Method adalah sebuah fungsi yang berada di dalam sebuah class dan dapat diakses melalui instance 
Class tersebut. Method biasanya mengindikasikan hal yang dapat dilakukan oleh sebuah class. 
Bila kita berbicara tentang class Car, method yang ada bisa drive(), reverse(), dan turn(). 
Jika pada class Mail, method bisa berupa send(), sendLater(), saveAsDraft(). */
class Car1 {
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

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
}

class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }

  // Methods
  send() {
    console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
  }

  sendLater(delay) {
    console.log(`Sending after ${delay} ms`);

    setTimeout(() => {
      this.send();
    }, delay);
  }

  saveAsDraft() {
    console.log("Saving mail as draft");
  }
}
/* Sama seperti fungsi JavaScript, method bisa menerima sebuah argumen. Contohnya pada method turn() 
di class Car dan sendLater di class Mail, kami memanfaatkan argumen direction dan delay untuk menetapkan 
arah dan waktu delay dalam menjalankan method-nya.

Selain argumen, method juga dapat memiliki akses ke nilai properti atau method lainnya melalui keyword this.

Method di dalam class hanya bisa dijalankan melalui instance dari class tersebut.

 */
const caar = new Car1("BMW", "red", 200);

caar.drive();
caar.turn("left");
caar.reverse();

/* Output:
BMW red is driving
BMW red is turning left
BMW red is reversing
*/
/* Method memang kental dengan “kemampuan” yang bisa dilakukan oleh sebuah class, tetapi praktik nyatanya 
membuat method tidak hanya untuk itu. Method juga biasa dibuat ketika kita perlu mengekstraksi sebuah 
kode agar lebih mudah untuk dibaca dan method tersebut hanya digunakan untuk kebutuhan internal saja.

Contoh, pada class Car, kita menetapkan nilai _chassisNumber dengan nilai random yang ditulis di dalam 
constructor. Hal itu membuat kode di dalam constructor menjadi sulit dibaca karena dicampuri dengan 
logika dalam menghasilkan angka acak.

Agar kode di dalam constructor lebih rapi, kita bisa membuat method yang digunakan internal 
yang menampung kode random tersebut. Biasanya method yang hanya digunakan secara internal disebut 
dengan private dan namanya diawali dengan tanda underscore. */
/* class car2 {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = this._generateChassisNumber();
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }

  _generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}
const caaar = new Car2("BMW", "red", 200);

caaar.drive();
caaar.turn("left");
caaar.reverse();
 */
/* Member Visibility
Member visibility bisa disebut juga sebagai hak akses pada sebuah properti dan method di dalam class. 
Secara default, seluruh properti dan method yang dibuat di dalam class bersifat public, 
alias dapat diakses di luar dari kode class via instance. Selain public, 
kita juga bisa membuat properti dan method bersifat private, terutama ketika kita ingin properti atau method 
tersebut hanya digunakan dalam cakupan kode di dalam class saja (penggunaan internal).

Di pembahasan sebelumnya, kita sudah mengenal bahwa pemberian tanda underscore pada properti 
atau method bisa dijadikan sebagai penanda bahwa ia dianggap private. Masalahnya adalah cara tersebut 
tidak benar-benar memproteksi hak aksesnya. Contoh, pada class Car, kita sudah membuat 
properti _chassisNumber dan method _generateChassisNumber() dengan tanda underscore. Namun, 
kedua member tersebut tetap saja masih bisa di akses via instance, bahkan kita bisa mengubah nilainya. */

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = this._generateChassisNumber();
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }

  _generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

const car = new Car("BMW", "red", 200);

console.log(car._chassisNumber);
car._chassisNumber = "BMW-1";
console.log(car._chassisNumber);
console.log(car._generateChassisNumber());

/* Output:
  BMW-85
  BMW-1
  BMW-667
  */
/* 
Untuk menyelesaikan masalah ini, JavaScript versi ES2022 secara resmi mengenalkan cara dalam menetapkan 
hak akses private pada properti dan method objek, yakni dengan menambahkan tanda # di awal penamaan 
properti atau method.
 */
/* class Car3 {
  #chassisNumber = null;

  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = this.#generateChassisNumber();
  }

  get chassisNumber() {
    return this.#chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }

  #generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}
const caaaar = new Car3("BMW", "red", 200);

console.log(caaaar._chassisNumber);
caaaar._chassisNumber = "BMW-1";
console.log(caaaar._chassisNumber);
console.log(caaaar._generateChassisNumber()); */
/* Khusus untuk properti yang sifatnya private, Anda harus mendeklarasikan propertinya di enclosing 
  class seperti ini. */
/* class Car4 {
  #chassisNumber = null; // enclosing class

  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = this.#generateChassisNumber();
  }

  // ... kode lainnya.
} */
/* Dengan begitu, properti dan method yang sifatnya private tidak dapat diakses di luar dari 
  cakupan kode class, misalnya via instance.

 */
