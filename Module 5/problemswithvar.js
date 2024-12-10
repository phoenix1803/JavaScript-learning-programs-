// var a = 21
//var a = 35 // redeclaration of a variable

console.log(a) 



if(a===25){
    var b = 40
    console.log(b)
}

// variables declared with var keyword are not blocked scoped they are a function scoped

console.log(b) // no error

function test(){
    var c = 100
    console.log(c)
}

console.log(c) // this would give error