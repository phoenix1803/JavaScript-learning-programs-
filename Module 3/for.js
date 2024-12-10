// loops are the statements that we can use to control a floe of the progress and do repetitive tasks

var a = "Hello world"

//console.log(a)
//console.log(a)
//console.log(a)
//... so on till 10 times


for(var i=0 ; i<10 ; i++){
    console.log(a)
}


// you have an array and you have to square each element in the array

var num = [2 , 2, 3, 3, 4, 5, 9, 6, 7, 9, 8 ];

var squaredarr = []
for(var i = 0 ; i<num.length ; i++){
    squaredarr.push(num[i]*num[i])
}

console.log(squaredarr)