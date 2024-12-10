// In js , the for in loop allows us to loop through the properties of an object
//the statements of code found within the loop body will be executed once for each property of the object

var colors = {
    primary : 'Blue',
    secondary : "Red",
    tertiary : "black"
}

for(var color in colors){
    console.log(color +' -> ' +colors[color])
}


var colorsarray = [ 'yellow' ,  "red" , 'blue' , 'white']

for(var color in colorsarray){
    console.log(color + '->'+colorsarray[color])
}