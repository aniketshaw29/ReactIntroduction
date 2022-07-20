setTimeout(function() {
    console.log("Hello Aniket")
}, 0);  

console.log("1")
console.log("2")


// Synchronous code runs in sequence.
// This means that each operation must wait for the previous one to complete before executing.
// Last in first out - CallBack stack
//sync mode (blocking) 


// Asynchronous code runs in parallel. 
// This means that an operation can occur while another one is still being processed.
//async mode (non-blocking) 





//code is compiled in sync way... line by line
// but
//async is a way to run things in parallel
// setTimeout like things make the code process in background by environment API and let it wait in callback queue
//after the main block execution is done and callback is free then those are pushed into callback from callback queue


