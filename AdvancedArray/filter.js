/** Filter
 * hampir sama dengan map bedanya hanya di filter kita melakukan pengkondisian di function
 * berarti dalam kasus ini value akan di return jika kondisi true
 */

const array = [2, 4, 6, 8];
const filterArray = array.filter(num => {
    return num > 5;
})
console.log(filterArray);

//Jika kita cuma punya satu parameter, bisa di singkat seperti di bawah ini
const newFilterArray = array.filter(num => num > 5);
console.log(newFilterArray);

//rekomendid karena sesuai dengan aturan di awal yaitu Functional Purity, dimana function langsung me-return value.
// menghindari terjadinya side effects.