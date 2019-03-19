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
  for (let usersLoggedIn in users) {
    if (users.hasOwnProperty("isLoggedIn")) {
      // console.log(isLoggedIn);
      if (isLoggedIn === "true") {
        count = count + 1;
      }
    }
  }
  return count;
};

console.log(countUsers());
// FUNCTIONAL PROGRAMMING
// 1. Explain the difference between forEach, map, filter, and reduce.
// forEach loops through the items of an array like for loop, map makes a new array based on the condition inside the function but doesn't remove anything,
// filter makes a new array and filters the items throug a condition, reduce sums up the values in an array
// 2. Use forEach to console.log each country in the countries array.
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
// 3. Use forEach to console.log each name in the names array.
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
names.forEach(name => {
  console.log(name);
});
// 4.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(number => {
  console.log(number);
});
// 5. Use map to create a new array by changing each country to uppercase in the countries array;
const upperCaseCountries = countries.map(country => country.toUpperCase());

console.log(upperCaseCountries);
// 6. Use map to create a new array by changing each number to square in the numbers array
const squareNumbers = numbers.map(number => number ** 2);
console.log(squareNumbers);
// 7. Use map to change to each name to uppercase in the names array
const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);
// 8. Use filter to filter out countries containing land.
const countriesWithLand = countries.filter(country => country.includes("land"));
console.log(countriesWithLand);
// 9.
const countriesWithSixLetters = countries.filter(
  country => country.length === 6
);
console.log(countriesWithSixLetters);
// 10. same
// 11.
const countriesStartWithE = countries.filter(country => country[0] === "E");
console.log(countriesStartWithE);
// 12.
function getString(arr) {
  const stringsInArray = arr.filter(element => typeof element === "string");
  return stringsInArray;
}
const mixed = ["Laura", 0, true, "banana"];
console.log(getString(mixed));
// 13.
let sum = numbers.reduce((accum, curr) => accum + curr);
console.log(sum);
// 14.
//Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let countriesParagraph =
  countries
    .slice(0, countries.length - 1)
    .reduce((accum, curr) => accum + ", " + curr) +
  " and Iceland are north European countries.";
console.log(countriesParagraph);
// 15. Explain the difference between some and every
// some checks if the condition is true in some of the items of the array and
// every checks if the condition is true in every item of the array
// 16.
console.log(names.some(name => name.length > 7));
// 17.
console.log(countries.every(country => country.includes("land")));
// 18. Explain the difference between find and findIndex.
// find returns the first item of an array that fills the condition, findIndex returns the index of the first item
// that fills the condition
// 19.
console.log(countries.find(country => country.length === 6));
// 20.
console.log(countries.findIndex(country => country.length === 6));
// 21. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(pattern) {
  return countriesAll.filter(country => country.includes(pattern));
}
console.log(categorizeCountries("ia"));
console.log(categorizeCountries("stan"));
console.log(categorizeCountries("land"));

// 22. ???? Create a function which return an array of objects, which is the
//letter and the number of times the letter use to start with a name of a country.

// 23. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries() {
  return countriesAll.filter(country => countriesAll.indexOf(country) < 10);
}
console.log(getFirstTenCountries());
// 24. Declare a getLastTenCountries function which takes the last ten countries
function getLastTenCountries() {
  return countriesAll.filter(
    country => countriesAll.indexOf(country) > countriesAll.length - 11
  );
}
console.log(getLastTenCountries());
// or
console.log(countriesAll.slice(countriesAll.length - 10));
// 25. ??? Find out with which letter are there many countries
// 26.
