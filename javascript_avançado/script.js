/*
//função que compare o que o usuário digitar com uma palavra e possa retornar uma mensagem se está ou não no banco de dados.

// let word = prompt("Insira uma palavra:")

// let database = "Pindamonhagaba"

// function toLowerCase(str) { return  str.toLowerCase() }

// let lowerCaseWord = toLowerCase(word)

// let isWordInDatabase = lowerCaseWord === toLowerCase(database)

// isWordInDatabase ? "A palavra está no banco de dados." : "A palavra não está no banco de dados."

// alert(isWordInDatabase)
*/


/*
// 1 Crie um array com os nomes de 5 frutas e imprima cada fruta no console.]
let fruits = ["uva", "pera", "maçã", "banana", "laranja"];
fruits.forEach(fruit => console.log(fruit));

// 2 Adicione 3 novas frutas ao final do array usando o método push().
 fruits.push("abacaxi", "goiaba", "kiwi");
 console.log(fruits);
// 3 Remova a primeira fruta do array usando o método shift().
 fruits.shift();
 console.log(fruits);

// 4 Insira uma nova fruta na segunda posição do array usando o método splice().
 fruits.splice(1, 0, "manga");
 console.log(fruits);

// 5 Crie um novo array contendo apenas as 3 primeiras frutas do array original, usando o método slice().
 let firstThreeFruits = fruits.slice(0, 3);
 console.log(fruits);
 console.log(firstThreeFruits);
 */


 /* 
 // 1. Crie um array de números e calcule a soma de todos os elementos.

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15

// 2. Crie um array de objetos, onde cada objeto representa uma pessoa com as propriedades nome e idade. Ordene o array por idade de forma crescente e decrescente.

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 },
  { name: "David", age: 35 },
];

console.log(people.sort((a, b) => a.age - b.age));// Output: [ { name: "Alice", age: 25 }, { name: "Charlie", age: 28} { name: "Bob", age: 30 }, { name: "David", "age": 35 } ]

console.log(people.sort((a, b) => b.age - a.age)); // Output: [ { name: 'David', age: 35 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 28 }, { name: 'Alice', age: 25 } ]

// 3. Filtre o array de objetos anterior para encontrar todas as pessoas com mais de 30 anos.

let filteredPeople = people.filter((person) => person.age > 30);
console.log(filteredPeople); // Output: [ { name: 'Bob', age: 30 }, { name: 'David', age: 35 } ]

// 4. Crie uma função que receba um array de números e retorne um novo array com o dobro de cada número.

let doubleNumbers = (numbers) => numbers.map((number) => number * 2);
console.log(doubleNumbers([1, 2, 3, 4, 5])); // Output: [ 2, 4, 6, 8, 10 ]

// 5. Crie uma função que receba um array de strings e retorne um novo array com todas as strings em letras maiúsculas.

let uppercaseStrings = (strings) => strings.map((string) => string.toUpperCase());
console.log(uppercaseStrings(["hello", "world", "javascript"])); // Output: [ 'HELLO', 'WORLD', 'JAVASCRIPT' ]

// 6. Crie uma função que receba um array de objetos e um nome de uma propriedade. Retorne um novo array com os valores da propriedade em letras maiúsculas.

let getUppercasePropertyValues = (objects, propertyName) =>
  objects.map((object) => object[propertyName].toUpperCase());

let peopleWithUpperCaseNames = getUppercasePropertyValues(people, "name");
console.log(peopleWithUpperCaseNames); // Output: [ 'ALICE', 'BOB', 'CHARLIE', 'DAVID' ]
*/
