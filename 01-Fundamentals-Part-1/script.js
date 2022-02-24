/*let js = 'amazing';

console.log(40+8+23-10);

console.log("Jonas");
console.log(23);

let firstName = "Matilde"; // declarei a variável no formato Camel case

console.log("firstName");

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilde = "JM";
let $function = 27;
let name = "Jonas"; nunca chamar minha variável apenas de name, pois name já uma palavra reservada

não utilizar letras maiúsculas na variável

let myFirstJob = 'programmer'; forma correta de declarar um nomel para variável
let myCurrentJob = 'teacher';

let job1 = 'programmer'; forma incorreta de declarar nome para varável, o código nao fica limpo e lógico
let job2 = 'teacher';
*/
/*
let javaScriptIsFun = true; // aqui atribuímos um valor para a variável 
console.log(javaScriptIsFun);

//console.log(typeof true);
console.log(typeof javaScriptIsFun); // aqui mostramos qual é o tipo de valor que minha variável recebeu. Isso é uma digitação dinâmica. 
//console.log(typeof 23);
//console.log(typeof 'Renata');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun); // aqui alteramos o tipo de dado da minha variavel, de boolean para string. Isso é uma digitação dinâmica.


let year; // aqui temos uma variável sem valor definido. 
console.log(year);
console.log(typeof year); // undefined;

// abaixo a tipagem dinãmica
year = 1991; // aqui apenas atribuimos um valor para a variável que até então não tinha valor. IMPORTANTE: quando formos atribuir um valor para a variável nao precisamos criar/declarar novamente.
console.log(typeof year); // tipo number 


console.log(typeof null); // isso é um erro do Javascript, ele traz o valor como objeto, e isso pode causar bugs.



lastName = 'Almeida'; // nem sempre precisamos declarar uma variável. voltar na aula sobre variaveis e value no final.
console.log(lastName);
*/

// sobre Operadores básicos
//const ageJonas = 2037 - 1991; // podemos atribuir um valor númerico para a variável e ainda assim utilizar operadores matemáticos. 
//console.log(ageJonas);


/*
Operadores matemáticos
const ageJonas = 2037 - 1991; // vemos que tanto para ageJonas e Sarah repete-se, não é correto./
const ageSarah = 2037 - 2018;
console.log(ageJonas, ageSarah);
*/

/*const now = 2037 // declaramos uma nova variável chamada now, caso este valor venha a ser alterado depois. 
const ageJonas = now - 1991; 
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
*/

/*
const now = 2037; 
const ageJonas = now - 1991; 
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
*/
/*
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName); // as aspas simples servem para concatenar e dividir espaço.
*/

/* Assignment Operators
let x = 10 + 5;  //15. nesta linha do código temos primeiro o operador "+" e depois o "=", sendo o "+" é executado antes do "="
x += 10; //25. x = x + 10
x *= 4; //100. x = x * 4
x -= 1; //99. x = x - 1
x /= 2; //49.5 x = x / 2
x++; // adiciona +1 
x--; //subtrai -1
console.log(x);

*/
/*
 Operadores de Comparação
const now = 2037; 
const ageJonas = now - 1991; 
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
,
let x = 10 + 5;
x += 10; 
x *= 4; 
x -= 1; 
x++;
x--;
console.log(x);

// Operadores de Comparação
console.log(ageJonas > ageSarah); // Aqui o valor será true, aqui ele compara o resultado que está no programa acima>, <, >= , <=
console.log(ageSarah >= 18);

*/

//Operator precedence
const now = 2037; 
const ageJonas = now - 1991; 
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y; // aqui declaramos uma variável vazia 
x = y = 25 - 10 - 5; // x = y = 10, x = 10  o JS realizará primeiro os operadores negativos e depois passará para os de igualdade
console.log(x, y); // 10 10

const averageAge = (ageJonas + ageSarah) / 2 // calculando média de idade entre Jonas e Sarah. soma primeiro o que esta em parenteses e depois a divisão;
console.log(ageJonas, ageSarah, averageAge);



