//Funciones asíncronas

/*
Este tipo de funciones se suelen utilizar mucho sobre todo para hacer peticiones a servidores, dado que al no ser instantaneo es necesario crear un hilo, o nuevo proceso de ejecución.
De esta manera no se interrumpe el flujo de ejecución principal de tu aplicación y tu aplicación sigue funcionando mientras llega esa respuesta del servidor.
*/

//En este bloque de código el profesor lo que hace es simular esa demora con el método setTimeout( ), y añade una demora de 2 segundos.
const fnAsync = () => {
    return new Promise((resolve, reject)=>{

        //Esta sentencia "?" es como un if(true), else ":"  devuelve Error de reject
        //OJO no se cierra hasta el final
        (true)
        ? setTimeout(()=> resolve("Async!!"), 2000)
        : reject(new Error("Error!"));
    })
}


// La función asíncrona se crea mediante la palabra reservada async y retorna una promesa.
// La palabra reservada await significa que espera hasta que una promesa sea resuelta y solo funciona dentro de una función asíncrona.
// Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada.

//En este bloque de código el profesor lo que hace es definir esa función asíncrona
// que se ejecutará en segundo plano sin interrumpir el flujo de ejecucón del resto de la aplicación sabiendo que la respuesta llegará 2 segundos más tarde.
const anotherFunction = async () =>{

    // La constante something guardará el retorno de la función fnAsync que en este caso es verdadero
    const something = await fnAsync();
    console.log(something);
    console.log("Hello");
    
}
/*
En este bloque de código el profesor lo que hace es mostrar algo por consola y también llamar a la función async( ) 
mostrándote el orden de ejecución, dónde se pueden ver el resultado de los métodos instantaneos y al final el resultado de la función asíncrona
*/
console.log("Before");
anotherFunction();
console.log("After");
/*Devuelve
Before
After
Async!!
Hello
*/




//anotherFunction es una promesa y que hemos utilizado el concepto de setTimeout para esperar a mostrar ese resolve, por eso no se muestra inmediatamente
//Nuestro programa no bloquea y continua, por eso pone after y despues Async! y Hello 

const fnAsync1 = () => {
    return new Promise((resolve, reject)=>{

        //Esta sentencia "?" es como un if(true), else ":"  devuelve Error de reject
        //OJO no se cierra hasta el final
        (true)
        ? setTimeout(()=> resolve("Async!!"), 2000)
        : reject(new Error("Error!"));
    })
}

const anotherFunction1 = () =>{

    const something = fnAsync1();
    console.log(something);
    console.log("Hello");
    
}

console.log("Before");
anotherFunction1();
console.log("After");

//Hemos quitado async y await
// Bloquea lo demas hasta que no se ejecute anotherFunction1
/*
Before
Promise { <pending> }
Hello
After
*/