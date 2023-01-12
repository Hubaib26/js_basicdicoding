const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(favorites);
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/

const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites1);

/* output
Seafood Salad Nugget Soup
*/

const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites2 = [favorites2, others];

console.log(allFavorites2);

/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

const favorites3 = ["Seafood", "Salad", "Nugget", "Soup"];
const others3 = ["Cake", "Pie", "Donut"];

const allFavorites3 = [...favorites3, ...others3];

console.log(allFavorites3);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

const obj1 = { firstName: "Obi-Wan", age: 30 };
const obj2 = { lastName: "Kenobi", gender: "M" };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/

const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

const { firstName, age, isMale = false } = profile;

console.log(firstName);
console.log(age);
console.log(isMale);

/* output:
John
18
false
*/

const profile1 = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

const {
  firstName: localFirstName,
  lastName: localLastName,
  age: localAge,
} = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

/* output:
John
Doe
18
*/
