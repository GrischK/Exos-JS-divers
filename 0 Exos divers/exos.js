// Exos cours JS 

// const double = (number) => 2;
// console.log(double());


// const logParamsAndReturnAddition = (a, b) => {
//   console.log(a, b); 
//   return a + b;
// };
// console.log(logParamsAndReturnAddition(4, 6));


// const roundMap = (numbers) => {
//   const result = [];
//   for (const number of numbers) {
//     result.push(Math.round(number));
//   }
//   return result;
// };
// console.log(roundMap([2.5, 3.11124, 5.12]))

// Exos spread operator

const dogs = ["Leila", "Gatsby", "Dynia"];
const dogs2 = ["Gaston", "Gabelou", "Gadou"];
const listOfDogs = [...dogs, ...dogs2];

console.log(listOfDogs);

const concat = (array1, array2) => {
  result = [];

  for (const item of array1) {
    result.push(item);
  }

  for (const item of array2) {
    result.push(item);
  }

  return result
};

console.log(concat(dogs, dogs2));


