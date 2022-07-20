const car = {
    color: "red",
    gear: 5,
    engine: "petrol" 
}
console.log(car)


//acessing the attributes of an object
const e = car.engine;
const g = car.gear;
const c = car.color;
console.log(e, c, g);



//multiple initializations
const {color: c1, gear :g1, engine: e1} = car;
console.log(c1, g1, e1)



//-------------------------------


function printCar(argCar){
    console.log(argCar)
}
printCar(car)



function printCar2(argCar){
    console.log(argCar.engine)
    console.log(argCar.color)
    console.log(argCar.gear)
}
printCar2(car)


//getting selective arguments = object dis-structuring
function printCar3({color : c, gear : g}){
    console.log(c,"   ---   ",g)
}
printCar3(car)



//if have two arguments
function printCar4({color : c, gear : g}, person){
    console.log(c,"   --->   ",g)
    console.log(person)
}
printCar4(car,{name1: "Aniket", age: 28});

person = {
    name1: "Aniket", age: 28
}

function printCar5({color : c, gear : g}, {name1: n}){
    console.log(c,"   <--->   ",g)
    console.log(n)
}
printCar5(car,person);


//----------------------------------------------------------------

//default values of arguments
//empty default value
function printCar6({color, gear} = {}){
    console.log("------------The out of printcar6------------------")
    console.log(color,"  -> ",gear)
}
printCar6()


//with default values 
function printCar7({color, gear} = {color: "green", gear:2}, p){
    console.log("------------The out of printcar7------------------")
    console.log(color,"  -> ",gear)
    console.log(p)
}
printCar7(car,person)
printCar7({},{})
printCar7(undefined,person)



//default values for specific attributes
//with default values 
function printCar8({color = "yellow", gear = 3} = {}){
    console.log("------------The out of printcar8------------------")
    console.log(color,"  -> ",gear)
}
printCar8()


//------------------------------

//refactor of des-structuring
function printCar9(carObj = {}){
    const {color = "yellow", gear = 3} = carObj;
    console.log("------------The out of printcar9------------------")
    console.log(color,"  -> ",gear)
}
printCar9()


//----------------------------------------------------------------

//array dis-structuring
const arr = [1,2,3,4,5]

const [first, second, third] = arr;

//order matters
console.log(first, second, third)

const [, , t] = arr;

console.log(t)

