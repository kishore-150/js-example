
let valueVariable = 3 // "Three" //true


// declartion
const sum = function exampleFunction(num1, num2) {
  console.log(num1 + num2)
  return num1 + num2;
}



// //2 Variable Assignment -- Named
var sumVAN = function add(num1, num2) {
  return num1 + num2;
};

//3 Variable Assignment -- Anonymous
var sumVAA = function (num1, num2) {
  return num1 + num2;
};

//4 Immediately invoked
(function (num1, num2) {
  return num1 + num2;
}(1, 2)); /*?*/


//5 Assigned and Invoked
var sumAI = function (num1, num2) {
  return num1 + num2;
}(1, 2);/*?*/


//6 Property Assignment
const obj1 = {
  name: 'karthi',
  sum: function add(num1, num2) {
    return num1 + num2;
  },
  product: function prod(num1, num2) {
    return num1 * num2;
  }
};
obj1.prod = function prod(num1, num2) {
  return num1 * num2;
}
const obj2 = manipultae(obj1);

function manipultae(obj) {
  let temp = { name: obj.name };

  temp.name = 'jay';
  return temp;
}
sum(1, 2) /*?*/
sumVAN(1, 2) /*?*/
sumVAA(1, 2) /*?*/
//sumAI(1,2);
obj1.sum(1, 2);/*?*/
obj1.product(1, 2);/*?*/
console.log(obj1.name);/*?*/
obj1.prod(1, 2);/*?*/
