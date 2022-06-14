import logger, {appName, dummyFunction } from './tools.js';
import fetch from 'node-fetch';

logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction() );

logger(`Welcome! The application name is "${appName}". There is
a function that returns "${dummyFunction()}".`);

/*
new Promise((resolve, reject) => { 
    setTimeout(()=>{ 
    reject("Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I am sending a <em>reject</em> instead of a <em>resolve</em>!"); //send out a reject feedback
    }, 1000) })
    .then((data) => { logger(`${data}`);}) //This should output "Timeout is over" 
    .catch((error) => {//This will only be reached it the asynchronous function returned a reject statement. 
    logger(`Error message received: ${error}`); 
    }).then(() =>{ 
    logger(`This function is executed after success or failure is returned`) 
    });
 */

/*
const mysetTimeout = (milliseconds) => {
new Promise((resolve, reject) => { 
    setTimeout(()=>{
    resolve(`Timeout is over again! I timed out for ${milliseconds} ms`); //send out success message with data using resolve
    }, milliseconds)
})
.then((data)=> {logger(`${data}`) })
.catch((error)=>{logger(`Error found: $(error)`) })
}

mysetTimeout(3000)
*/



/*
let url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1 
fetch(url) 
 .then(response => response.json()) //convert data returned to json 
 .then(data => logger(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data 
 .catch(error => logger(`Error: ${error}`));
*/

//map function in iterables



//This is a function that takes each element in the array (each name)and prints it wth the message.
/*const addressees = ["John Uzo", "Mary Stuart", "Paul Umoh"];
addressees.map((addressee) => {
    let message = `Dear ${addressee},
    It is my pleasure to inform you that your decision letter is ready for collection`;
    logger(message);
});
*/

//Write
/* 
const recipients = ["James Kaka", "Chinwendu Nweje", "Bolu Osan"];
const message = ["You are invited to my party", "You can eat my rice", "You have been accepted to Harvard"]

const MailMerger = ((name_of_guest, message) => {
    recipients.map((name_of_guest, message) =>{
        let invite = `Dear ${name_of_guest}, ${message}`;
        logger(invite);
    });
});
*/