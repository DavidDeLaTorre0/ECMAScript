//FUNCIONES FLECHA

// funcion square 
function square (num){
    return num * num;
}
// misma funcion pero con const
const square = (num) => {
    return num* num;
}

//si yo quisiera pasar un parametro con return implicito sin necesidad de tener bloques o + sintaxis
const square = num => num * num; 

//si vamos a tener multiples lineas de codigos o logica dentro del bloque principal, SI será necesario return y los handlebars {}