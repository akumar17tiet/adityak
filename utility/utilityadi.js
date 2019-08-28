var readline = require('readline-sync');
module.exports = 
{
    flipcoin()
    {
        var heads=0;
        var tails=0;
        var readline = require('readline-sync');
        var flipcount = readline.question('enter the flip count');
        // loop for generating random number upto the times of flip.
        for(i=1;i<=flipcount;i++){
                var rndm = Math.random();
                if(rndm>=0.5)
                    {
                        heads++;
                    }
                else
                    {
                        tails++;
                    }
    //percentage of head and tail 
            var res=(heads/flipcount)*100;
                console.log("Percentage of Heads is "+res);
                var res1=(tails/flipcount)*100;
                console.log("Percentage of tails is "+res1);
            }
    },

gamblerprog()
    {
    var readline = require('readline-sync');
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
    },

coupon(l) {
        var arr = new Array(l);
        var h = 0;
        var count = 0;
        var flag = true;
        while (l > 0) {
          flag = true;
          //geting randomNumber between 0 to Highest value;
          var n = Math.floor((Math.random() * 10000) + 10000);
        if (n > 9999) {
            n = Math.floor(n / 10);
          }
          count++;//counting of random number.
          for (var index = 0; index < (h + 1) && flag; index++){
            if (arr[index] == n) {
              flag = false;
            }
          }
          if (flag == true){
            arr[h++] = n;
            l--;
          }
        }
        this.display2dArray(arr);//display distinct coupan number.
    },
       //method to store the array elements
    display2dArray(array){
        for (var index = 0; index < array.length; index++){
            console.log(array[index]);
        }
    },
input(arr,row,col)
{
    var i;
    var j;
    for(i=1; i<=row; i++)
    {
        arr[i]=[];
        for(j=1;j<=col;j++)
        {
            arr[i][j] = read.question('');
        }
    }
    return arr;
},
output(arr, row, col)
{
    var i,j;
    for(i=1; i=row;i++)
    {
        for(j=1;j<=col;j++)
        {
            console.log(arr[i][j] + " "); 
        }
        console.log('');
    }
},
dist(){
    // x -first distance
    var x =readline.question("enter the distance value x");
    //y- second distance
    var y =readline.question("enter the distance value y");
    var dist=Math.sqrt((Math.pow(x, 2))+(Math.pow(y, 2)));
    console.log("distance from (" + x + ", " + y + ") to (0, 0) = " + dist);
},   
getCurrentTime(){
    var date = new Date();
    var n = date.getSeconds();
    return n;
},


elapsedTime(start, stop) {
    var elapsed = (stop - start);
    return elapsed;
},
tripple(arr){
    for (var i = 0; i < arr.length-2; i++) 
    for (var j = i+1; j < arr.length-1; j++) 
    for (var k = j+1; k < arr.length; k++) 
    // check sum of three elements are equals to zero
    if (arr[i]+arr[j]+arr[k] == 0){ 
       console.log("the sum of three integers is zero" +arr[i]+" "+arr[j]+" "+arr[k]); 
    } 
},
inputArray(array){
    var number = readline.question("Enter total number of array elements");
    for (var i = 0; i < number; i++){
        array[i] = Number(readline.question(" "));
    }
    return array;
},
wind(){
    //t-temperature from the user input
    var t=readline.question("enter the value of t ");
    //v-volume from the user input 
    var v=readline.question("enter the value of v ");
    //Formula for the Windchill calculation 
    var w=35.74 + 0.6215*t + (0.4275*t - 35.75) * Math.pow(v, 0.16);
        console.log("Temperature = " + t);
        console.log("Wind speed  = " + v);
        console.log("Wind chill  = " + w);
},
fact(){
    var number=readline.question("enter the number");
    for(var i=1;i<=number;i++){
        var count=0;
        for(var j=1;j<=i;j++){
            if(i%j==0){
                count++;
            }
        }
        if(count==2){
            while(number%i==0){
                console.log(i);
                number=number/i;
            }
        }
    }
},

vending(value,I,TOTAL){
    // array to store values of notes

var NOTES = [ 1000 , 500 , 100, 50, 10, 5, 2, 1 ];
    // Function to find the notes and print the output
     
if(Math.floor(value / NOTES[I]>0)){
    console.log(NOTES[I] + "rs notes :" + Math.floor(value / NOTES[I]));
    TOTAL=TOTAL+Math.floor(value / NOTES[I]);
    value = value % NOTES[I];
    this.vending(value,I+1,TOTAL);
    //return;
}
if (value==0 && I==NOTES.length){
    console.log("total notes :" + TOTAL);
    return;
}
},

convertTemp(number){
    // convertion of Celsius to Fahrenheit
    if (number == 1) {
        var num = readline.question("Enter your celsius value :");
        var fahrenheit = (num * 9 / 5) + 32;
        console.log("Temperature in Fahrenheit: " + fahrenheit);
    }
    //convertion of Fahrenheit to Celsius
    else if(number==2){
        var num1 = readline.question("Enter your celsius value :");
        var celsius = (num1 - 32) * 5 / 9;
        console.log("Temperature in Celsius: " + celsius);
    }
    else{
        console.log("invalid value");
        }
},
payment(principle, year, rate){
    //formula to calculate the result
    year = this.year;
    rate = this.rate;
    principle = this.principle; 
    var R = rate / (12 * 100);
    var n = 12 * year;
    var rs = Math.pow((1 + R), (-n));
    var calculation = (principle * R) / (1 - (rs));
    console.log("Monthly payment " + calculation);
},
tobin(num){
    var str = "";
    while (num > 0){
        var r = num % 2;
        var str = r + str;
        num = Math.floor(num / 2);
    }
    //padding generate 4 byte 
    while (str.length < 8){
        str = "0" + str;
    }
    return str;
},
bubbleSort(res){
    // compare first and next elements in array and arrange 
    for (let i = 0; i < res.length; i++){
        for (let j = i + 1; j < res.length; j++){
            if (res[i] > res[j]){
                var temp = res[i];
                res[i] = res[j];
                res[j] = temp;
            }
        }
    }
    return res;
},

}
