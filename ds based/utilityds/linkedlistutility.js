/*
* creating node function to create any new node with null values.
 */
class Node{
    constructor(element){
        this.element=element;
        this.next=null;
    }
}
/**
 *  creating class linkedlist which will create new nodes and perform operation like 
 *  add,remove,insertFirst,insert.
 */
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    add(element){
        /**
        * creating a new node
        */
        var n=new Node(element);
        if(this.head==null){
            this.head=n;
            this.size++;
             return;
        }
        else{
            var current=this.head;
            while(current.next){
                current=current.next;
            }
            this.size++;
            current.next=n;
        }
    }
    /*
    * insert the first item into file
    */
    insertFirst(element){
        var n=new Node(element);
        if(this.head==null){
             this.head=n;
             this.size++;
             return;
        }else{
            n.next=this.head;
            this.head=n;
            this.size++;
            return;
        }
    }
    /*
    * insert the string into file
    */
    insert(index,element){
        if(index==1){
            this.insertFirst(element);
            return;
        }
        if(this.head==null){
            return;
        }
        var n=new Node(element);
        var c=0,pre=this.head,curr=this.head;
        while(curr){
            if(c==index-1){
                pre.next=n;
                n.next=curr;
                this.size++;
                return;
            }
            c++;
            pre=curr;
            curr=curr.next;
        }
        return false;
    }
    /*
    * delete first item from file
    */
    deleteFirst(){
        if(this.head==null){
            console.log("Linked List empty");
            return;
        }
        var n=this.head.element;
          this.head=this.head.next;
          this.size--;
          return n;
    }
    /*
    * pop first item from file
    */
    pop(){
        if(this.head==null){
            console.log("No element present in the list");
            return null;
        }
        if(this.head.next==null){
            this.head=null;
            return;
        }
        var curr=this.head;
        var pre=this.head;
        while(curr.next != null){
            pre=curr;
            curr=curr.next;
        }
        pre.next=null;
        this.size--;
        return curr.element;
    }
    /* 
    * remove the string or element,if it already exists
    */
    popIndex(index){
        if(index<0){
            console.log("please enter correct index");
            return false;
        }
        else if(index==1){
            this.deleteFirst();
            return;
        }
        var curr=this.head,pre=curr,c=0;
        while(curr){
            if(c==index-1){
                pre.next=curr.next;
                this.size--;
                return curr.element;
            }
              c++;
            pre=curr;
            curr=curr.next;
        }
        return null;
    }
    /*
    * remove the item from file
    */
    remove(element){
        var curr=this.head;
        if(curr.element==element){
            this.deleteFirst();
            return;
        }
        var pre=curr;
        while(curr){
            if(curr.element==element){
                pre.next=curr.next;
                this.size--;
                return curr.element;
            }
            pre=curr;
            curr=curr.next;
        }
        return null;
    }
    /*
    * checks the items present in the file
    */
    search(item){
        if(this.head==null){
            return false;
        }
        var curr=this.head;
        while(curr){
            if(curr.element==item){
                return true;
            }
            curr=curr.next;
        }
        return false;
    }
    /*
    checks if file is empty are not
    */
    isEmpty(){
        if(this.size==0){
            return true;
        }
        return false;
    }
    /*
    checks the string size in file
    */
    size_of_list(){
        return this.size;
    }
    /*
    * display the given list after performing changes.
    */
    displayQueue(){
        var curr=this.head;
        var str="";
        while(curr){
            str=str+curr.element+" ";
            if(curr.next!=null){
                str=str+" ";
            }
            curr=curr.next;
        }
        return str;
    }
    /*
    * add the items in ascending order
    */
    addAscending(){
        var main=this.head;
        var mainHead=null;
        while(main){
            var n=new Node(main.element);
            var flag=true;
            if(mainHead==null){
                mainHead=n;
            this.head=mainHead;
        }
        else{
            var pre=mainHead,curr=mainHead;
            if(curr.next==null){
                if(n.element<curr.element){
                    n.next=curr;
                    mainHead=n;
                    flag=false;
                }
            }
            while(curr&&flag){
                if(n.element<curr.element){
                    pre.next=n;
                    n.next=curr;
                    flag=false;
                }
                pre=curr;
                curr=curr.next;
            }
            if(flag){
                pre.next=n;
            }
        }
           main=main.next;
    }
       return this.head=mainHead;
}
    /*
    * it shows items presents in the file
    */
    show(){
        var curr=this.head;
        var str="";
        while(curr){
            str=str+curr.element+" ";
            if(curr.next!=null){
                str=str+"  ";
            }
            curr=curr.next;
        }
        console.log(str);
        return str;
    }
    /*
    * get the data from file
    */
    getData(){
        var curr=this.head;
        var str="";
        while(curr){
            str=str+curr.element;
            if(curr.next!=null){
                str=str+" ";
            }
            curr=curr.next;
        }
        return str;
    }
}
/**
 * exports if a object that get exposed to a module and it is by default in every js file.
 */
module.exports={
    LinkedList
}