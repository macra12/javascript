let Name = ["Nara","Kioe","Kbagvv"];
Name.push("Nsvsb");
Name.push("Bvsuyv");
Name.pop();
console.log(Name);

var obj =
[
    {id:1,Name:"Khin Nara",School:"Rupp"},
    {id:2,Name:"Khin Nara",School:"Rupp"},

]
obj.pop();
var ResultName = obj.map((e)=>e);
// var resultMap = obj.filter((e)=>e);

// console.table(obj);
// var id= obj.map((e)=>e.id);
// var Name= obj.map((e)=>e.Name);
// var School= obj.map((e)=>e.School)
// console.log(Name)
// Method Filter
var ResultName = obj.filter((e)=>e.id<=1).map((e)=>e);
console.log(ResultName);
