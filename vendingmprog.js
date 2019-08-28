var Utilityobj=require('./utility/utilityadi');
var readline=require('readline-sync');
function vendingM()
{
    
        var val=readline.question("enter amoumt :");
        //console.log(val);
        Utilityobj.vending(val,0,0);
}
vendingM();