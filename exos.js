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

// const dogs = ["Leila", "Gatsby", "Dynia"];
// const dogs2 = ["Gaston", "Gabelou", "Gadou"];
// const listOfDogs = [...dogs, ...dogs2];

// console.log(listOfDogs);

// const concat = (array1, array2) => {
//   result = [];

//   for (const item of array1) {
//     result.push(item);
//   }

//   for (const item of array2) {
//     result.push(item);
//   }

//   return result
// };

// console.log(concat(dogs, dogs2));

// ////////////////////

// const obj1 = {
//   a : 42,
//   b : false,
//   c : "hello",
// }

// const obj2 = {
//   c : "world",
//   d : null,
// }

// const obj3 = {...obj1, ...obj2};

// console.log(obj3);

// const merge = (o1, o2) => {
//   Object.assign({...o1, ...o2});
// }

// console.log(merge(obj1, obj2));

////////////////////

const user = {
  name: 'John Doe',
  address: {
     city: 'L.A',
     country: {
       countryCode: 567,
       countryName: 'U.S.A',
     },
  },
  };
  // add one line with destructuring assignments here for this code to work
  const {name, address: {city, country: {countryName}}} = user;
  console.log(`${name} lives in ${city}, ${countryName}`)
  
  