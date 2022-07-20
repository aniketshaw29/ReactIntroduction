//rest operator 

function something(a,b, ...restVariables) {
    console.log(a)
    console.log(b)
    console.log(restVariables)
}
something(1,3,"adfad",32,() => { return "Hello Aniket"})


//rest with object des structuring
const person = {
    name: "John",
    age: 34,
    gender: "Male"
}
const {name: a, ...restOfPerson} = person;
console.log(a)
console.log(restOfPerson)


//----------------------------------------------------------------

//merging of two objects

const animal = {
    legs: 4,
    language: "Non-Human"
}
const cat = {
    sound: "Meow",
    color: "White"
}

const mergedOfAnimalCat = {...animal, ...cat}
console.log(mergedOfAnimalCat)

const dog = {
    sound: "Bhow bhow",
    color: "Brown",
    ...animal
}
console.log(dog)

//----------------------------------------------------------------

//one object inside another

const fish = {
    liveIn: "Water",
    animal,//Same as    animalProperties: animal 
    animalProperties: animal 
}
console.log(fish)


//-------------------------------------------------------------

//merging arrays
const someArr = [1,2,3,4,5]
const otherArr = [1,2,3]
const result = [...someArr, ...otherArr]
console.log(result)