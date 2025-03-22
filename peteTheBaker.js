// Pete likes to bake some cakes. He has some recipes and ingredients. 
// Unfortunately he is not good in maths. Can you help him to find out, 
// how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) 
// and the available ingredients (also an object) and 
// returns the maximum number of cakes Pete can bake (integer). 
// For simplicity there are no units for the amounts 
// (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
// Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// clarifying ?s:
// will always have an object with values that will be whole nums?
// should i make a guard clause to account for bad arguments or data?

// pseudo:
// build function to take 2 objects, return integer
// how to iterate over objects?
// want to use divison in a loop
// use Math.floor and divide needed / actual
// return lowest remainder

function cakes(recipe, ingredients) {
  let minumumValue = Infinity
  for (const [key, value] of Object.entries(recipe)) {
    if (!ingredients[key]) {return 0}
    let stock = Math.floor(ingredients[key]/recipe[key])
    if (stock < minumumValue) {minumumValue = stock}
  }
return minumumValue
}

// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }

// const myObject = { a: 1, b: 2, c: 3 };

// Object.keys(myObject).forEach(key => {
//   console.log(key, myObject[key]);
// });

console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }))
console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }))
