//Promise.allSettled
//Con esto vamos a tener el punto de si todo está resuelto

/*
El Promise.allSettled()método toma una iteración de promesas como entrada y devuelve un solo Promise.
Esta promesa devuelta se cumple cuando se liquidan todas las promesas de entrada (incluso cuando se pasa un iterable vacío), 
con una matriz de objetos que describen el resultado de cada promesa.
*/

const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));

Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response));
//reason: cuando entra en reject , value: cuando entra en resolve
/*
[
  { status: 'rejected', reason: 'Reject' },
  { status: 'fulfilled', value: 'Resolve' },
  { status: 'fulfilled', value: 'Resolve 2' }
]
*/


const promise4 = Promise.resolve(3);
const promise5 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise4, promise5];

Promise.allSettled(promises).
    then((results) => results.forEach((result) => console.log(`${result.status} -- ${result.value || result.reason}`)));
//Lo que hago con || es que me muestre uno de los valores, ya que uno de ellos siempre será undefined
// expected output:
/*
fulfilled -- 3
rejected -- foo
*/






/*
El método Promise.all(iterable) devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable 
han sido concluídas con éxito, o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada.
*/

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});


/*
Promise.all se rechaza si uno de los elementos ha sido rechazado y Promise.all falla rápido: Si tienes cuatro promesas que se resuelven después de un timeout 
y una de ellas falla inmediatamente, entonces Promise.all se rechaza inmediatamente.
*/

var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
  });
  var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
  });
  var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
  });
  var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
  });
  var p5 = new Promise((resolve, reject) => {
    reject("reject");
  });
  
  Promise.all([p1, p2, p3, p4, p5]).then(values => {
    console.log(values);
  }, reason => {
    console.log(reason)
  });
  
  //From console:
  //"reject"
  
  // Evenly, it's possible to use .catch
  Promise.all([p1, p2, p3, p4, p5]).then(values => {
    console.log(values);
  }).catch(reason => {
    console.log(reason)
  });
  
  //From console:
  //"reject"