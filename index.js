const prompt = require("prompt-sync")();

const day = prompt("What day is it today? ");
const where = day == "Monday" ? "Physical School" : "Online Class";
console.log(where);
