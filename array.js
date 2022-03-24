const _ = require("lodash");
const numbers = [1, 2, 3, 4];

const object = { name: "sanjay", age: 33 };
const arrObject = [
  object,
  { name: "sanjay", age: 23 },
  { name: "jay", age: 33 },
  { name: "prkash", age: 25 },
];

//map - return an array of same length
let multipliedNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log("The doubled numbers are", multipliedNumbers);
// arrow
multipliedNumbers = numbers.map((number) => number * 2);

console.log("The doubled numbers are", multipliedNumbers);

// forEach value process something
numbers.forEach((number) => console.log("forEach: ", number));

// const newArrObject = arrObject.map((object) => {
//   const newObject = _.cloneDeep(object);
//   newObject.age = object.age + 2;
//   return newObject;
// });
// console.log("The doubled objects are", newArrObject);
// console.log("The doubled objects are", arrObject);
// console.log("The old numbers are", numbers);

//filter - return an array of lesser length
let evenNumbers = numbers.filter(function (number) {
  return number % 2 !== 0;
}); /* ? */
console.log("The odd numbers are", evenNumbers);
// simpler
evenNumbers = numbers.filter((number) => number % 2 === 0); /* ? */
console.log("The even numbers are", evenNumbers);
// // support fn
// const isEven = function (number) {
//   return (number % 2 === 0)
// }
// // simplest
// evenNumbers = numbers.filter(isEven) /* ? */

//find - return first matching value
let findSanjay = arrObject.find(function (obj) {
  return obj.name === "sanjay";
}); /* ? */
console.log("findSanjay", findSanjay);
// simpler
evenNumbers = numbers.find((number) => number % 2 === 0); /* ? */
console.log("The even numbers are", evenNumbers);
const newFilObject = arrObject.filter(object => object.age === 33)
console.log('The doubled objects are', newFilObject)
console.log('The doubled objects are', arrObject)

const newFindObject = arrObject.find(object => object.age === 33)
console.log('The doubled objects are', newFindObject)
console.log('The doubled objects are', arrObject)
//pass through each value and get one value
let totalNumber = numbers.reduce(function (_tempTotal, number) {
  console.log("number", number);
  console.log("_tempTotal", _tempTotal);
  return _tempTotal + number;
});

console.log("The total number is", totalNumber);

const combineName = arrObject.reduce((cobinedName, object) => cobinedName + object.name + ' ,', '')
console.log('The combineName is', combineName)

totalNumber = numbers.reduce((total, number) => (total + number), 0)

console.log('The total number is', totalNumber) // 10

const doubleTotalNumber = numbers.map((number) => number * 3)
  .reduce((total, number) => total + number, 0)

console.log('The total number is', doubleTotalNumber) // 20
