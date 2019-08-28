/******************************************************************************
 *  @Purpose        : To find power of two through command line .   
 *  @file           : powof2.js
 *  @overview       : To take command line for getting power of two which should not exceed 31.
 *  @author         : ADITYA KUMAR
 *  @version        : v8.15.0
 *  @since          : 23-08-2019
 ******************************************************************************/
var readline = require('readline-sync');
var pow=readline.question("enter power");
    if(pow==0){
        console.log(1);
    }
    for(var i=1;i<=pow;i++){
        console.log(Math.pow(2, i));
    }