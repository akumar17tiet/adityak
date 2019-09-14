const fs = require('fs');
var data = fs.readFileSync('./JSONfiles/inventory.json','utf-8'); //read file from json
/*
* function JSON.parse() is used to convert the string into a JavaScript Objects
*/
var jsonGrocery = JSON.parse(data);
console.log(" data-->\n", jsonGrocery);
function rice(weight){
    for (var i = 0; i < jsonGrocery.Rice.length; i++) {
        /*
        * calculate total and print
        */
        console.log("Per Kg. of " + jsonGrocery.Rice[i].name + " costs " + jsonGrocery.Rice[i].price + " and for " + weight + " Kgs. costs " + weight * jsonGrocery.Rice[i].price);
    }
    return true;
}
function wheat(weight){
    for (var i = 0; i < jsonGrocery.Wheats.length; i++) {
        /*
         * calculate total and print
         */
        console.log("Per Kg. of " + jsonGrocery.Wheats[i].name + " costs " + jsonGrocery.Wheats[i].price + " and for " + weight + " Kgs. costs " + weight * jsonGrocery.Wheats[i].price);
    }
    return true;
}
function pulse(weight){
    for (var i = 0; i < jsonGrocery.Pulses.length; i++) {
        /*
         * calculate total and print
         */
        console.log("Per Kg. of " + jsonGrocery.Pulses[i].name + " costs " + jsonGrocery.Pulses[i].price + " and for " + weight + " Kgs. costs " + weight * jsonGrocery.Pulses[i].price);
    }
    return true;
}
module.exports ={
    rice,
    wheat,
    pulse
}