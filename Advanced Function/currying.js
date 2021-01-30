/** Currying
 * The process of converting a function that takes multiple arguments into a function that takes them one at the time.
 */
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5)

console.log(multiplyBy5(10))