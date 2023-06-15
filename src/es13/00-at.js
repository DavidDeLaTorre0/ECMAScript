
const array = ["one" , "two" , "three", "four", "five", "six"];

//ambas son iguales (muestran el ultimo elemneto del array)

/*
El método at() recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos.
Los valores negativos contarán desde el último elemento del array.
Esto no sugiere que haya algo mal con usar la notación de corchetes. Por ejemplo, array[0] devolvería el primer elemento. 
Sin embargo, en lugar de usar array.length para los últimos elementos
*/
console.log(array[array.length - 1]);
console.log(array.flat(-1));