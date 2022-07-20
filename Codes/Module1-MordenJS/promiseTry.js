//promise is initialized in sync way
//but resolved/rejected in async way

// const doSome = new Promise((resolve) => {
//   resolve("Hello");
// });
// console.log(doSome);  /* output: promise { 'hello' } */
// doSome.then((resolvedValue) => {
//   console.log(resolvedValue); /* output:  hello*/
// });




//whenever we reject a promise we reject with a reason
//we gonna reject promise with error...

// const doSome2 = new Promise((resolve, reject) =>{
//     reject(new Error("promised failed"));
// });
// console.log(doSome2) //this won't run because of error called
// doSome2.then((resolvedValue) =>{
//     console.log(resolvedValue) //this won't run because of error called
// });





//now we will use catch block

// const doSome3 = new Promise((resolve, reject) =>{
//     reject(new Error("promised failed"));
// });
// doSome3
//     .then((resolvedValue) =>{
//         console.log(resolvedValue)  //not run due to error
//     })
//     .catch((err) =>{
//         console.log("error is",err.message) /* output:  error is promised*/
//     });




//we can have multiple 'then'

// const doSome4 = new Promise((resolve) => {
//   resolve("Shaw");
// });
// doSome4
// .then((resolvedValue) => {
//   console.log(resolvedValue); /* output: Shaw */
// })
// .then((value) => { //this value will be undefined until the above 'then' returns something
//     console.log("Value is",value); /* output: value is undefined */
// })
// .catch((err) =>{
//    console.log("error is",err.message) //will not run coz no run
// });


// const doSome5 = new Promise((resolve) => {
//     resolve("Shaw 5");
//   });
//   doSome5
//   .then((resolvedValue) => {
//     console.log(resolvedValue); /* output: Shaw */
//     return "Aniket"
//   })
//   .then((value) => { 
//       console.log("Value is",value); /* output: value is Aniket */
//       return 10;
//   })
//   .then((value3) => { 
//     console.log("Value is",value3); /* output: value is 10 */
//   })
//   .catch((err) =>{
//      console.log("error is",err.message) //will not run coz no run
//   });



//utilization of promise

const waitSome = (timeoutInMs) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve();
        },timeoutInMs);
    });
};

console.log("1")

//a promise is always resolved in a non blocking way
//it will always be in the end
//the promise will always appear after all sync codes
waitSome(4000).then(() =>{ 
    console.log("4 seconds passed")
}); 

console.log("2")



//fetch is only available in browser
//fetch a json from a url

/*
fetch('https://jsonplaceholder.typicode.com/todos/1') //this prints a promise
  .then(response => response.json()) //this 'then' returns the json
  .then(json => console.log(json)) //this print json

*/

