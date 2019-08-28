var readline = require('readline-sync');
var n = readline.question('Enter the number for Harmonic series');
var sum = 0;
if (n === 0)
    {
    console.log("Please enter a valid number");
    } 
else
    {
        for (i=1;i<=n;i++)
            {
                sum = sum+(1/i) ;
            }
        console.log("sum is :" + sum);
    }