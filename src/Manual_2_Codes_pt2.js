/*
console.log("CodeSegment: Modules")
import logger, {appName, dummyFunction} from './Manual_2_Codes_pt1.js';
// notice that the logger functon was imported outside the 

import fetch from 'node-fetch';


logger("Welcome to Chapter 10! The application name is" + appName + ".There is a function that returns " + dummyFunction());
logger("Welcome to Chapter 10! The application name is \' " + appName + "\'. There is a function that returns \'" + dummyFunction() + "\'."); 
*/

{
/*
console.log("Code Segment: Template literals and Tagged Template Literals")
import log, {appName, dummyFunction, weatherTag} from './Manual_2_Codes_pt1.js';
//Output Tagged template

log(weatherTag `The temperature is ${23} degrees centigrade. The day is `);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//That links gives some more examples of tagged template literals
*/
}

import log, {appName, dummyFunction, weatherTag} from './Manual_2_Codes_pt1.js';
//Output Tagged template
log(weatherTag `The temperature is ${23} degrees centigrade. The day is `);
