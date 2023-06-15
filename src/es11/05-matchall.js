        //quiero buscar la palabra apple de un string
const regex =  /\b(Apple)+\b/g;

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";

//matchAll 
for (const match of fruit.matchAll(regex)) {
    console.log(match);
}

/*  DEVUELVE
[
  'Apple',
  'Apple',
  index: 0,
  input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
  groups: undefined
]
[
  'Apple',
  'Apple',
  index: 21,
  input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
  groups: undefined
]
*/


//El [@@matchAll]()método de una expresión regular especifica cómo String.prototype.matchAlldebe comportarse.
class MyRegExp extends RegExp {
    [Symbol.matchAll](str) {
      const result = RegExp.prototype[Symbol.matchAll].call(this, str);
      if (!result) {
        return null;
      }
      return Array.from(result);
    }
  }
  
  const re = new MyRegExp('-[0-9]+', 'g');
  console.log('2016-01-02|2019-03-07'.matchAll(re));
  // expected output: Array [Array ["-01"], Array ["-02"], Array ["-03"], Array ["-07"]]
  