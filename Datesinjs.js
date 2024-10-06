const d = new Date(); // current date
console.log(d)

const e = new Date("2025-09-30")
console.log(e)

const f = new Date(2018, 11, 24, 10, 33, 30); // 6 numbers year, month, day, hour, minute, second
console.log(f)

const g = new Date()
console.log(g.toString())
console.log(g.toDateString())
console.log(g.toLocaleDateString())

const h = new Date()
year = h.getFullYear() // to get only year // methods
console.log(year) 