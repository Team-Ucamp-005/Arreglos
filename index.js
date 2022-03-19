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

const lista = [10, 20, 30, 40].reduce(function (a, b) {
  return a + b
})
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


console.log(lista)








