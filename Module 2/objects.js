// in Js objects are key value pairs

var person = {
    firstname: 'Adam',
    secondname: 'Smith',
    age: '45',
    ownsCar: false
}

console.log(person)

// dot notation

console.log(person.age)

// bracket notation

console.log(person['firstname'])

var cap = {
    firstname : 'Steve',
    lastname : 'Rogers',
    age : 102 ,
    isAvenger : true,

    friends : ['Bucky Barnes' , 'Tony stark' , ' Natasha romanoff'],
    

    address : {
        state : 'New york',
        city : {
            name : 'Brooklyn',
            pincode : 123456
        }
    }
}


console.log(cap.friends[1])

console.log(cap.address.city.name)

cap.isAvenger = false

console.log(cap)


cap.movies = [ 'age of iltron' , '  first avenger' , 'infinity war' , 'endgame']

console.log(cap)


delete cap.age
console.log(cap)