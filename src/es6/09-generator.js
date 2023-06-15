
//Mirar en Doc sobre el curso.txt que es un generador
// con el * sabemos que es un generator
function* iterate (array)
{
    //por cada elemento del array
    for(let value of array){
        //retornamos value
        yield value;
    }
}

const it = iterate(["Oscar", "David", "Ana", "Ulises", "Jennifer"]);
//"Recuerda su estado", la primera vez devuelve Oscar, la segunda recuerda su estado y devuelve David, y asi con lo demás..
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

const array = [5, 4, 3, 2, 1]

for (let numero of array) {
  console.log(numero) // 5 4 3 2 1
}


//generador de ids
export function* getId() {
    let lastId = 1;
    while (true) {
      yield lastId++;
    }
  }
const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().done);