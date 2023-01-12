const user = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
*/

const user1 = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
  "home world": "Tattooine",
};
console.log(`Halo, nama saya ${user1.firstName} ${user1.lastName}`);
console.log(`Umur saya ${user1.age} tahun`);
console.log(`Saya berasal dari ${user1["home world"]}`);
/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/

const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);
/* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red'
}
 */

const spaceship1 = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
};

spaceship1.color = "Glossy red";
spaceship1["maxSpeed"] = 1300;
spaceship1.class = "Light freighter";

console.log(spaceship1);

/* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red',
  class: 'Light freighter'
}
*/

const spaceship2 = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
};

spaceship2.color = "Glossy red";
spaceship2["maxSpeed"] = 1300;

delete spaceship.manufacturer;

console.log(spaceship2);

/* output
{ name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
 */
