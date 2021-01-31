/** Reduce
 * u can do .map or .filter with .reduce 
 * really powerfull
 */

const number = [150, 20, 30];
const subtractArray = number.reduce((subs, num) => {
  return subs - num;
});
console.log(subtractArray);