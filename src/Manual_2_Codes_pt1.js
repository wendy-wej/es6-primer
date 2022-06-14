/*
var logger = function(output){
    console.log(output)
}

export var appName = "Chapter 10 Code Illustrations";

export var dummyFunction = function(){
    return "I am a dummy function";
}
export default logger;

export var weatherTag = function(string, temperature){
    //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions.
    //We can capture these two parts as array elements
    var substring0 = string[0]; //This is our first sentence
    var substring1 = string[1]; //This is our second sentence
    var weatherCondition; 
    //Let us use the embedded expreessions for some logic
    if(temperature > 26){
        weatherCondition = "hot day"
    }else{
        weatherCondition = "cool day"
    }
    return `${substring0}${temperature}${substring1}${weatherCondition}`
}
*/

/*
console.log("Code Segment: Using Arrow Function")
var logger = (output) => {
    console.log(output)
}

export var appName = "Chapter 10 Code Illustrations";

export var dummyFunction = () => {
    return "I am a dummy function";
}
export default logger;


export var weatherTag = (string, temperature) => {
    //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions.
    //We can capture these two parts as array elements
    var substring0 = string[0]; //This is our first sentence
    var substring1 = string[1]; //This is our second sentence
    var weatherCondition; 
    //Let us use the embedded expreessions for some logic
    if(temperature > 26){
        weatherCondition = "hot day"
    }else{
        weatherCondition = "cool day"
    }
    return `${substring0}${temperature}${substring1}${weatherCondition}`
}
*/

console.log("Code Segment: Using Let and const ")
var logger = (output) => {
    console.log(output)
}

export const appName = "Chapter 10 Code Illustrations";

export const dummyFunction = () => {
    return "I am a dummy function";
}
export default logger;


export const weatherTag = (string, temperature) => {
    //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions.
    //We can capture these two parts as array elements
    let substring0 = string[0]; //This is our first sentence
    let substring1 = string[1]; //This is our second sentence
    let weatherCondition; 

    //Let us use the embedded expreessions for some logic
    if(temperature > 26){
        weatherCondition = "hot day"
    }else{
        weatherCondition = "cool day"
    }
    return `${substring0}${temperature}${substring1}${weatherCondition}`
}