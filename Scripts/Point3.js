/*3- Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el mes al
que corresponde el valor ingresado y los signos del zodiaco. Ejemplo: si el valor
ingresado es 5, entonces imprimir “Mayo”, “Tauro - Géminis”.*/

/*Lo hice 2 veces porque se le ocurrio una manera sencilla*/

let month = Number(prompt("Ingrese el número del mes"));

switch (month) {
    case 1: 
    console.log("Enero " + "Capricornio-Acuario")
        break;
    case 2: 
    console.log("Febrero " + "Acuario-Piscis") 
        break;
    case 3: 
    console.log("Marzo " + "Piscis-Aries")
        break;
    case 4: 
    console.log("Abril " + "Aries-Tauro")
        break;
    case 5: 
    console.log("Mayo " + "Acuario-Piscis") 
        break;
    case 6: 
    console.log("Junio " + "Geminis-Cancer")
        break;
    case 7: 
    console.log("Julio " + "Cancer-Leo")
        break;
    case 8: 
    console.log("Agosto " + "Leo-Virgo")
        break;
    case 9: 
    console.log("Septiembre " + "Virgo-Escorpio")
        break;
    case 10: 
    console.log("Octubre " + "Libra-Escorpio")
        break;
    case 11: 
    console.log("Noviembre " + "Escorpio-Sagitario")
        break;
    case 12: 
    console.log("Diciembre " + "Sagitario-Capricornio")
        break;
    default:
    console.log("El número no corresponde a ningún mes")
        break;
}