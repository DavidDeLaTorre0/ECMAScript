//Async
//async asignar o para hacer entender a nuestro programa que esta funcion va a tener este concepto

async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("Hello");

/*
Hello
1
2
3
*/


//Nuestro aplicativo no se bloquea para que se ejecute After y luego va predentando los nombre que recorre el loop fo
async function arrayOfNames(array){
    for await (let value of array){
        console.log(value);
    }
}

const names= arrayOfNames(["David", "Natalia", "Oscar", "Ana"]);
console.log("After");
/*
After
David
Natalia
Oscar
Ana
*/

//Pruebas

//generator sin async ni await
function* anotherGenerator1(){
    yield  Promise.resolve(1);
    yield  Promise.resolve(2);
    yield  Promise.resolve(3);
}

const other1 = anotherGenerator1();
console.log(other1.next().value);
console.log(other1.next().value);
console.log(other1.next().value);
console.log("Hello");
/* 
Promise { 1 }
Promise { 2 }
Promise { 3 }
Hello
*/