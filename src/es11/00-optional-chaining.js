//Optional chaining
/*
No abuses del encadenamiento opcional
El encadenamiento opcional se debe utilizar únicamente cuando probablemente un valor no exista.

Por ejemplo, en un objeto usuario que siempre existe, pero la propiedad redes es opcional, entonces se debería escribir usuario.redes?.facebook y no usuario?.redes?.facebook.

Si abusas del encadenamiento opcional y existe un error en un objeto, el programa podría “ocultarlo” por un undefined, provocando que el debugging sea más complicado.
*/
const users = {
    gndx:{
        country: "CO"
    },

    ana:{
        country: "MX"
    },
    bebeloper:{
        age:12
    }
};

//Te permite acceder a los elementos 
//"dame la informacion de los usuarios.de el usuario gndx. el contenido del atributo country"
//console.log(users.gndx.country); //CO

//Si no sabemos si un Objeto existe, se puede preguntar,"exite dentro de usuarios el usuario bebeloper?, si es así nosmuestra el objeto entero, y si no existe muestra por defecto undefined"
console.log(users.bebeloper); 
// "existe dentro de usuarios el usuario bebeloper, si existe dame el country", por defecto si no  encuentra al usuario o a su atributo country mostrará undefined
console.log(users.bebeloper?.country); 