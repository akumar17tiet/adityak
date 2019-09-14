/******************************************************************************
 *  @Purpose        : Take an Arithmetic Expression such that parentheses are used 
                      to order the performance of operations.Ensure parentheses must 
                      appear in a balanced fashion.    
 *  @file           : parenthesisprog.js
 *  @overview       : We will take an expression then if the brace opens we will push 
                      elements using stack and while closeing we will pop the elements 
                      then will check if the parantheses is balanced or not and return 
                      true or false.      
 *  @author         : Aditya Kumar
 *  @since          : 29-08-2019
 ******************************************************************************/
var Utility = require('../utility/utilityadi');
var simpleBP = require('./utilityds/parenthesisutility.js');
function balancedParenthesis() {
    var read = Utility.input();
    read.question("Enter an expression:", function (expression) {
        /*
         * if expression is null then print an error message.
         */
        if (expression == "") {
            console.log(" Enter an expression: ");
        }
        else {
            simpleBP.balancedParenthesis(expression);
        }
        read.close();
    });
}
balancedParenthesis();
