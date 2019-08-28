var myarg = process.argv.slice(2);
var n=parseInt(myarg[0]);
var i=0;
var val=1;
if(n===0)
{
    console.log("1");

}
else
{
    for(i;i<n;i++)
    {
        val = val*2
        console.log(val);
    }
}
