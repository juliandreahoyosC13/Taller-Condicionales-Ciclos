/*7- Desarrollar un algoritmo que permita ingresar 5 productos de la canasta familiar;
nombre del producto y su precio, que al final me muestra cuanto es el subtotal
(precio sin IVA), cuánto es el IVA del 19% y cuál es el total que debe pagar una
persona.*/

adderPrice = 0

for (let i = 0; i < 5; i++) {

    // let product = (prompt("Ingrese el nombre del producto"))
    let productValue = Number(prompt("Ingrese el valor del producto"))

    adderPrice = adderPrice + productValue
}

ValueIVA = adderPrice * 0.19

console.log("El subtotal es: " + adderPrice)
console.log("El IVa que debes pagar es: " + ValueIVA)
console.log("El total a pagar es: " + (adderPrice + ValueIVA))