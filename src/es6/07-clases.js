//declaracion de clase
//class User {};
//instancia de una clase
//const newUser = new User;

class user{
    //metodos
    //greeting es saludo
    greeting(){
            return "Hello";
    }
};

const david =new user();
console.log(david.greeting());

const bebeloper = new user();
console.log(bebeloper.greeting());

//devuelve los metodos de la clase
const gndx = new user();

//Constructor
class user{
    //Constructor
    constructor(name){
        this.name = name;
    }
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}


const ana = new user("Ana");
console.log(ana.greeting());




class user{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get getuAge(){
        return this.age;
    }

    set setuAge( n ){
        this.age = n;
    }
}

const dev = new user("David", 12);
//Le pido solo la edad
console.log(dev.getuAge);

//Le introduzco la edad en el setter
console.log(dev.setuAge = 20);



class usuario{
    //Propiedades de la clase------------------------------
    nombre = "Edgar";

    //Constructor-------------------------------------
    constructor (nombreParametro)
    {
        console.log(this.nombre);
        this.nombre = nombreParametro; //Se usa "this" para referirse a las propiedades de la clase
        console.log(this.nombre);
    }
    
    //Metodos-------------------------------------
    saludar() //los metodos se declaran sin "function"
    {
        return `Hola, soy ${this.nombre}`;
    }

    //Metodo estatico---------------------------------------
    static metodoEstatico()
    {
        console.log("Hola, soy un metodo estático");
    }

    //getters y setters----------------------------------------
    get getNombre()
    {
        return this.nombre;
    }

    set setNombre(nombreParametro)
    {
        this.nombre = nombreParametro;
    }
};


//Crear un objeto de la clase---------------------------------
const userObjeto = new usuario("Natalia");
//constructor
console.log(userObjeto.saludar());

//Aceder a un metodo estatico---------------------------------
usuario.metodoEstatico();

//Acceder a un set ter------------------------------------------
userObjeto.setNombre = "Petrona";
//Acceder a un getter------------------------
console.log(userObjeto.getNombre);