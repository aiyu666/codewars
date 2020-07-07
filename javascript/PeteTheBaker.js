/** Pete, the baker
 * [5 kyu]
 * Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
 *
 * Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
 *
 * Examples:
 *
 * // must return 2
 * cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
 * // must return 0
 * cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
 *
 * from: https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
 * 
 * Clever Solution:
 * function cakes(recipe, available) {
 *   return Object.keys(recipe).reduce(function(val, ingredient) {
 *     return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
 *   }, Infinity)  
 * }

 */

function cakes(recipe, available) {
    const ratioList = [];
    const recipeList = Object.keys(recipe)
    const availableList = Object.keys(available)
    let result = recipeList.filter((e) => {
        return availableList.indexOf(e) === -1
    })
    const notInRecipe = result.filter(val => result.includes(val))
    if (notInRecipe.length > 0) return 0
    recipeList.forEach(val => {
        ratioList.push(available[val] / recipe[val]);
    })
    return Math.floor(Math.min(...ratioList))
}

recipe = { flour: 500, sugar: 200, eggs: 1 };
available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available)) // 2, 'Wrong result for example #1');
recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available)) //0, 'Wrong result for example #2');
