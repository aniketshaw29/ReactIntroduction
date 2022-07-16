const arr = [11,22,33,44]

//.reduce return a single value
//it traverse the array

//possible parameters
//previousValue
//currentValue
//Array

//Here 0 is the initial value of accumulator during the 1st iteration

// arr.reduce(function(accumulator, curVal,){
//     console.log(accumulator,curVal)
// },0)


const total = arr.reduce(function(accumulator, curVal,){
    return accumulator+curVal
},0)

console.log(total)