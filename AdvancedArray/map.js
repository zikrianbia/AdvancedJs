/** Map
 * Perbedaan .map dengan .forEach adalah :
 *  ForEach:
 *      -just loop over something and it just does whatever the function says
 *  map:
 *      -loop over element (in this case number) and return new array.
 */

const array = [2, 4, 6, 8]; //declare array of number
const mapArray = array.map((num) => { // the array[i](num) loops
    return num * 2; //array[i](num) multiply by 2, and return hasilnya ke array baru yaitu mapArray
});
console.log(mapArray)

//Jika kita cuma punya satu parameter, bisa di singkat seperti di bawah ini
const mapArraySimplified = array.map(num => num * 2);
console.log(mapArraySimplified)

//rekomendid karena sesuai dengan aturan di awal yaitu Functional Purity, dimana function langsung me-return value.
// menghindari terjadinya side effects.