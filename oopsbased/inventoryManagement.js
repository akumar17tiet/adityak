/*************************************************************************************************
 *  @Purpose        : To create the JSON from Inventory Object and output the JSON String.     
 *  @file           : inventoryManagement.js
 *  @overview       : To Extend the inventory program to Create InventoryManager to manage the Inventory.
                      The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.
                      The InventoryManager will call each Inventory Object in its list to calculate the Inventory
                      Price and then call the Inventory Object to return the JSON String.
 *  @author         : Aditya Kumar
 *  @since          : 05-09-2019
 ***************************************************************************************************/

var fs = require('fs');
var prompt = require('readline-sync');
/**
 * reading data from a json file
 */
var data = fs.readFileSync('../oopsbased/JSONfiles/inventoryM.json');
/**
 * printing data from json file
 */
console.log("Data in a json file is\n" + data);
/**
 * for holding the object
 */
var arrayOfObjects = JSON.parse(data);
console.log(" ");
var totalPrice = 1;
function inventoryMenu() {
    console.log(" ");
    console.log("Inventory Management-->");//menu
    console.log(" 1: Insert\n 2: Delete\n 3: Exit");
    /**
     * asking user to enter the choice
     */
    try {
        var choice = prompt.question("Please enter your choice: ");
        if (choice > 3 || isNaN(choice)) throw "invalid input"
        /**
         * Insert Operation
         */
        if (choice == '1') {
            nameRestriction = /[a-z]/ig;
            try {
                var num = prompt.question("Enter the share value for the stock->");
                if (isNaN(num)) throw "invalid input"
            } catch (err) {
                console.log(err);
            }
            for (var i = 0; i < num; i++) {
                try {
                    var Name = prompt.question("Please enter the item you want to add: ");
                    if (!isNaN(Name)) throw "invalid input"
                    var weight = prompt.question("Please enter the number of Kgs: ");
                    if (isNaN(weight)) throw "invalid input"
                    var price = prompt.question("Please enter the price per Kg.: ");
                    if (isNaN(price)) throw "invalid input"
                } catch (err) {        
                    console.log(err);
                }
                if (nameRestriction.test(Name) && isNaN(weight) != -1 && isNaN(price) != -1) {
                    arrayOfObjects.push({
                        stockName: Name,
                        Number_of_Kgs: weight,
                        Price: price
                    })
                }
                else {
                    console.log("Invalid input for name,weight and price!");
                    return false;
                }
                console.log(arrayOfObjects);
                console.log("");
                /**
                 * calculating total price
                 */
                totalPrice = parseInt(num) * parseInt(price);
                console.log("");
                /**
                 * calculating the total price for new shares
                 */
                console.log("The total price of the stock is " + totalPrice);
                /**
                 * writing arrayOfObjects on json file
                 */
                fs.writeFileSync('../oopsbased/JSONfiles/inventoryM.json', JSON.stringify(arrayOfObjects), 'utf-8', function () { console.log('done') });
                /**
                 * reading json file after insertion
                 */
                var data = fs.readFileSync('../oopsbased/JSONfiles/inventoryM.json', 'utf-8');
                console.log("after insertion data is\n" + data);
                inventoryMenu();
            }
        }
        /**
         * Delete Operation
         */
        else if (choice == '2') {
            /**
             * asking user to enter product name
             */
            var del = prompt("Please enter the name of item you want to delete from the inventory: ");
            /**
             * deleting item from the jason file
             */
            for (var i = 0; i < arrayOfObjects.length; i++) {
                if (del == arrayOfObjects[i].stockName) {
                    var index = arrayOfObjects.indexOf(arrayOfObjects[i]);
                    arrayOfObjects.splice(index, 1);
                }
            }
            console.log("after deletion data is");
            arrayOfObjects.forEach(element => {
                console.log(element);
            });
            fs.writeFileSync('../oopsbased/JSONfiles/inventoryM.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
                if (err) throw err
                console.log('Done!');
            })
            inventoryMenu();
        }
        /**
         * Exit from stock
         */
        else (choice == '3')
        {
            process.exit();
        }
    } catch (err) {
        console.log(err);
    }
}
/**
 * calling function
 */
inventoryMenu();