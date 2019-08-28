//couponcode by adi
let Utilityobj=require('./utility/utilityadi');
var readline=require('readline-sync');
function couponNum()
{
    
    var l = readline.question("How many coupon number you wants");
    if(l>=0)
    Utilityobj.coupon(l);//calling of Coupon method.
    else
    console.log("Please enter correct Number");
}