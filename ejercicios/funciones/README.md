# Ejercicios de Funciones

## Ejercicio 1 - Saludo personalizado

Crear una función clásica llamada saludar que reciba un nombre como parámetro y devuelva un string con el mensaje: `"Hola, [nombre]!"`.

```js
// resultado esperado
saludar("Ana") // "Hola, Ana!"
```

## Ejercicio 2 - Operaciones matemáticas

Crear una función clásica `calculadora` que dado 2 números y un operador (`+`, `-`, `/` y `*`) realice la operacion correspondiente

```js
// resultado esperado
calculadora(2, 2, "+") // 4
calculadora(10, 5, "-") // 5
calculadora(50, 2, "/") // 25
calculadora(10, 5, "*") // 50
```

> [!Tip]
> Usar `Switch` para identificar que operación usar.

## Ejercicio 3 - Área de un rectangulo

Usando una función clásica recibiendo la base y la altura de un rectángulo se tiene que calcular su área (base x altura)

```js
// resultado esperado
areaRectangulo(4, 5) // 20
```

## Ejercicio 4 - Par o impar

Usando arrow function identificar si un número es par o impar devolviendo `"es par"` o `"es impar"`.

```js
// resultado esperado
esPar(4) // "es par
esPar(5) // "es impar
```

## Ejercicio 5 - Conversor de temperatura

Escribir una función `celsiusAFahrenheit` que reciba una temperatura en grados celsius y la convierta a Fahrenheit usando la fórmula: `(C x 9/5) + 32`.

```js
// resultado esperado
celsiusAFahrenheit(0) // 32
```

## Ejercicio 6 -Calificación de estudiante

Crear una función `calificarNota` que reciba un número (0 al 100)

- Si es mayor o igual a 90, devolver 'A'
- Si es mayor o igual a 80, devolver 'B'
- Si es mayor o igual a 70, devolver 'C'
- Si es menor, devolver 'F'

```js
// resultado esperado
calificarNota(85) // B
```

## Ejercicio 7 - Suma de un array

Escribir una función `sumarArray` que reciba un array de números y devuelva la suma total de todos sus elementos.

```js
// resultado esperado
sumarArray([1, 2, 3, 4]) // 10
```

## Ejercicio 8 - Encontrar el máximo par

Crear una función `encontrarMaximoPar` que dado un array de números devuelva el valor más alto que sea par.

```js
// resultado esperado
encontrarMaximoPar([3, 9, 2, 5]) // 2
```

## Ejercicio 9 - Contar Vocales

Escribir una función `contarVocales` que reciba una cadena de texto (string) y devuelva cuántas vocales (a, e, i, o, u) contiene. No importa si son mayúsculas o minúsculas.

> [!Tip]
> Para convertir una variable string a array: `const array = Array.from(variable)`

## Ejercicio 10 - Doble de una Lista

Crea una función `dobleNumeros` que reciba un array de números y devuelva un nuevo array donde cada número esté multiplicado por 2, utilizando una Arrow Function dentro del método `.map()`.

> [!Tip]
> El método `.map()` se utiliza en los arrays para actualizar todos los valores que contenga.
> `array.map(item => console.log(item))`

```js
// resultado esperado
dobleNumeros([1, 2, 3, 4]) // [2, 4, 5, 8]
```
