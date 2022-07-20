//native module system - common js - it uses require/module.exports

//native browser module system - ecmascript module - import/export

const n = 5;
export {n};

//there are two types of exports:
// - named
// - default

export const a = 10;

export const myName = "Andrew";


//we can have only 1 dfault export per module
export default "shop";


//a export object is created
/*
{
    five: 5,
    ten: 10,
    myName: "Andrew",
    default: "shop"
}
*/