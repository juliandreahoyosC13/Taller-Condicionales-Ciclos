/*4- Una distribuidora de huevos quiere contratarlo para que realice un algoritmo que
calcule el precio de venta para una cantidad de huevos a llevar por un determinado
cliente. Guiándose por la siguiente información:(Imagen en docu de classRoom)*/

let numberEggs = Number(prompt("Ingrese la cantidad de huevos que quiere comprar"))

eggsPrice = 250

if (numberEggs >= 1 && numberEggs <= 100) {
    console.log("El precio a pagar es " + ((eggsPrice*numberEggs)-((eggsPrice*numberEggs)*0.03)) + " y el descuento corresponde al 3%")
} else {
    if (numberEggs >= 101 && numberEggs <= 200) {
        console.log("El precio a pagar es " + ((eggsPrice*numberEggs)-((eggsPrice*numberEggs)*0.05)) + " y el descuento corresponde al 5%")
    } else {
        if (numberEggs >= 201 && numberEggs <= 300) {
            console.log("El precio a pagar es " + ((eggsPrice*numberEggs)-((eggsPrice*numberEggs)*0.08)) + " y el descuento corresponde al 8%")
        } else {
            if (numberEggs >= 301) {
                console.log("El precio a pagar es " + ((eggsPrice*numberEggs)-((eggsPrice*numberEggs)*0.1)) + " y el descuento corresponde al 10%")
            } else {
                console.log("Debe comprar huevos para obtener un descuento")
            }
        }
    }
}