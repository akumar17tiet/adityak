/*leapyear program by eddy*/
var readinput = require('readline-sync');
var readyear =  readinput.question('Enter The leap year = ');
if(readyear.length === 4)
{

    if((readyear%4 === 0 && readyear%100 != 0) || (readyear%400 === 0))
    {
        console.log(readyear + " "+ 'is a leap year');
    }

    else
    {
        console.log(readyear + ' '+'is not a leap year');
    }
}
else
{
    console.log('Enter the proper year!');
}