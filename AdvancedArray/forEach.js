/** ForEach 
 * deklarasi array
 * deklarasi output
 * Iterasi di array, lakukan pengkondisian
 * push ke output
 * display output
 * (just loop over something and it just does whatever the function says)
 */

 const array = [2, 4, 6, 8];
 const double = [];
 const newArray = array.forEach(num => {
     double.push(num * 2);
 });

 console.log(double);

 // Tidak rekomendid, karena bisa terjadi side effects dimana banyak perintah di satu function dan tidak me-return value yang pasti.
 // direkomendasikan menggunakan .map || .filter || .reduce