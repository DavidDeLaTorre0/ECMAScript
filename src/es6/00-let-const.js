//  Variables VAR LET CONST

// Alcance Global
var lastName = "David";
lastName = "Oscar";
console.log(lastName);

// Alcance de bloque
let fruit = "Apple";
fruit="Kiwi";
console.log(fruit);


// Alcance de bloque
//CON CONST NO SE PUEDE REASIGNAR VALOR
const animal= "Dog";
animal="Cat";
console.log(animal);


const fruits=() => {

    if(true){
        var fruit1= 'Apple'; //function scope
        let fruit2= 'Kiwi'; //block scope
        const fruit3= 'Banana'; //block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();