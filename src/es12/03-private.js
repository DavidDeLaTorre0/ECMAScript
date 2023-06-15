
class user{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    //con # indicamos que es un metodo privado y solo se puede acceder a el desde dentro de la clase
    #speak(){
        return 'Hello';
    }
    greeting(){
        return console.log(`${this.#speak()} ${this.name}`);
    }

    get #uAge(){
        return this.age;
    }

    set #uAge( age ){
        this.age = age;
    }
}

const bebeloper1 = new user("David", 12);
//Le introduzco la edad en el setter
console.log(bebeloper1.uAge = 20); // 20

//llamamos al metodo publico
bebeloper1.greeting(); //Hello David


class Clase {
    #private(valor){
      console.log(valor)
    }
    
    public(valor){
      console.log(valor)
    }
  }
  
  const clase = new Clase()
  clase.public("Hola")  // 'Hola'
  clase.private("Hola") // TypeError: clase.private is not a function


  
//-----------------------------------------------------------------------------------
  // declaracion de una clase
class User {};
// genera una instancia
//const newUser = new User ();

class user1 {
 // metodos
greeting() {
    return "hello";
}
};

const gndx = new user1();
console.log(gndx.greeting());
const bebeloper = new user1();
console.log(bebeloper.greeting());

// constructor

class user2 { 
    constructor() {
        console.log("Nuevo usuario");
    }
    greeting() {
        return "hello";
    }
}

const david = new user();

// this

class user3 {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new user2("Ana");
console.log(ana.greeting());

// setters getters

class user4 {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    // metodos
    #speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const bebeloper2 = new user4 ("david", 15);
console.log(bebeloper2.uAge);
console.log(bebeloper2.uAge = 20);