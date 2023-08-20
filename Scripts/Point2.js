/*2- Realizar un algoritmo que calcule el porcentaje de descuento que va a tener un
cliente dependiendo de los siguientes datos:
- Si el cliente compró un carro o una moto, el descuento será del 15%
- Si el cliente compró una bicicleta o una patineta, el descuento será del 10%
- Si el cliente compró un scooter eléctrico, el descuento será del 5%*/

let product = prompt("Ingrese el producto que desea comprar: a. Carro b.Moto c.bicicleta d.patineta e.scooter eléctrico");

if (product === "a" || product === "b") {
    console.log("Su descuento es de 15%")
} else {
    if (product === "c" || product === "d") {
        console.log("Su descuento es de 10%")
    } else {
        if (product === "e") {
            console.log("Su descuento es de 5%")
        } else {
            console.log("Debes seleccionar un producto de la lista para tener un descuento")
        }
    }
}