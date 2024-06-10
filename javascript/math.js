let a = 2805752.999;
let b = 37635;
const result = Math.sqrt(b);
console.log(result);
console.log(a.toFixed(3));
const resultMath = Math.ceil(a);
console.log(resultMath);
const resultMath2 = Math.pow(b,3);
console.log(resultMath2);

var Array = [10,20,30,40,39];
var resultMath3 = Math.max(...Array);
console.log(resultMath3);

//spread operator
let A1 = [12,13,14,15];
let A2 = [16,16,17,19];

let CombingArray = [...A1,...A2];

console.log(CombingArray);

//passing argument

// let X = 10;
// let Y = 20;
let A4 = [20,3];
function Num(X,Y)
{
    return X*Y;
}
// console.log(Num(20,90));
console.log(Num(...A4));

//add Array
let Array3 = [30,...A4];
console.log(Array3);


let u = 200.32;
let T = Math.floor(u);
console.log(T);

var I = Math.floor(Math.random()*100+1);
console.log(I.toFixed(2))
