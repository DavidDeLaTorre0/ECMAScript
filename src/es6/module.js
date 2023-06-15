//modulos
//nos permite separar archivos y que van aser representados como un modulo
// palabra que usaremos Import Export

const hello = () => {
    console.log("Hello!");
};

export default hello;
//con esto tenemos nuestro modulo
// exportamos default y el nombre de nuestra funcion

/*  EJEMPLO
*   export async function getData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([{
                    movie: "El despertar de los michis",
                    year: 2021,
                    protagonist: "Mr. Michi"
                }, {
                    movie: "101 Michis",
                    year: 2019,
                    protagonist: "Tommy Michiguire"
                }]);
            }, 1000);
        });
    }
*/