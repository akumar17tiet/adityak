var readline=require('readline-sync');
var stake=parseInt(readline.question("enter the stake value:"));
var goalamt=readline.question("enter the goal amount:");
var numoftimes=parseInt(readline.question("enter the number of times played:"));
var totaltime=parseInt(readline.question("enter the time you want to play for:"));
win=0;
lose=0;
while(stake !=0 && stake != goalamt && numoftimes<=totaltime)
{
    var run = Math.round(Math.random());
    if (run==1)
    {
        win++;
        stake++;
        console.log('win and loose if condition', win, stake);
    }
    else{
        lose++;
        stake--;
        console.log('win and loose if condition', lose, stake);
    }
    numoftimes++;
}
//total percentage calculation
var wining = (win / totaltime) * 100;
var loosing = 100 - wining;
console.log("Number of wins " + win)
console.log("wining percentage " + wining);
console.log("lossing percentage " + loosing);
