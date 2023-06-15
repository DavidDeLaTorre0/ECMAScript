//Finally

const anotherFuncion = () =>{
    return new Promise((resolve, reject) => {
        //funcion anonima que tambien la podemos tener como un arrowfunction(me refiero a new Promise)

        //dentro tendremos la logica necesaria para saber si es un resolve o un reject
        //promesa ("algo que va a pasar o nunca")
        //"if ternario"
        if(true){
            //pasamos cualquier valor(numerico,string,...) segun vaya a resolver
            resolve("Hey!!");
        }else{
            
            reject("Whooooops!");
        }
    })
}

anotherFuncion()
    //no cerramos con ; para que se concatene el catch para que entre primero en el catch y luego en la logica
    .then(response=> console.log(response))
    //podriamos tener mas .then


    //que pasa si no llega a resolverse de forma exitosa esta funcion?
    //mostramos el error
    .catch(err => console.log(err))

    //Finally nos permite mostrar y tener una funcion anonima en este caso con arrow function, para hacer algo cuando ya termino
    .finally(() => console.log('Finally'));

    //en true devuelve 
    //Hey!! 
    //Finally

    //en false devuelve 
    //Whoooops! 
    //Finally