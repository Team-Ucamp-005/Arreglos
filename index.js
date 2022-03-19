console.log('Funciona');

/*
  1. rellena un array con los del 1 al 10
  y muestra en consola

  2. rellena una array con numero aleatorios
  (10 numeros) muestra en consola

  3. del array anterior crear una copia (que no sea el mismo)
  muestra en consola
*/

// let arr = [];
// // const arr = [];

// for (let i = 1; i <= 10; i++) {
//   arr.push(i)
// }
// console.log(arr)


// const arr2 = [];

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min) - min)
// }

// for (let i = 1; i <= 10; i++) {
//   arr2.push(getRandomInt(1, 100))
// }
// // console.log(arr2)

// const arr3 = arr2;

// arr2.push(5)

// console.log('arreglo 2')
// console.log(arr2)
// console.log('arreglo 3')
// console.log(arr3)
// for
// let frutas = ['manzana', 'pera', 'uvas', 'fresa', 'naranja']

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i])
// }
//forEach
// frutas.forEach(function (fruta) {
//   console.log('->', fruta)
// });
// 1 vuelta:  fruta = 'manzana'
// 2 vueltas: fruta = 'pera'
// 3 vueltas: fruta = 'uvas'

//map
// let numeros = [1, 2, 3, 4];

// let dobleNumeros = numeros.map(function (numero) {
//   return numero * 2
// })
// console.log('map->', dobleNumeros)

// const nombre = 'Sammy'

// const nuevoNombre = nombre.split('').map(function (letra) {
//   return `${letra}a`
// }).join('')

// const nombreSplit = nombre.split('')
// console.log('split', nombreSplit)
// const nombreMap = nombreSplit.map(function (letra) {
//   return `${letra}a`
// })
// console.log('map', nombreMap)
// const nombreJoin = nombreMap.join('')
// console.log('join', nombreJoin)

// console.log('nuevoNumero')
//filter
// let canasta = ['manzana', 'pera', 'uvas', 'fresa', 'naranja', 'cilantro', 'pera', 'pera']

// let frutas = canasta.filter(function (item) { return item !== 'cilantro' })
// console.log('frutas', frutas)
// //find

// let verdura = canasta.find(function (item, index) {
//   console.log('indice find', index)
//   return item === 'pera'
// })

// console.log('verdura', verdura)



// Reduce

// const lista = [10, 20, 30, 40].reduce(function (a, b) {
//   return a + b
// })
/*
vuelta 1
a = 10
b = 20
a + b
vuelta 2
a = 30
b = 30
a + b
vuelta 3
a = 60
b = 40
a + b




*/


// console.log(lista)



// ejercicios 

// Usando el operador for realiza la tabla de multiplicar de 2 Ejemplo 2 x 1 = 2 2 x 2 = 4 2 x 3 = 6 .... 2 x 10 = 20


// for(let i = 1; i <=10; i++) {
//   console.log(`2 x ${i} = ${i * 2}`);
// }


// Crear 2 arreglos como los siguientes const nombres = ['alberto', 'paty', 'Jose', 'daniel', 'luis', 'antonio', 'Luis', 'paty', 'luis'];

// const nombreMayusculas = [];

// Utiliza la función forEach para recorrer cada elemento del arreglo nombres. En cada iteración debes agregar el nombre en mayusculas en el arreglo nombreMayusculas

// Usando un console.log, imprime el resultado. Debes tener el siguiente resultado ALBERTO, PATY, JOSE, DANIEL, LUIS, ANTONIO, LUIS, PATY, LUIS
// const nombres = ['alberto', 'paty', 'Jose', 'daniel', 'luis', 'antonio', 'Luis', 'paty', 'luis', 'Antonio'];

// const nombreMayusculas = [];

// nombres.forEach(function (nombre){
//   nombreMayusculas.push(nombre.toUpperCase())
// })

// console.log('mayuscula->', nombreMayusculas)


// // Crea una nueva variable con el nombre nombreMinusculas. Para esta parte vas a utilizar la función map. El objetivo es poder crear un nuevo arreglo a partir del arreglo nombreMayusculas. Este nuevo arreglo debe contener ahora los nombre en minusculas.
// let nombreMinusculas = nombreMayusculas.map(function (minuscula){
//   return minuscula.toLowerCase()
// })

// console.log('minuscula->', nombreMinusculas)


// // Crea una variable con el nombre filtroNombres. Vas a utilizar el arreglo nombres para esta tarea. Debes utilizar la función filter para que solo obtengas los nombres que sean luis Usa un console.log para ver el resultado. Debes tener como resultado lo siguiente luis, Luis, luis


// let filtroNombres = nombres.filter(function (nombre) {
//   return nombre.toLowerCase() === 'luis'
// })

// console.log('filtro', filtroNombres)


// let findNombre = nombres.find(function(nombre) {
//   console.log(nombre)
//   return nombre.toLowerCase() === 'antonio'
// })

// console.log(findNombre)


// Crea un nuevo arreglo con el nombre numeros y agrega los sigiguiente valores: const numeros = [2,4,6,8,10]

// Crea una nueva variable con el nombre total. El objetivo es que uses la función reduce la cual debe sumar todos los valores del arreglo numeros. Imprime el resultado de la variable total. El resultado debe ser 30

// const numeros = [2,4,6,8,10] 
// let total = numeros.reduce(function (a, b) {
//   return a + b
// })
    
// console.log(total)







