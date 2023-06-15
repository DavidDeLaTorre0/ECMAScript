// Try catch

try {
    hello();
} catch (error){
    console.log(error);
}

//podemos tener esta misma sintaxis pero modificando el mensaje de catch
//No es la mejor forma porque si hay algun error no sabriamos que error esta dando, solo sabriamos que entra 
//en el catch porque envia nuestro mensaje, asi que es mas funcional dejarlo como la sintaxis de arriba para qaue sepamos donde rompe nuestro código
try {
    anotherFn();
} catch{
    console.log("Esto es un error");
}

