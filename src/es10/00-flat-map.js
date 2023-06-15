//MIRAR EN DOC DEL CURSO
const array = [1,1,2,3,4,[1,3,5,6,[1,2,3]]];
console.log(array);//[ 1, 1, 2, 3, 4, [ 1, 3, 5, 6, [ 1, 2, 3 ] ] ]

//El método flat() crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
console.log(array.flat(3));
/*
[
  1, 1, 2, 3, 4,
  1, 3, 5, 6, 1,
  2, 3
]
*/

//El método flat de los array permite aplanar los elementos internos de un array permitiendo eliminar array internos.
const numbers = [1, 2, 3, 4, [5, 6, [7, 8, 9]]];

numbers.flat(1) // [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ] ]
numbers.flat(2) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

numbers.flat(Infinity) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//flatMap
/*
El método flatMap() primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz. 
Es idéntico a un map seguido de un flatten (en-US)de profundidad 1, pero flatMap es a menudo útil y la fusión de ambos en un método es ligeramente más eficiente.
*/
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2]));  //Por cada resultado devuelve el numero, ese_numero x 2 (1,2) o (2,4) o (3,6) o (4,8) o (5,10)

/*
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]
*/

/*
var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
*/

const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap(num => num);

console.log(flattened);
// expected output: Array [1, 2, 3, 4, 5, 6]
