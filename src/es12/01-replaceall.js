const string = "Javascript es una maravilloso lenguaje de programacion";

const replaceString = string.replace("Javascript","TypeScript");
console.log(replaceString); //TypeScript es una maravilloso lenguaje de programacion


const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

const mensaje1=mensaje.replace("JavaScript", "Python")
console.log(mensaje);// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

const mensaje2=mensaje.replaceAll("JavaScript", "Python")
console.log(mensaje2);// 'Python es maravilloso, con Python puedo crear el futuro de la web.'

const mensaje3=mensaje.replaceAll(/a/g, "*")
console.log(mensaje3);// 'J*v*Script es m*r*villoso, con J*v*Script puedo cre*r el futuro de l* web.'
