let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' '+ world + '!';

// Templates Literal
//de esta forma mas amigable, podemos omitir concatenar strings o espacios vacios 
//el nombre de `` es comillas francesas
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);


//Multi-line strings

let lorem="esto es un string \n" + "esto es otra linea";
let lorem2 = `esta es una frase epica
    la continuacion de la frase epica.
`;
console.log(lorem);
console.log(lorem2);