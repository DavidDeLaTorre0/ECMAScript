//es11/03-promise-allsettled
//Promise-any

const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve 1"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));


//nos va a devolver la primera que resuleva de forma satisfactoria (la primera que cumpla)

Promise.any([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta)) // Promise 1
    .catch(error => console.log(error))