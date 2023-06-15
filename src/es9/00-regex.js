//MIRAR EN DOC PARA EL CURSO
//Regex
//  En la version ECMAScript 9 añaden esta caracteristica
// Como Ternariso en JS

// Validar una fecha
const regex = /(\d{4})-(\d{2})-(\d{2})/;

//El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null
const matches = regex.exec('2022-01-01');

//console.table muestra una tabla dentro de la consola
console.table(matches);

/* DEVUELVE 
        ┌─────────┬──────────────┐
        │ (index) │    Values    │
        ├─────────┼──────────────┤
        │    0    │ '2022-01-01' │
        │    1    │    '2022'    │
        │    2    │     '01'     │
        │    3    │     '01'     │
        │  index  │      0       │
        │  input  │ '2022-01-01' │
        │ groups  │  undefined   │
        └─────────┴──────────────┘

*/

// Busca "quick brown" seguido de "jumps", ignorando los caracteres que se encuentren entre medias.
// Recuerda "brown" y "jumps"
// Ignora mayusculas y minusculas
var re = /quick\s(brown).+?(jumps)/ig;
var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
console.table(result);

/*
┌─────────┬───────────────────────────────────────────────┐
│ (index) │                    Values                     │
├─────────┼───────────────────────────────────────────────┤
│    0    │            'Quick Brown Fox Jumps'            │
│    1    │                    'Brown'                    │
│    2    │                    'Jumps'                    │
│  index  │                       4                       │
│  input  │ 'The Quick Brown Fox Jumps Over The Lazy Dog' │
│ groups  │                   undefined                   │
└─────────┴───────────────────────────────────────────────┘
*/

/*

La siguiente tabla muestra el resultado de este script:

Objeto	    Propiedad/Índice	                    Descripción	                                                     Ejemplo
result	{ 
            [0]	                Todas las partes de la cadena que cumplen la expresión regular	                Quick Brown Fox Jumps
            -------------------------------------------------------------------------------------------------------------------------------
            [1],...[n]	        Las subcadenas entre parentesis que han sido encontradas, si hay alguna.        [1] = Brown [2] = Jumps
                                El número de subcadenas encontradas es ilimitado
            -------------------------------------------------------------------------------------------------------------------------------
            index	            El índice de base-0 del elemento encontrado en la cadena.	                            4
            -------------------------------------------------------------------------------------------------------------------------------
            input	                             La cadena original.	                                The Quick Brown Fox Jumps Over The Lazy Dog
}
-------------------------------------------------------------------------------------------------------------------------------------------------
re	{
            lastIndex	        El índice sobre el cual empieza la siguiente busqueda.                                  25
                                Cuando no se usa g (busqueda global), esto va a ser siempre 0.	
            --------------------------------------------------------------------------------------------------------------------------------------
            ignoreCase	        Indica si la bandera "i" ha sido usada para ignorar mayusculas y minusculas.	        true
            --------------------------------------------------------------------------------------------------------------------------------------
            global	            Indica si la bandera "g" fue usada para hacer una busqueda global.	                true
            --------------------------------------------------------------------------------------------------------------------------------------
            multiline	        Indica si la bandera "m" fue usada para buscar en cadenas sobre multiples lineas	false
            --------------------------------------------------------------------------------------------------------------------------------------
            source	                        El texto del patrón de busqueda                                        	quick\s(brown).+?(jumps)
}
-------------------------------------------------------------------------------------------------------------------------------------------------

*/