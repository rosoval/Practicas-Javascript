function sumar(numero1, numero2){
  return  numero1 + numero2;
}

function restar(numero1, numero2){
    return numero1 - numero2;
}

function dividir(numero1, numero2){
    if(numero2 === 0){
        console.log("no se puede dividir por cero");
    }else {
        return numero1 / numero2;
    }
}

function multiplicar(numero1, numero2){
   if(numero2 >= 1000000) return "la memoria esta colapsada";{

   }
    return numero1 * numero2;
   }


   function hacertarea(funcion2){
    console.log("empezando tarea");
    funcion2();
    console.log("tarea terminada");
   }
    
   hacertarea(() => {
    console.log("haciendo tarea");
   });0