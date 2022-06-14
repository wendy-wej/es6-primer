{
    var myage = 19;
    var myname = "Chinwendu Nweje";
    console.log(`Hello There! my name is ${myname} and i am ${myage} years old`);
}

{
console.log("Code Segment: Tagged Template Literals")
var logger = function(output){
    console.log(output)
}

var weatherTag = function(string, temperature){
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

console.log("Code Segment: Template literals and Tagged Template Literals")

logger(weatherTag `The temperature is ${49} degrees centigrade. The day is `);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//That links gives some more examples of tagged template literals
}

{
    console.log("Code Segment: Use of 'var'")
 var grade_remark = "I am happy, I got an A";
 var grade = 40;

    if (grade_remark < 70){
        var grade_remark = "Argh! I'm angry. I failed!";
        console.log(grade_remark)//prints "Argh! I'm angry. I failed!"
    }

    console.log(grade_remark); // prints "Argh! I'm angry. I failed!"
    console.log(" ")
}

{
    console.log("Code Segment: Use of 'Let'")
var grade_remark = "I am happy, I got an A";
var grade = 40;

    if (grade_remark < 70){
        let grade_remark = "Argh! I'm angry. I failed!";
        console.log(grade_remark)//prints "Argh! I'm angry. I failed!"
    }

    console.log(grade_remark); // prints "I am happy, I got an A"
    console.log(" ")
}

{
    console.log("Spread Operator: Destructuring");
    var genericFunction = () => {
        var crystal_gems = ['Ruby', 'Sapphire', 'Garnet', 'Rose', 'Bismuth', 'Opal', 'Pearl']
        var [firstGem, secondGem] = crystal_gems; //here we assign firstGem to 'Ruby' and 'secondGem' to 'Sapphire'
        return `Garnet is made of two gems: The first is ${firstGem} and the second is ${secondGem}`;
    }

    console.log(genericFunction());
    console.log(" ");
}

{
    console.log("Spread Operator: Destructuring using Spread Operator");
    var genericFunction = () => {
        var crystal_gems = ['Ruby', 'Sapphire', 'Garnet', 'Rose', 'Bismuth', 'Opal', 'Pearl']
        var [firstGem, secondGem, ...otherGems] = crystal_gems; //here we assign firstGem to 'Ruby' and 'secondGem' to 'Sapphire'
        return `Garnet is made of two gems: The first is ${firstGem} and the second is ${secondGem}. The other Crystal Gems are ${otherGems}`;
    }

    console.log(genericFunction());
    console.log(" ");
}

{
    console.log("Destructuring using spread operator in Object Literals.")
    var atla_aang= () => {
         var aang_biodata = {
            fname: 'Aang',
            origin: 'Southern Air Temple',
            lemur_name: 'Momo', 
            bison_name: 'Appa',
            element: 'Air'
        }

        //here we break his biodata into new variables.
        var {fname, origin, ...otherData} = aang_biodata;

        return `The Avatar's name is ${fname}, he is from the ${origin}. Other personal element includes his element is ${otherData.element} and he has a flying bison called ${otherData.bison_name}`
    }
    console.log(atla_aang())
}

//Default Parameter
{
    console.log("Code Segment: Default Parameter");
     const genericFunction = (a, b=1) => { 
        //This function multiplies any two numbers 
        //if only one argument is sent as argument when function is called, b will default to 1. 
        return (a * b); 
       }
    console.log(genericFunction(4));
}

// Using multiple parameters
{
    function multiplier(){
        var product = 1;
        if(arguments.length < 2){
            throw new Error("Not enough values to multiply")
        }
        for (var i=0; i < arguments.length; i++){
            product = product * arguments[i]
        }
        return product
    }

    console.log(multiplier(2,6,8,4));
    console.log(" ")
}

{
    console.log("Code Segment: Multiple Parameters using spread");
    const genericFunction = (...numbers) => { 
        var product = 1; 
        if (numbers.length < 2){ 
        throw new Error("Illegal arguments counts. Arguments must be greater than 1") 
        } 
        //loop through using the old forEach approach which still works 
        //numbers.forEach((number)=>{ 
        // product = product * number; 
        //}); 
        //More elegantly we can replace the above forEach with ES6's for...of 
        for(let number of numbers){ 
        product = product * number; 
        } 
        return product; 
       } 

       console.log(genericFunction(3,7,2,7));
}