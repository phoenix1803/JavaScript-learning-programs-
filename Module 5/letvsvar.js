var a = 20

var a = 35
// re declaration problem is solved
let b = 30

//let b = 45

b = 40 // re asssigning value

console.log(a)
console.log(b)

if(true){
    let c = 40
    console.log(c)
}


console.log(c) // variables declared with let are block scoped


// const

const e = 100
console.log(e)

// no reassignment is possible with const
//e = 106
//console.log(e)  // error