/** Compose
 * putting 2 function together to form a third function were the output of one function is the input of the other.
 * (bro it's hard to understand the definiton.. let's give a try !)
 */

 const compose = (f, g) => (a) => f(g(a))
 const sum = (num) => num + 1;

 console.log(compose(sum, sum)(5));