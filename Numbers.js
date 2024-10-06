const score = 22
const balance = score.toString().length
console.log(balance)

console.log(balance.toFixed(2))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// ------------------------- Maths ---------------------------------------

console.log(Math.abs(-4)) //- to +
console.log(Math.round(4.6)) // round off value
console.log(Math.ceil(4.4)) //higher value
console.log(Math.floor(4.6))  //lower value
console.log(Math.sqrt(12))  // square root

console.log(Math.random())
console.log(Math.random()*10 + 1)
console.log(Math.floor(Math.random()*10 + 1))

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * max - min + 1 ) + min )