//'use strict'
/*
//////////CHALLENGE01

const calcAverage = (a, b, c) => (a+b+c)/3;

function checkWinner(avgDol, avgKoa){
   if(avgDol > avgKoa)
      console.log(`Dolphins win (${avgDol} vs. ${avgKoa}).`);
   else if(avgKoa > avgDol)
      console.log(`Koalas win (${avgKoa} vs. ${avgDol}).`);
   else
      console.log(`There's a draw (${avgDol} vs. ${avgKoa}).`)
}

avgDol = calcAverage(85,54,41);
avgKoa = calcAverage(23,34,27);

checkWinner(avgDol, avgKoa)


//////////CHALLENGE02

function calcTip(bill){
   if (bill >= 50, bill <= 300)
      return bill*0.15;
   else
      return bill*0.2;
}

let bills = new Array(125,555,44);

let tips = new Array(bills.length)
for(var i = 0; i < bills.length; i++){
   tips[i] = calcTip(bills[i]);
}

let total = new Array(bills.length)
for(var i = 0; i < bills.length; i++){
   total[i] = bills[i] + tips[i];
}

console.log('Bills: ', bills);
console.log('Tips: ', tips);
console.log('Total: ', total);


//////////CHALLENGE03

function calcBMI(person){
   return person.mass / person.height**2;
}

const mark = {
   fullName: 'Mark Miller',
   mass: 78,
   height: 1.69
}

const john = {
   fullName: 'John Smith',
   mass: 92,
   height: 1.95
}

const BMIMark = calcBMI(mark);
const BMIJohn = calcBMI(john);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn) {
   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}
else if(BMIJohn > BMIMark){
   console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}
else{
   console.log('Both BMIs are equal!')
}

*/