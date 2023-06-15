//Object Entries
//iniciamos un Objeto
const countries = {ES: "España", MX: "Mexico", CO: "Colombia", CL: "Chile", PE: "Peru"};

//Object.keys
//Metodo que hace que los keywords de un objeto pasen a un array como string
console.log(Object.keys(countries));// [ 'ES', 'MX', 'CO', 'CL', 'PE' ]


//Object.values 
//Metodo que hace que los valores de un objeto pasen a un array como string
console.log(Object.values(countries));// [ 'España', 'Mexico', 'Colombia', 'Chile', 'Peru' ]

//Object.entries
//Metodo que pasa por cada una de las propiedades y por separado del objeto a un array, y todos estos array estan dentro de un array
console.log(Object.entries(countries));
/*
[
  [ 'ES', 'España' ],
  [ 'MX', 'Mexico' ],
  [ 'CO', 'Colombia' ],
  [ 'CL', 'Chile' ],
  [ 'PE', 'Peru' ]
]
*/

//Creamos un objeto
const countries1 = {ES: "España", MX: "Mexico", CO: "Colombia", CL: "Chile", PE: "Peru"};
console.log(Object.entries(countries1));
//Convertir un objeto en una array Unidimensional o Bidimensional
const countriesEnArray = Object.entries(countries1);
console.log(countries1);//muestra array bidimensional

console.log(countriesEnArray[0][0]);//muestra el primer elemento del array bidimensional
console.log(countriesEnArray[0][1]);//muestra el segundo elemento del array bidimensional
console.log(countriesEnArray[1][0]);//muestra el primer elemento del segundo array bidimensional
console.log(countriesEnArray[1][1]);//muestra el segundo elemento del segundo array bidimensional