const age = 12;
const name1 = "Aniket Shaw";


const sentence = "My name is "+ name1 + " and my age is " + age;
console.log(sentence);

const sentence1 = `my age is ${age} - name is ${name1}`;
console.log(sentence1);

const sentence2 = `my name is ${12>4 ? "Komal" : name1} - age is ${age}`;
console.log(sentence2);

function getName(){
    return "Komal Singh"
}

const sentence3 = `my name is ${getName()} - age is ${20}`;
console.log(sentence3);


