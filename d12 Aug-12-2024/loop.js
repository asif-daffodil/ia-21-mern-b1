var studentNames = ["Arefin", "Emon", "Abdullah", "Adnan"];
// console.log(studentNames[0]);
studentNames.push("Moin");
studentNames.push("Badhon", "Modon");
// console.log(studentNames);
studentNames.pop();
// console.log(studentNames);
studentNames.unshift("Alvi", "Nobin");
studentNames.unshift("Kuddus");
// console.log(studentNames);
studentNames.shift();
// console.log(studentNames);

for (var i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i]);
}

