import fetch from "node-fetch";

/*Con el concepto TopLevelAwait, ya no hace falta la palabra reservada async
antes tendriamos que encapsular una funcion que se pudira llamar get products hacer la logica y devolver products 
y exportar esta funcion para llamarla dentro, donde fuera necesario y con esto hacer uso de async y await para que vaya el llamado y obtenga los productos espere para la transformacion
y luego los exponga
*/
//Pero con TopLevelAwait no hace falta todo esto anterior
//fetch nos permite llamar a nuestra api
// como es una peticion get llamamos a la api de fakeapi https://api.escuelajs.co/api/v1/products products es lo que queremos llamr pero podriamos cambiarlo por lo que qeramos llamar com punto principal
const response = await fetch ("https://api.escuelajs.co/api/v1/products");

//lo que recibimos lo vamos a transformar en un objeto json el cual utilizamos para presentar la estructura que necesitamos 
const products = await response.json();

export {products};

