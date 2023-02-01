/* Pewarisan
Dalam gambaran dunia nyata, banyak sekali objek yang berbeda, tetapi punya kemiripan tertentu. 
Jika kita berbicara mobil, tentu banyak ragam dari mobil mulai dari mobil transportasi, mobil balap, 
ambulan, truk, dan mobil yang lainnya. Walaupun semua ragam tersebut termasuk dalam kategori mobil, 
tetapi kemampuannya berbeda-beda. Contoh, mobil balap memiliki kemampuan untuk mengaktifkan mode sport, 
sehingga dapat melaju dengan cepat; mobil ambulan dapat mengaktifkan sinyal darurat; mobil truk dapat 
menggerakan container-nya untuk menurunkan muatan. Di sisi lain, mereka memiliki kesamaan yaitu 
sama-sama mobil yang memiliki merek, warna, kecepatan maksimal, dan nomor rangka.

Sama halnya pada objek pada pemrograman, kita sering sekali mendapati kasus membuat sebuah objek dengan 
spesifikasi yang serupa, tetapi memiliki beberapa perbedaan kecil. Contoh, objek EmailService dengan 
WhatsAppService. Kedua objek tersebut sama-sama layanan perpesanan, mereka dapat mengirim pesan dan 
membutuhkan properti sender. Namun, terdapat beberapa perbedaan contohnya WhatsApp bisa mengirim pesan 
secara broadcast, sedangkan email bisa mengirim pesan secara delay.

Pertanyaannya, bagaimana cara membuat class untuk kedua objek ini? Sebenarnya kita bisa saja membuat 
dua class, yakni WhatsAppService dan EmailService dengan cara seperti ini. */

class WhatsAppService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }

  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

class EmailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }

  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

/* Namun, jika kita lihat kode di atas, terdapat duplikasi kode untuk bagian yang “sama” antarkedua objek 
tersebut. Walau terlihat sederhana, tetapi tidak menutup kemungkinan kesamaan antarobjek tersebut terus 
berkembang dan kita perlu melakukan duplikasi kode di antara keduanya.

Oke, sekarang masalahnya adalah duplikasi kode, bagaimana cara menghindari duplikasi kode pada kasus ini? 
Sebenarnya, kita bisa saja membuat satu class yang mencakup kemampuan kedua objek tersebut. 
Sehingga kita bisa membuat instance WhatsAppService dan EmailService menggunakan satu class saja. */
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }

  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }

  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

const whatsapp = new MailService("+6281234567890");
const email = new MailService("dimas@dicoding.com");

/* Namun, cara ini membuat objek whatsapp dan email tidak memiliki perbedaan. Masalah yang ditimbulkan 
adalah terdapat kemampuan yang tidak dibutuhkan di antara kedua objek tersebut, seperti 
sendDelayedMessage() di whatsApp dan sendBroadcastMessage() yang di email. */

const whatsapp1 = new MailService("+6281234567890");
const email1 = new MailService("dimas@dicoding.com");

whatsapp.sendDelayedMessage(); // ???
email.sendBroadcastMessage(); // ???
/* Paradigma OOP menawarkan solusi dalam memecahkan masalah ini dengan konsep pewarisan atau lebih 
dikenal dengan istilah inheritance.

Dengan konsep inheritance, kita bisa mewariskan sifat-sifat yang berada di dalam sebuah class ke class
lain. Konsep inheritance cocok ketika kita ingin membuat objek yang mirip dan memiliki sedikit perbedaan 
seperti kasus yang kita hadapi.

Implementasinya, kita tampung seluruh sifat yang “sama” pada sebuah class induk (superclass) dan sifat 
tersebut nantinya diwarisi kepada class di bawahnya (subclass). Kemudian pada subclass, kita bisa 
menambahkan kemampuan lain yang lebih spesifik.

Contohnya, kita buat superclass bernama MailService yang mengandung seluruh sifat yang sama pada 
WhatsAppService dan EmailService. */

// Superclass
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}
/* Kemudian kita warisi sifat dari MailService ke subclass WhatsAppService dan EmailService dengan 
menggunakan keyword extends seperti ini. */

// Superclass
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

// Subclass
class WhatsAppService extends MailService {}

// Subclass
class EmailService extends MailService {}
/* Di dalam masing-masing subclass, kita bisa mendefinisikan method yang spesifik, seperti 
sendBroadcastMessage() untuk WhatsAppService dan sendDelayedMessage() untuk EmailService. */

// Subclass
class WhatsAppService extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

// Subclass
class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

