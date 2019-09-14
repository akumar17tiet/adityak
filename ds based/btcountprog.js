/******************************************************************************
 *  @Purpose        : A binary tree is a tree which is characterized by any of 
                      the following properties:It can be empty (null).
                      It can contain a root node which contain some value and two subtree, 
                      left subtree and right subtree, which are also binary tree.
                      A binary tree is a binary search tree (BST) if all the non-empty nodes 
                      follows both two properties:
                      If node has a left subtree, then all the values in its left subtree are smaller than the value of the current node.
                      If node has a right subtree, then all the value in its right subtree are greater than the value of the current node.
 *  @file           : binarysearchTree.js
 *  @overview       : You are given N nodes, each having unique value ranging from [1, N], 
                      how many different binary search tree can be created using all of them.        
 *  @author         : Aditya Kumar
 *  @since          : 03-09-2019
 ******************************************************************************/
var read = require('readline-sync');
var numBstUtil = require('./utilityds/numButility');
try{
    var n = parseInt(read.question('Enter number of nodes:'));
    if(n<=0) throw 'nodes cannot less than zero or zero'
    else
    {
        var numBst = new numBstUtil.bst();
        var num = (numBst.facto(2*n))/(numBst.facto(n+1)*numBst.facto(n));
        console.log('Number of possible BSTs are',num);
    }
}
catch(err)
{
    console.log(err);
}