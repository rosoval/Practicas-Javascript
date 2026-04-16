//ejercicio 1

nombre = "valentino";

if(nombre != ""){
    console.log("hola, " + nombre);
}else {
    console .log("hola, desconocido");
}

//ejercicio 2

numero = 5;
if(numero%2===0){
   console.log("el numero es par");
} else {
    console.log("el numero es impar");  
}

//ejercicio 3

clasificacion = 85;
 
if(clasificacion >= 60){
    console.log("aprobado");
 } else if(clasificacion < 60){
    console.log("reprobado");
 }

 //ejercicio 4

 dia = "martes";

 switch (dia) {
    case "lunes":
        console.log("hoy es lunes");
        break;
    case "martes":
        console.log("hoy es martes");
        break;      
    case "miercoles":   
        console.log("hoy es miercoles");
        break;
    case "jueves":
        console.log("hoy es jueves");
        break;
    case "viernes":
        console.log("hoy es viernes");
        break;
    case "sabado":
        console.log("hoy es sabado");
        break;
    case "domingo":
        console.log("hoy es domingo");
        break;
 }

 //ejercicio 5

edad = 18;

if(edad >= 18){
    console.log("eres mayor de edad");
}else {
    console.log("eres menor de edad");
}

//ejercicio 6

temperatura = 30;

if(temperatura < 10){
    console.log("frio");
}else if(temperatura >= 10 && temperatura < 25){
    console.log("templado");
}else if(temperatura > 25){
    console.log("calor");
}

//ejercicio 7

num = 10;

if(num == 0){
    console.log("el numero es cero");
}else if(num > 0){
    console.log("el numero es positivo");
}else if(num < 0){
    console.log("el numero es negativo");
}

//ejercicio 8

monto = 100;

if(monto >= 100){
    console.log("tienes 10% de descuento");
}else if(monto >= 200 ){
    console.log("tienes 20% de descuento");
}

//ejercicio 9

lado1 = 5;
lado2 = 3;
lado3 = 5;

if(lado1 == lado2 && lado2 == lado3){
    console.log("el triangulo es equilatero");
}else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log("el triangulo es isosceles");
}else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
    console.log("el triangulo es escaleno");
}

//ejercicio 10

contraseña = "contraseña123";
if(contraseña.length >= 8){
    console.log("valida");
}else {
    console.log("demaciodo corta");
}

//ejercicio 11

mes = "enero";

switch (mes) {
    case "enero":
    case "diciembre":
    case "febrero":
        console.log("es verano");
        break;
    case "marzo":
    case "abril":
    case "mayo":
        console.log("es otoño");
        break;
    case "junio":
    case "julio":
    case "agosto":
        console.log("es invierno");
        break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("es primavera");
        break;
}

//ejercicio 12

puntos = 86;

if(puntos <= 50) {
    console.log("novato");
}else if(puntos > 50 && puntos <= 100){
    console.log("intermedio");
}else if(puntos > 100){
    console.log("experto");
}

//ejercicio 13

num1 = 2;
num2 = 5;

operacion = "+";

switch (operacion) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;      
}

//ejercico 14

email = "valentino@gmail.com";

if(email.includes("@") && email.includes(".")){
    console.log("email valido");
}else {
    console.log("email invalido");
}

//ejercicio 15

opcion = 2;

switch (opcion){
    case 1:
        console.log("iniciar");
        break;
    case 2:
        console.log("configurar");
        break;
    case 3:
        console.log("salir");
        break;
}

