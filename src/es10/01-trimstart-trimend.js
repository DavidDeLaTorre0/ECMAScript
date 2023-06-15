//TrimStart-trimEnd
//Trim elimina los espacios
//TrimStart elimina los espacios que se encuentren delante del string en este caso
const hello = '            Hello Word          ' ;
console.log(hello.trimStart());//Hello Word           

//TrimEnd elimina los espacios que se encuentren al final del string en este caso
console.log(hello.trimEnd());//               Hello Word