//String padding
const string ="Hello";

//PadStart
//Este comando nos permite añadir al comienzo de nuestro objeto la palabra asignada, y el numero que debe ocupar todo el objeto padStart(numCaracteresTotales, objeto_que_añades)
//Hello ya ocupa 5, asique añadira 5 caracteres al comienzo
console.log(string.padStart(10, "hi"));//hihihHello

//PadEnd
//Este comando nos permite añadir al final de nuestro objeto la palabra asignada, y el numero que debe ocupar todo el objeto padStart(numCaracteresTotales, objeto_que_añades)
//Hello ya ocupa 5, asique añadira 5 caracteres al final
console.log(string.padEnd(10, "hi"));//Hellohihih