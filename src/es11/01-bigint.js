//Números grandes - Bigint
//En JavaScript, BigInt es un tipo de dato numerico que puede representar números enteros en el formato de precision arbitrario.
// En otros lenguajes de programación pueden existir diferentes tipos numéricos, por ejemplo: enteros, flotantes, dobles o bignums (numeros grandes).
//la n al final es para representar el manejo de numeros como bigint
const aBigNumber = 1234623645256123n;
const anotherBigNumber = BigInt(1234623645256123);
console.log(aBigNumber); //1234623645256n
console.log(anotherBigNumber); //1234623645256n