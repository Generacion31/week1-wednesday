// OPERADORES Y COMPARADORES LOGICOS

//Los operadores nos permiten realizar operacioens matematicas en JS.

//Operador de asignacion =
//Este operador es utilizado para guardar el valor a una variable 
let numero1 = 7
let numero2 = 3

//Incremetar y Decremetar
// Estos operadores son solamente validos con variables de tipo numerico. Son usadas para incremetar o decrementar dicha variable

//prefijado -- incrementacion prefijado
let numero3 = 10

++numero3 // 10 +1 = 11
console.log(numero3); //11

//prefijado --decrementando prefijado
let numero4 = 7
--numero4
console.log(numero4); //6

// EJAMPLO CON SUBFIJADO
let num1 = 5
let num2 = 2

let num3 = num1++ + num2 // 7
console.log(num3);//7
console.log(num1); //6

//OPERADORES LOGICOS

//Negacion -> Se obtine el valor contrario del valor que se este evaluando

let pruebaDeNegacion = 10 < 5 // false
console.log(pruebaDeNegacion);// false
console.log(!pruebaDeNegacion); // true

let edad = 18
let validacion = edad > 18 // false
console.log(!validacion); //true

// AND (Y) && para que sea true ambas condiciones deben ser true, si una es false el resultado sera false

let valor1 = true
let valor2 = false
let valor3 = true

console.log(valor1 && valor3); //true
console.log(valor1 && valor2); // false

/**
 * true && true = true
 * true && false = false
 * false && true = false
 * false && false = false
 */

let condicion1 = 55 > 10 //true
let condicion2 = 15 < 10 //false
console.log(condicion1 && !condicion2); // true

// OR || => Con tal que uno de los terminemos que estemos evaluando sea true, el resultado de la operacion sera true

/**
 * true || true = true
 * true || false = true
 * false || true = true
 * false || false = false
 */

// OPERADORES MATEMATICOS
// *, -, + , /, %
let num4 = 10
let num5 = 5
let resultado

resultado = num4 / num5 // 2
resultado = num4 * num5 //50
resultado = num4 - num5 //5
resultado = num4 + num5 //15
resultado = num4 % num5 //0 Si el resultado que se obtiene es igual a cero, significa que el numero es par (num4). Ahora si el resultado es diferente de cero, signfica que num4 es impar.

console.log(resultado);


//Operadores  de asignaciones abreviados

num5 += 4
console.log(num5); //9

num4 -= 2
console.log(num4); //8

let num6 = 3

num6 *= 5
console.log(num6); //15

/**OPERACIONES RELACIONALES
 * mayor que (>), menor que(<), mayor o igual que (>=), menor o igual que (<=)
 * igual que en contendio (==)
 * igual que en contendio y el tipo de dato (===)
 * distinto en valor (!=)
 * distinto en valor y en tipo de dato (!==)
 */


let num7 = 10
let num8 = 5
let num9 = 5
let numString = '5'


console.log(num7 > num8); //true
console.log(num7 >= num8); //true
console.log(18 >= 18); //true
console.log(num9 == numString); //true
console.log(num9 === numString); //false
console.log(num8 != numString); //false
console.log(num8 !== numString); //true


//  Valores truty and falsy

/**
 * las cosas que tienden a ser > 0, seran true
 * '1' se evalua como true
 * true
 * ' '
 * 
 * las cosas que tienden a ser 0, seran false
 * ''
 * 0
 */

console.log(1 && 8); //8
console.log(0 && 8); //0
console.log('' && 8); //''
console.log(' ' || 0) //' ' ;
console.log('' || 0) // 0 ;


// ?? (OPERACION DE FUSION DE NULOS)
/**
 * 
 */

console.log(null ?? 0); // 0
console.log(1 ?? 0); // 1
console.log(null ?? undefined ?? 35); // 35
console.log(null ?? 3 ?? 35); // 3
console.log(45 ?? undefined ?? 35); // 45
console.log(undefined ?? 100 ?? 35); // 100
