var arrobj = require('./utility/utilityadi');
let read = require('readline-sync');
var row = read.question('enter number of rows');
var col = read.question('enter number of column');

var arr =[];
const inputArr = arrobj.input(arr,row,col);

console.log(" ");
const outputArr = arrobj.output(inputArr, row, col);