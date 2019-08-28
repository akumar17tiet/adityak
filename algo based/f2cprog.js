var Utility=require('../utilityadi/utility/');
var readline=require('readline-sync');
function tempConversion()
{
   var number=readline.question("Press 1 to convert temperature to fahrenheit and 2 for fahrenheit to temperature");
   Utility.convertTemp(number);
}
   tempConversion();