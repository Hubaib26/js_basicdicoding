/* Overriding
Konsep lain yang lekat dengan pewarisan adalah overriding. Overriding di dalam OOP merupakan fitur 
yang memperbolehkan subclass mendefinisikan implementasinya sendiri pada sebuah method yang sebenarnya 
sudah didefinisikan pada superclass-nya. Overriding diterapkan ketika kita ingin menetapkan implementasi 
yang spesifik di subclass pada sebuah method yang berasal dari superclass. Overriding juga biasa diterapkan 
ketika kita ingin menambah properti baru secara spesifik pada sebuah subclass.

Di JavaScript dan bahasa pemrograman yang menerapkan paradigma OOP lainnya, overriding umumnya dapat
dilakukan pada constructor dan method class.


Constuctor Overriding
Constructor merupakan method spesial pada class yang akan dipanggil pada saat pembuatan instance, lebih 
tepatnya ketika menggunakan keyword new diikuti dengan nama class. */
//const mailService = new MailService(); // akan memanggil method constructor pada class MailService
/* Constructor akan mengembalikan objek yang merupakan instance dari class tersebut. Perbedaan dengan 
method pada umumnya, pada constructor kita tidak perlu menulis return ketika hendak mengembalikan nilai 
karena sudah dilakukan secara implisit.

Di dalam constructor, biasanya kita mendefinisikan properti dan menetapkan nilainya. Contoh, pada superclass 
MailService, kita mendefinisikan properti sender yang nilainya diambil dari argumen method constructor. */
// class MailService {
//   constructor(sender) {
//     this.sender = sender;
//   }

//   // ... method lain disembunyikan
// }

// const mailServicee = new MailService("someReceiver");
// console.log(mailService);

/* Output:
  MailService { sender: 'someReceiver' }
  */

/* 
  Ketika kita melakukan pewarisan, sering kali kita perlu menambahkan properti baru yang spesifik 
  hanya pada subclass tertentu. Contoh, pada WhatsAppService yang merupakan subclass dari MailService, 
  kita membutuhkan properti yang mengindikasikan akun bisnis atau bukan, sehingga kita perlu membuat 
  properti baru bernama isBusiness hanya pada subclass tersebut. Agar bisa melakukan ini, 
  kita perlu melakukan constructor overriding.
 */
/* class MailService {
  constructor(sender) {
    this.sender = sender;
  }
}
class WhatsAppService extends MailService {
  // overriding constructor
  constructor(sender, isBusiness) {
    super(sender);

    this.isBusiness = isBusiness;
  }
}

class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }

  // Overriding method
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`);
  }
}

const mailService = new MailService("someSender");
const whatsappService = new WhatsAppService("+6281234567890", true);

mailService.sendMessage("Hai, apa kabar?", "someReceiver");
whatsappService.sendMessage("Hai, apa kabar?", "+6289876543210"); */

/**
 * Output:
 * someSender sent Hai, apa kabar? to someReceiver
 * +6281234567890 sent Hai, apa kabar? to +6289876543210 via WhatsApp
 */

class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }

  // Overriding method
  sendMessage(message, receiver) {
    // memanggil method sendMessage pada superclass
    super.sendMessage(message, receiver);

    console.log("message sent via WhatsApp");
  }
}

const mailService1 = new MailService("someSender");
const whatsappService1 = new WhatsAppService("+6281234567890", true);

mailService1.sendMessage("Hai, apa kabar?", "someReceiver");
whatsappService1.sendMessage("Hai, apa kabar?", "+6289876543210");

/**
 * Output:
 * someSender sent Hai, apa kabar? to someReceiver
 * +6281234567890 sent Hai, apa kabar? to +6289876543210
 * message sent via WhatsApp
 */
