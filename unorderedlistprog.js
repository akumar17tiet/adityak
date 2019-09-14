/*prog for unorderedlist*/
/******************************************************************************
 *  @Purpose        : Read the Text from a file, split it into words and arrange it as Linked List.
                      Take a user input to search a Word in the List. If the Word is not found then add it
                      to the list, and if it found then remove the word from the List. In the end save the
                      list into a file.      
 *  @file           : unorderedlistprog.js
 *  @overview       : We read a string from file then perform linked list operations and then we search 
                      elements from list if it is available then delete and if not available then add it.      
 *  @author         : Aditya Kumar
 *  @version        : v8.15.0
 *  @since          : 27-08-2019
 ******************************************************************************/
const fs = require('fs'); 
var read = require ('readline-sync');
class linkedlistnode{
    constructor(data){
        this.data = data;
        this.next = null;    
    }
}

var inputdata = fs.readFileSync('file1.txt').toString().split(' ');//read the file named- file1.txt
console.log(inputdata);
var head = new linkedlistnode(null);
var nHead = head;
for(var i in inputdata) //taking file input in linked list
{
    if(nHead.data == null)
    {
        nHead.data = inputdata[0];
    }
    else
    {
        var temp = new linkedlistnode(inputdata[i]);
        nHead.next = temp;
        nHead = temp;
    }
}
 var current = head; // for printing the elements of the linked list
 while(current!=null)
{
     console.log(current.data);
     current = current.next;
}
 var word = read.question ('Enter the word:'); // for deleting the word
 var temp1 = head;
 var del = 0;
 if(head.data === word)
 {
     if(head.next === null)
     {
         head = null;
     }
     else{
         head= head.next;
     }
 }
 else
 {
     while(temp1.next != null)
     {
         if (temp1.next.data == word)
         {
             temp1.next = temp1.next.next;
             del = 1;
             break;
         }
         temp1 = temp1.next;
     }
    if (del!=1)
    {
        console.log('word no in the linked list, it will be added');// word is added
        var temp3 = head;
        var temp4 = new linkedlistnode(word);
        while (temp3.next != null)
        {
            temp3 = temp3.next;
        }
        temp3.next = temp4;
    }
 }

 console.log("changed linked list:"); //print out file elements in linked list
 var current1 = head;
 while(current1 != null)
 {
     console.log(current1.data);
     current1 = current1.next;
 }
var str = ' '

var temp5 = head;
while (temp5 != null)
{
    str = str + temp5.data + ' ';
    temp5 = temp5.next;
}
fs.writeFileSync('file1.txt',str);


