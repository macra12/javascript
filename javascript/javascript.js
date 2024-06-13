// let Name = "Fafa";
// var Number = 2025;
// const Demo = 999;
// // Demo = "200";
// console.log(Demo)
// function demo()
// {
//     let Array = ["Dara",23,"Rupp"];
//     console.log(Array[0]);
//     return Array;

// }
// console.log(demo())
// demo();
function demo(a,b)
{
    return a+ b;
}


console.log(demo("Data ",2.5555))

//array for

let array = [10,20,30];

var data;
// for(i in array){
//     data += console.log(array[i]);
// }

for (key of array)
{
    data += console.log(key);

}

console.log(array.map((e)=>e)); //output all of array
array.forEach(Element=>{console.log(Element)}); // read only one value
console.log(...array); //copy value in array