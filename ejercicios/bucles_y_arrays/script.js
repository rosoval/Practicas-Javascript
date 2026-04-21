//ejrcicio 1
let suma = 0;
for( let i = 0; i <= 10; i++ ){
    suma += i;
    
}
console.log("la suma final es: "+suma);

//ejercicio 2
let contador= 10;
while(contador >= 0){
    console.log(contador);
    contador--;
}
//ejercicio 3
const numeros = [4 ,17 ,3 ,25 ,8 ,11];
let mayor = numeros[0];
for(let i= 1; i < numeros.length; i++){
    if(numeros[i] > mayor){
        mayor = numeros[i];
    }

}
console.log("el numero mayor es: "+mayor);
//ejercicio 4

const palabras = ["sol", "montaña", "mar", "elefante", "rio","cascada"];
const palabrasLargas = [];

for(let i = 0; i < palabras.length; i++){
    if (palabras[i].length > 5){
        palabrasLargas.push(palabras[i]);
    }
}
console.log("las palabras largas son: "+palabrasLargas);
//ejercicio 5

const numero = 10;
let multiplicador = 1;

while(multiplicador <= 10){
    console.log(numero + " x " + multiplicador + "=" + (numero * multiplicador)); 
    multiplicador++;
}


