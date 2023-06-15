//Valor nulo- nullish
//Esta dentencia es parecido un operador ternario, si anotherNumber tiene un valor que no sea null asigna ese valor a validate, si tiene valor null, asigna el valor que hay despues de las ?? s validate

const anotherNumber = 1;
const validate = anotherNumber ?? 5;
console.log(validate); // 1

const anotherNumber1 = null;
const validate1 = anotherNumber1 ?? 5;
console.log(validate1); // 5