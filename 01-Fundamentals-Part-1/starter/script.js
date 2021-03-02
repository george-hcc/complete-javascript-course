'use strict'
const bill = 275;
const tip = (bill >= 50 && bill <= 300) ? (bill*0.15) : (bill*0.2);

console.log("The tip of the $" + bill + " bill is $" + tip + ".");
console.log("The total cost is $" + (bill+tip) + ".");
