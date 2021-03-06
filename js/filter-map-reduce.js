const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  
const people = ['Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.table(
  inventors.filter(inventor => {
    return inventor.year >= 1500 && inventor.year < 1600;
  })
)

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
console.log(
  inventors.map(inventor => `${inventor.first} ${inventor.last}`)
)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.table(
  inventors.sort((a,b) => a.year - b.year )
)

// This is the same using a ternary
console.table(
  inventors.sort((a,b) => a.year > b.year ? 1 : -1)
)

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
let totalYears = 0;
for (let i=0; i<inventors.length; i++) {
  totalYears += inventors[i].passed - inventors[i].year;
}
console.log('For loop total years: '+totalYears);

// can be rewritten with reduce as:
console.log('Reduce loop total years: '+
  inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0) // start total at 0 in reduce func
)

// 5. Sort the inventors by years lived
console.table(
  inventors.sort((a,b) => {
    const last = a.passed - a.year;
    const next = b.passed - b.year;
    return last > next ? -1 : 1;
  })
)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// These work when ran in the console of the above wikipedia page
// const list = document.querySelector('.mw-category');
// const links = Array.from(list.querySelectorAll('a'));
// const de = links
//           .map(link => link.textContent) // returns the text of the link
//           .filter(streetName => streetName.includes('de')); // returns only those that include 'de'
// console.log(de);

// 7. sort Exercise
// Sort the people alphabetically by last name
console.table(
  people.sort((a,b) => {
    [aL, aF] = a.split(', ');
    [bL, bF] = b.split(', ');
    return aL > bL ? 1 : -1;
  })
);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

console.table(
  data.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item] += 1;
    return obj;
  },{})
)

const nameAges = [
  { name: 'Tom', year: 1988 },
  { name: 'Ran', year: 1986 },
  { name: 'Nick', year: 1970 },
  { name: 'Jenna', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
console.log(
  nameAges.some(person => ((new Date()).getFullYear()) - person.year >= 19)
)
// Array.prototype.every() // is everyone 19 or older?
console.log(
  nameAges.every(person => ((new Date()).getFullYear()) - person.year >= 19)
)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);
console.log({comment}) // {} wrappers returns an object that identifies the const variable name

// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex(currentComment => currentComment === comment)

// Delete the comment with the ID of 823423

// Immutability (doesn't change data, returns new array)
const newComments = [
  ...comments.slice(0,index),
  ...comments.slice(index+1)
]
console.log('COMMENTS:')
console.table(comments)
console.log('NEW COMMENTS:')
console.table(newComments)
// Mutability
comments.splice(index, 1)
console.log('COMMENTS (altered):')
console.table(comments)
