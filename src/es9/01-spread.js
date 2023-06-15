//Creamos nuestro objeto
const user = {username:"David", age:24, country: "ES"};

// quiero sacar username y lo demas voy a propagar todos los elementos que este en este objeto a values, aprendido en es6/03-rest-spread
const {username, ...values} = user;
console.log(username); //David
console.log(values);//{ age: 24, country: 'ES' }