/** Closures
 * functionnya jalan, function tereksekusi sekali.
 * tapi dia akan mengingat ada referensi ke variable tsb
 * jadi child scope selalu punya akses ke parent scope, tapi parent scope tidak punya akses ke child scope.
 */

const first = () => {
    const greet = 'Halo gan';
    const second = () => {
        console.log(greet);
    }
    return second
}
const newFunc = first();
return newFunc() 