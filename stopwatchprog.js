//stopwatch prog
var UtilityBJ=require('./utility/utilityadi');
var readline=require('readline-sync');
function stopWatch()
{
    var startTime=readline.question('Press 1 to start time =>');
     {
        if(startTime=="1")
        {
            var start=UtilityBJ.getCurrentTime();
            var stopTime=readline.question('Press 0 to stop time=> ');
            {
             if(stopTime=="0")
             {
                 var stop=UtilityBJ.getCurrentTime();
                 var res=UtilityBJ.elapsedTime(start,stop);
             }
             console.log("elapsed Time is = "+res+"sec");
                  
            }
        }
            else
        {
            console.log("invalid input");
            stopWatch();
        }
    }
}
stopWatch();
