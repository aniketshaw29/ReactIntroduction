function hello(){
    console.log("Hello Aniket")
}

//arrow functions
const hello2 = () => {
    console.log("Hello Aniket Shaw")
};

hello()
hello2()

//----------------------------------------------------------------


//supply a arrow function with .map and .reduce
const arr = [11,22,33,44]
newArr = arr.map((val)=>{
    return val+1; 
});
console.log(arr)



//----------------------------------------------------------------


//returning is very easy with arry function
function shaw(){
    return "Shaw bhai 1";
}

const shaw2 = () => {
    return "Shaw bhai 2"
};

//if only one statement can avoid return keyword
const shaw3 = () => "Shaw bhai 3";


console.log(shaw())
console.log(shaw2())
console.log(shaw3())

//----------------------------------------------------------------



//return a object 
const printObj = () => {
    return {
        id: 2, 
        name: "Aniket is good boy"
    };  //returning object
};
console.log(printObj())


//----------------------------------------------------------------

const name3 = () => (
    {
        id: 30, 
        name: "I am indian"
    }
);
console.log(name3())

//----------------------------------------------------------------

//argument of function
function printAge(age) {
    console.log("My age is "+age)
}


const printAge2 = (age) => {
    console.log("My age is "+age)
};

printAge(19) //printing 29
printAge2(25) //printing 25
printAge() //printing undefine

//-------------------------------

//default argument
const printName = (name1="Rahul") => {
    console.log("My name is "+name1)
};
printName()
printName(undefined)
printName("shaw")


const printName2 = (name1="Rahul", age) => {
    console.log("My name is "+name1+" and my age is "+age)
};
printName2()
printName2(undefined,undefined)
printName2("Aniket")
printName2("Aniket",19)


//-------------------------------


