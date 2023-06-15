//instanciamos el Set
const list = new Set();

list.add('Item 1');
list.add('Item 2').add("Item 3");
list.add('Item 4');
console.log(list);
//Set(3) { 'Item 1', 'Item 2', 'Item 3', 'Item 4' }

//Eliminando si un valor existe en el set
list.delete("Item 4");
console.log(list);
//Verificando si un valor existe en el set
console.log(list.has('Item 1'));

//Mostrando tamaño del set
console.log(`El tamaño de la lista es: ${list.size}`);


//Para crear un array sin elementos repetidos, podemos utilizar Set y el operador de propagación de la siguiente manera:
const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]