function greeting(name, language) {
  if (language === "English") {
    console.log(`Good Morning ${name}!`);
  } else if (language === "French") {
    console.log(`Bonjour ${name}!`);
  } else {
    console.log(`Selamat Pagi ${name}!`);
  }
}

greeting("Harry", "English");

/* output
Bonjour Harry!
*/

function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 2);
console.log(result);

/* output
20
*/

function greeting1(name, language) {
  if (language === "English") {
    return `Good Morning ${name}!`;
  } else if (language === "French") {
    return `Bonjour ${name}!`;
  } else {
    return `Selamat Pagi ${name}!`;
  }
}

let greetingMessage = greeting1("Harry", "French");
console.log(greetingMessage);

/* output
Bonjour Harry!
*/

const greeting = function (name, language) {
  if (language === "English") {
    return "Good Morning " + name + "!";
  } else if (language === "French") {
    return "Bonjour " + name + "!";
  } else {
    return "Selamat Pagi " + name + "!";
  }
};

console.log(greeting("Ron", "English"));

/* output
Good Morning Ron!
 */
