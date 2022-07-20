//destructing the export object
//use the same name to access named object


//importing named object

// import {five, myName} from "./sampleECMA.mjs";
// console.log(five,myName)




//Default var import

// import mydefaultImportVar from "./sampleECMA.mjs";
// console.log(mydefaultImportVar)



// importing default and named together

// import mydefaultImportVar, {n, myName} from "./sampleECMA.mjs";
// console.log(mydefaultImportVar, n, myName)


//importing entire export together

import * as sampleECMA from "./sampleECMA.mjs";
console.log(sampleECMA)
console.log(sampleECMA.default)
console.log(sampleECMA.a)
console.log(sampleECMA.myName)
console.log(sampleECMA.n)