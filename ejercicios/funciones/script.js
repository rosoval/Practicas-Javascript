// Definición de funciones acá

//ejercicio 1

function saludar(nombre) {
    return "Hola, " + nombre + "!";
}

saludar("Ana");
//ejercicio 2

function calculadora (num1 , num2, operador) {
    if(operador === "+"){
        return num1 + num2;
    }else if(operador === "-"){
        return num1 - num2;
    }else if(operador === "*"){
        return num1 * num2;
    }else if(operador === "/"){
        return num1 / num2;
    }
}
calculadora(2, 2, "+");
calculadora(10, 5, "-");
calculadora(50, 2, "/");
calculadora(10, 5, "*");

//ejercicio 3

function areaRectangulo(base, altura) {
    return base * altura;
}
areaRectangulo(4, 5);

//ejercicio 4

function esPar(numero) {
    if(numero % 2 === 0){
        return "es par";
    } else {
        return "es impar";
    }
}
esPar(4);
esPar(5);

//ejercicio 5

function celsiusAFahrenheit(c) {
    return (c * 9/5) + 32;
}
celsiusAFahrenheit(0);

//ejercicio 6

function calificarNota(nota) {
    if(nota >= 90){
        return "A";
    } else if(nota >= 80){
        return "B";
    } else if(nota >= 70){
        return "C";
    } else if(nota > 70){
        return "F";
    }
}
calificarNota(85);

//ejercicio 7

function sumarArray(numeros){
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

sumarArray([1, 2, 3, 4]);

//ejercicio 8

function encontrarMaximoPar(numeros){
    let maximoPar = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            if (numeros[i] > maximoPar) {
                maximoPar = numeros[i];
            }
        }
    }
    return maximoPar;
}

//ejercicio 9

function contarVocales(cadena){
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === "a" || cadena[i] === "e" || cadena[i] === "i" || cadena[i] === "o" || cadena[i] === "u") {
            contador++;
        }
    }
    return contador;
}
contarVocales(Array.from("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut lacus id orci pharetra euismod."));

//ejercicio 10

function dobleNumeros(numeros){
let doble = [];
for (let i = 0; i < numeros.length; i++) {
    doble.push(numeros[i] * 2);
}
return doble;
}
dobleNumeros([1, 2, 3, 4]);