/* Lihatlah bahwa di dalam subclass WhatsAppService dan EmailService kita tetap memiliki akses 
terhadap method dari superclass melalui keyword this karena subclass mewarisi sifat dari superclass.

Dengan teknik pewarisan seperti ini, akhirnya kita bisa membuat dua objek serupa dengan cara yang 
jauh lebih efektif. */

const whatsapp2 = new WhatsAppService("+6281234567890");
const email2 = new EmailService("dimas@dicoding.com");

whatsapp.sendMessage("Hello", "+6289876543210");
whatsapp.sendBroadcastMessage("Hello", ["+6289876543210", "+6282234567890"]);
whatsapp.sendDelayedMessage(); // Error

email.sendMessage("Hello", "john@doe.com");
email.sendDelayedMessage("Hello", "john@doe.com", 3000);
email.sendBroadcastMessage(); // Error
/* Pewarisan tanpa ES6 Class
Di awal penjelasan modul OOP, kami menunjukkan dua cara dalam membuat class atau constructor function. 
Anda sudah mengetahui cara melakukan pewarisan dengan sintaks class, tetapi bagaimana ya jika pewarisan 
tersebut dilakukan tanpa atau sebelum hadirnya sintaks class ES6?

Caranya adalah dengan teknik prototype inheritance seperti ini. */
function MailService(sender) {
  this.sender = sender;
}

MailService.prototype.sendMessage = function (message, receiver) {
  console.log(`${this.sender} sent ${message} to ${receiver}`);
};

function WhatsAppService(sender) {
  MailService.call(this, sender);
}

// Prototype inheritance
WhatsAppService.prototype = Object.create(MailService.prototype);
WhatsAppService.prototype.constructor = WhatsAppService;

WhatsAppService.prototype.sendBroadcastMessage = function (message, receivers) {
  for (const receiver of receivers) {
    this.sendMessage(message, receiver);
  }
};

function EmailService(sender) {
  MailService.call(this, sender);
}

// Prototype inheritance
EmailService.prototype = Object.create(MailService.prototype);
EmailService.prototype.constructor = EmailService;

EmailService.prototype.sendDelayedMessage = function (
  message,
  receiver,
  delay
) {
  setTimeout(() => {
    this.sendMessage(message, receiver);
  }, delay);
};

const whatsapp3 = new WhatsAppService("+6281234567890");
const email3 = new EmailService("dimas@dicoding.com");
whatsapp.sendMessage("Hello", "+6289876543210");
whatsapp.sendBroadcastMessage("Hello", ["+6289876543210", "+6282234567890"]);
email.sendMessage("Hello", "john@doe.com");
email.sendDelayedMessage("Hello", "john@doe.com", 3000);
/* Pewarisan dengan menggunakan keyword function memang lebih sulit untuk dibaca, alasan inilah 
yang membuat sintaks class hadir pada ES6. Namun, meskipun sintaks class terkesan sangat jauh berbeda 
dari function, sebenarnya implementasi keduanya sama-sama menggunakan prototype inheritance. 
Ingat! Class hanyalah cara lain dalam membuat constructor function.



Operator instanceof
Ketika menulis kode, kita seringkali kita perlu mengecek jenis dari objek tersebut. 
Salah satu cara mengetahui jenis objek adalah dengan mengecek rantai prototype-nya. 
Nah, untuk mengetes sebuah objek berdasarkan prototype dari constructor function atau class tertentu, 
kita bisa menggunakan operator instanceof. */
operand1 instanceof operand2;
/* 
Penjelasannya:

operand1: merupakan objek yang ingin dites prototype-nya.
operand2: merupakan constructor function atau class.
Berikut contoh penggunaan dari operator instanceof dalam mengecek objek whatsapp yang merupakan 
instance dari class WhatsAppService.
 */
const whatsapp4 = new WhatsAppService("+6281234567890");

console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false
/* Operator instanceof mengembalikan boolean. Operasinya akan menghasilkan nilai true jika objek 
yang dites (operand pertama) memiliki prototype yang merupakan operand kedua. Jika prototype operand 
pertama bukanlah operand kedua, operasinya akan menghasilkan nilai false.

Operator instanceof juga akan mengecek prototype secara berantai. Artinya, instanceof juga mengecek 
hingga prototype yang diwarisi oleh objek tersebut. */
const whatsapp5 = new WhatsAppService("+6281234567890");
const email5 = new EmailService("dimas@dicoding.com");

console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false
console.log(whatsapp instanceof MailService); // true

console.log(email instanceof EmailService); // true
console.log(email instanceof WhatsAppService); // false
console.log(email instanceof MailService); // true
