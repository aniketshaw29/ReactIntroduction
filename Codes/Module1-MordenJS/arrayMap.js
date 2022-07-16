const arr = [11,22,33,44]

//.map method on a array return a array
//with this method it traverse through a array
//val = value of the element at that index
//index = index of elements of arrays from 0 to end
//arr = is the array we gonna traverse


// arr.map(function(val,index,arr){
//     console.log(val, index)
// })

const newArr = arr.map(function(val){
    return val*10
})
console.log(newArr)

