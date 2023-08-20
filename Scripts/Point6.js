/*6- Desarrollar un algoritmo que permita ingresar las edades de 10 estudiantes.
El algoritmo deberá mostrar cuántos estudiantes son mayores de edad y son
menores de edad.*/

counterAdult = 0
counterMinors = 0

for (let i = 0; i < 10; i++) {

    let studentAge = Number(prompt("Ingrese la edad del estudiante"))

    if (studentAge >= 18) {
    counterAdult = counterAdult + 1
    } else {
        counterMinors = counterMinors + 1
    }
}

console.log("De los 10 estudiantes " + counterAdult + " son mayores de edad y " + counterMinors + " son menores")