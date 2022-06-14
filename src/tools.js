var logger = function(output){
    console.log(output)
    }
    export var appName = "ES6 Review";
    export var dummyFunction = function(){
    return "I am a dummy function";
    }
    export default logger

/*
//var Adder = function(a,b){
function Adder(a, b) {
    return a + b;
   // console.log(x);
}

let sum = Adder(5,7);
console.log(sum)


const adder = (a, b) => {
    return a + b;
}
let suma = adder(23,7);
console.log(suma)

export const genericFunction = () => { 
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements 
    let [firstLang, secondLang] = languages; //assign first element in languages array to firstLang and second element to secondLang.
 //  let [firstLang, secondLang ...otherLanguages] = languages; //assign first element in languages array to firstLang and second element to secondLang.
    return `First language is ${firstLang} and the second is ${secondLang}` 
   }

*/