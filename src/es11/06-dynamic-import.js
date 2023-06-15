// Dynamic-Import
const button = document.getElementById("btn");

    // añadimos un evento al boton
    // cuando se haga click que ejecute la funcion anonima(es anonima cuando no lleva nombre, puede ser directamente function() o una arow function sin nombre )
    /*el modulo o el JS que nosotros importemos dinamicamente no usara nada de red hasta que lo solicitemos, por lo cual podremos verlo en la pestaña de red en cuanto solicitemos el recurso, 
    esto ayuda a que no generemos trafico inncesario en la red mientras cargamos la pagina y solo al momento de ser utiliado
     */
button.addEventListener("click", async function(){
    const module = await import('./module.js');
    console.log(module);
    module.hello();
});