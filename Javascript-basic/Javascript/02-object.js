const jasonData = {
  name: "Jason",
  age: 25,
  gender: "Male",
};
// undefined
console.log(jasonData);
// VM300:1 {name: 'Jason', age: 25, gender: 'Male'}age: 25gender: "Male"name: "Jason"[[Prototype]]: Object
// undefined
console.log(jasonData.name);
// VM320:1 Jason
// undefined
console.log(jasonData["name"]);
// VM370:1 Jason
// undefined
console.log(jasonData[name]);
// VM408:1 undefined
// undefined
let name = "age";
// console.log(jasonData[name])
// VM571:2 25
// undefined
let key = "gender";
console.log(jasonData[key]);
// VM769:2 Male
// undefined
console.log(Object.keys(jasonData));
// VM963:1 (3) ['name', 'age', 'gender']
// undefined
let result = Object.keys(jasonData);
// undefined
console.log(result);
// VM1209:1 (3) ['name', 'age', 'gender']
// undefined
console.log(result.includes("name"));
// VM1377:1 true
// undefined
console.log(Object.values(jasonData));
// VM1583:1 (3) ['Jason', 25, 'Male']
// undefined
jasonData.favoriteFood = ["rice", "noodle", "chicken"];
// (3) ['rice', 'noodle', 'chicken']
console.log(jasonData);
// VM1792:1 {name: 'Jason', age: 25, gender: 'Male', favoriteFood: Array(3)}age: 25favoriteFood: (3) ['rice', 'noodle', 'chicken']0: "rice"1: "noodle"2: "chicken"length: 3[[Prototype]]: Array(0)gender: "Male"name: "Jason"[[Prototype]]: Object
// undefined
