const arr = [11,22,33,44]

//.reduce return a single value
//it traverse the array

//possible parameters
//previousValue
//currentValue
//Array

// arr.reduce(function(accumulator, curVal,){
//     console.log(accumulator,curVal)
// },0) //Here 0 is the initial value of accumulator during the 1st iteration


const total = arr.reduce(function(accumulator, curVal,){
    return accumulator+curVal
},0)

console.log(total)



//possible parameters while returning object
//previousValue
//currentValue
//currentIndex
//Array

//we can make it return a object
const objTotal = arr.reduce(function(accumulator, curVal, CurIndex,){
    const mappedCurrentElement = {};
    mappedCurrentElement[CurIndex] = curVal;
    return Object.assign(accumulator, mappedCurrentElement);
},{}) //{} for empty object


console.log(objTotal)