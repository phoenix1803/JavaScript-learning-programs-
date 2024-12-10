let a = 2

let test1 = function(){
    console.log(1)
}

let test2 = function(a){
    console.log(a+2)
}

let test3 = function(a , b){
    console.log(a+b)
}

test1()

test2(4)

test3(2 , 6)


let test5 = ()=>{
    console.log(1)
}

let test6 = a=>  console.log(a+2)
// (a) is not needed for a single parameters
//  if the function is single lined then we do not need the braces


    let test7 = (a , b)=> console.log(a+b)


test5()

test6(4)

test7(2 , 6)

