//the for of statement creates a loop iterating over iterable objects
//including : built in strings , array ,  array like objects like nodelists , map and set

var scores = [60,70,80,90,75]

for(var score of scores){
    console.log(score)
}

// method - index

let colors = ['red' ,  "white" , "blue" , "pink"]

for(var [index, color] of colors.entries()){
    console.log(index + "->" + color)
}

// strings 

var str = "scaler"

for(var c of str){
    console.log(c)
}