// arrays destructuring

//Poder hacer uso de la posicion del array puede llegar a ser confuso y tambien si estamos trabajando con arreglos muy grandes donde la posicion no nos quede
// clara donde esta o estemos trabajando con cierta logica es probable que nos cause una confusión
//es mucho mas amigable de estructurar los elementos, asignarlos a una variable y utilizarlos segun sea el caso
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);



//Objetc destructuring

let user = {username: 'David', age: 34};

//vamos a destructurar
// esta sentencia dice: quiero obtener username y age , ¿de donde?, de user que previamente lo tengo en la memoria(en la asignacion anterior que acabo de hacer)
//es una buena forma de desestructurar los elementos>
let {username, age} = user
//console.log(username, user.age); ambas son iguales
console.log(username, age);

/*Según sea el caso vas a poderlo utilizar, a veces, dentro de la lógica que estemos utilizando en js es posible que utilicemos la posicion del array 
para asinar un valor esto cuando estemos trabajando con valores dinámicos*/

/* imagina que esta valor de la posicion la obtenemos de algun lado y se la pasamos a fruit para presentar la fruta segun sea el caso,
* así que vale la pena usar de esa forma utilizar la estructura normal(la primera)
* pero cuando queremos saber la informacion desde un incio y poderla llamar segun sea el caso como es el ejemplo de a b pues podemos hacer 
* uso de esta logica, la destructuracion de los elemntos en arrays y tambien lo que viene siendo en objetos
* todo depende del caso de uso*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// spread operator
//OPERADOR DE PROPAGACION

let person = {name: 'David', age: 24};
let country = "EEUU";

//Creamos una variable donde queramos que se unan cada uno de nuestros elementos
// ...person hace la destructuracion con el propagador de operacion para traer estos elementos aqui y luego le pasamos country y nos va a pasar la estructura de la informacion conforme la necesitemos
let data = { ...person, country};
console.log(data);
// podriamos jugar agragando valores antes o despues de ...person
let data1 = { id:1,...person, country};
console.log(data1);

//rest

// la variable ...values, no sabemos cuales son , pero sabemos que ahi vamos a pasar una serie de parametros 
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

//num recoge el primer valor, los demas los recoge values
sum(1, 1, 2, 3);