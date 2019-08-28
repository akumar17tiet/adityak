var Utility=require('./utility/utilityadi');
//var prompt = rl.createInterface(process.stdin, process.stdout);
function mainPayment()
{
    var P=readline.question('Enter the Principle amount');
    var Y=readline.question('Enter the number of years');
    var R=readline.question('Enter the Rate of interest'); 

    Utility.payment(P,Y,R);
}
mainPayment();