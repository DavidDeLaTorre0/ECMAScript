//FromEntries
/*
Object.fromEntries()
El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.
*/


//Con Object.fromEntries, puedes convertir de un Array a un Object
const entries = new Map([["name","David"],["edad",24]]);
console.log(entries);//Map(2) { 'name' => 'David', 'edad' => 24 }
console.log(Object.fromEntries(entries));//{ name: 'David', edad: 24 }



//Con Object.fromEntries, puedes convertir de un Map a un Object:
const entries1 = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
  const obj = Object.fromEntries(entries1);
  
  console.log(obj);
  // expected output: Object { foo: "bar", baz: 42 }