/*************************************************************************************************
 *  @Purpose        : Create a JSON file  maintain DateTime of the transaction in a 
                      Queue implemented using Linked List to indicate when the transactions
                      were done.
 *  @file           : stockdateTime.js
 *  @overview       : In this we have to buy and sell the item and prints the item purchased timings 
                      using Queue implemented using linkedlist
 *  @author         : Aditya Kumar
 *  @since          : 07-09-2019
 ***************************************************************************************************/
var read = require('readline-sync');
var utility = require('../oopsbased/utilityoops/queueLinkedList');
class Comapany {
    constructor(totalPrice) {
        this.totalPrice = 1;
    }
    /**
     * buy()=add data to the queue
     * @param {*} num 
     */
    buy(num) {
        for (var i = 0; i < num; i++) {
            /**
             * asking user to enter inputs
             */
            try {
                var Name = read.question("Enter the name of item to purchase: ");
                if (!isNaN(Name)) throw "invalid input"
                var number = read.question("Enter the desired shares purchased: ");
                if (isNaN(number)) throw "invalid input"
                var price = read.question("Enter the price per share: ");
                if (isNaN(price)) throw "invalid input"
            } catch (err) {
                console.log(err);
            }
            /**
             * object customer
             */
            var customer =
            {
                name: Name,
                number: number,
                price: price
            }
            /**
             * adding cutomer object to the queue
             */
            queue.enqueue(customer);
            /**
             * calculating total price
             */
            var totalPrice = parseInt(num) * parseInt(price);
            console.log("The total price of :" + Name + " is :" + totalPrice);
            /**
             * getting hrs,min,sec using date()
             */
            var date = new Date();
            var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            console.log("The purchase time is: " + time);
        }
    }
    /**
     * sell()-subtract data from queue
     */
    sell() {
        try {
            var num = read.question("Enter the item number you want to sell: ");
            if (isNaN(num)) throw "invalid input"
            /**
             * removing entry from the queue
             */
            for (var j = 0; j < num; j++) {
                queue.dequeue();
            }
            /**
             * getting hrs,min,sec from date function
             */
            var date = new Date();
            var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            console.log("The item is sold at--> " + time);
        } catch (err) {
            console.log(err);
        }
    }
    /**
     * printing report
     */
    accountReport() {
        queue.print();
    }
}
/**
 * creating object for require file
 */
var queue = new utility.Queue();
/**
 * creating object for class
 */
var d = new Comapany();
/**
 * asking user to enter the stock value
 */
try {
    var num = read.question("Please enter the total number of stocks you want to purchase : ");
    if (isNaN(num)) throw "invalid input"
} catch (err) {
    console.log(err);
}
/**
 * calling functions
 */
d.buy(num);
d.accountReport();
d.sell();