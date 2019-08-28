var rline = require('readline-sync');
var username = rline.question('Your Name:');
if(username.length >= 2) 
{
console.log('Hi' + ' '+ username);
console.log('How you doing?');
}
else{
    console.log('Invalid Username!');
}