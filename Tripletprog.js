var Utilityobj=require('./utility/utilityadi');
 var readline=require('readline-sync');
function triplets()
{
    var array=[];
    var arr=Utilityobj.inputArray(array);
    console.log(arr);
    Utilityobj.tripple(arr);
}
triplets(); 
