// OBJECTS
// 1. Create an empty object called dog
const dog = {
  name: "Musti",
  legs: 4,
  color: "black",
  age: 5,
  bark: function() {
    return "woof woof";
  }
};
// 2. Print the the dog object on the console
console.log(dog);
// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// dog.name = "Musti";
// dog.legs = 4;
// dog.color = "black";
// dog.age = 5;
// dog.bark = function() {
//   return "woof woof";
// };
// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = "labrador";
dog.getDogInfo = function() {
  return `Dogs name is ${this.name} and it has ${this.legs} legs. It is ${
    this.age
  } years old, it's ${this.color} and it barks '${this.bark()}'.`;
};
console.log(dog.getDogInfo());
// 6. Create an object literal called personAccount. It has firstName, lastName,
// incomes, expenses properties and it has totalIncome, totalExpense, acountInfo,addIncome,
// addExpence and accountBalance methods. Incomes is a set of incomes and its description and the
//same for expenses.

const personAccount = {
  firstName: "Maria",
  lastName: "Nieminen",
  incomes: { mainJob: 1000, sideJob: 600, passiveIncome: 800 },
  expenses: { rent: 500, food: 400, transport: 150, hobbies: 100 },
  totalIncomes: function() {
    return (
      this.incomes.mainJob + this.incomes.sideJob + this.incomes.passiveIncome
    );
  },
  totalExpenses: function() {
    return (
      this.expenses.rent +
      this.expenses.food +
      this.expenses.transport +
      this.expenses.hobbies
    );
  },
  accountInfo: function() {
    return `Total of incomes: ${this.totalIncomes()}\nTotal of expenses: ${this.totalExpenses()}`;
  },
  addIncome: function(property, value) {
    return (this.incomes.property = value);
  },
  addExpence: function(property, value) {
    return (this.expenses.property = value);
  },
  accountBalance: function() {
    return this.totalIncomes() - this.totalExpenses();
  }
};
console.log(personAccount);
console.log(personAccount.accountBalance());
// 7. Count logged in users,count users having greater than equal to 50 points from the following object.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: "asab@asab.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    point: 50
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

const countUsers = () => {
  let count = 0;
  for (let user in users) {
    if (users[user]["isLoggedIn"] === true) {
      count++;
    }
  }
  return count;
};

console.log(countUsers());
// users with 50 or more points
const moreThanFifty = () => {
  let count = 0;
  for (let user in users) {
    if (users[user]["points"] >= 50) {
      count++;
    }
  }
  return count;
};
console.log(moreThanFifty());

// FUNCTIONAL PROGRAMMING
// 1. Explain the difference between forEach, map, filter, and reduce.
// forEach loops through the items of an array like for loop, map makes a new array based on the condition inside the function but doesn't remove anything,
// filter makes a new array and filters the items throug a condition, reduce sums up the values in an array
// 2. ?? Define a call function before you them in forEach, map, filter or reduce.
function square(x) {
  return x * x;
}
const sideLengths = [1, 2, 3, 4];
const SQUARES = sideLengths.map(side => {
  square();
});
console.log(SQUARES);
// 3. Use forEach to console.log each country in the countries array.
const countries = [
  "Estonia",
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "Iceland"
];
countries.forEach(country => {
  console.log(country);
});
// 4. Use forEach to console.log each name in the names array.
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
names.forEach(name => {
  console.log(name);
});
// 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(number => {
  console.log(number);
});
// 6. Use map to create a new array by changing each country to uppercase in the countries array;
const upperCaseCountries = countries.map(country => country.toUpperCase());

console.log(upperCaseCountries);
// 7. Use map to create a new array by changing each number to square in the numbers array
const squareNumbers = numbers.map(number => number ** 2);
console.log(squareNumbers);
// 8. Use map to change to each name to uppercase in the names array
const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);
// 9. Use filter to filter out countries containing land.
const countriesWithLand = countries.filter(country => country.includes("land"));
console.log(countriesWithLand);
// 10.
const countriesWithSixLetters = countries.filter(
  country => country.length === 6
);
console.log(countriesWithSixLetters);
// 11. Use filter to filter out countries containing six letters and more in the counntry array.
const countriesWithMoreThanSix = countries.filter(
  country => country.length >= 6
);
console.log(countriesWithMoreThanSix);
// 12.
const countriesStartWithE = countries.filter(country => country[0] === "E");
console.log(countriesStartWithE);
// 13. Chain two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

// 14.Declare a function called getStringLists which takes an array as a parameter and then returns
// an array only with string items.

// 15. Use reduce to sum all the numbers in the numbers array.
let sum = numbers.reduce((accum, curr) => accum + curr);
console.log(sum);
// 16.Use reduce to concatinate all the countries and to produce this sentence:
//Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let countriesParagraph =
  countries
    .slice(0, countries.length - 1)
    .reduce((accum, curr) => accum + ", " + curr) +
  " and Iceland are north European countries.";
console.log(countriesParagraph);
// 17. Explain the difference between some and every
// some checks if the condition is true in some of the items of the array and
// every checks if the condition is true in every item of the array
// 18. Use some to check if some names' length greater than seven in names array
console.log(names.some(name => name.length > 7));
// 19. Use every to check if all the countries contain the word land
console.log(countries.every(country => country.includes("land")));
// 20. Explain the difference between find and findIndex.
// find returns the first item of an array that fills the condition, findIndex returns the index of the first item
// that fills the condition
// 21. Use find to find the first country containing only six letters in the countries array
console.log(countries.find(country => country.length === 6));
// 22. Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries.findIndex(country => country.length === 6));
// 23. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(countries.findIndex(country => country.includes("Norway")));
// 24. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(countries.findIndex(country => country.includes("Russia")));
// 25. Declare a function called categorizeCountries which returns an array of countries which have some common pattern
// (you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(pattern) {
  return countriesAll.filter(country => country.includes(pattern));
}
console.log(categorizeCountries("ia"));
console.log(categorizeCountries("stan"));
console.log(categorizeCountries("land"));
// 26. Create a function which return an array of objects, which is the letter and the number of times the letter use
// to start with a name of a country.
// 27. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional
// programming to work on the countries.js array
function getFirstTenCountries() {
  return countriesAll.filter(country => countriesAll.indexOf(country) < 10);
}
console.log(getFirstTenCountries());
// 28. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries() {
  return countriesAll.filter(
    country => countriesAll.indexOf(country) > countriesAll.length - 11
  );
}
console.log(getLastTenCountries());
// or
console.log(countriesAll.slice(countriesAll.length - 10));
// 29. Find out which letter is used many times as intial for a country name from the conuntries array (eg. Finland, Fiji, France etc)

// random
function getString(arr) {
  const stringsInArray = arr.filter(element => typeof element === "string");
  return stringsInArray;
}
const mixed = ["Laura", 0, true, "banana"];
console.log(getString(mixed));
