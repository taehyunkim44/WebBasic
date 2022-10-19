let ranking = ["Jason", "Alice", "Chris"];
// undefined
console.log(ranking);
// VM235:1 (3) ['Jason', 'Alice', 'Chris']0: "Jason"1: "Alice"2: "Chris"3: "Jane"length: 4[[Prototype]]: Array(0)
// undefined
console.log(ranking[0]);
// VM338:1 Jason
// undefined
console.log(ranking[1]);
// VM350:1 Alice
// undefined
console.log(ranking.length);
// VM494:1 3
// undefined
ranking.push("Jane");
// 4
console.log(ranking);
// VM614:1 (4) ['Jason', 'Alice', 'Chris', 'Jane']0: "Jason"1: "Alice"2: "Chris"3: "Jane"length: 4[[Prototype]]: Array(0)
// undefined
ranking.pop();
// 'Jane'
console.log(ranking);
// VM666:1 (3) ['Jason', 'Alice', 'Chris']
// undefined
console.log(ranking.includes("Chris"));
// VM824:1 true
// undefined
console.log(ranking.includes("Jane"));
// VM887:1 false
// undefined
console.log(ranking.indexOf("Chris"));
// VM1019:1 2
// undefined
