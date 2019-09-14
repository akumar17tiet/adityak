class bst
{
   constructor()
   {//do nothing 
   }
facto(n) 
{ 

  if (n === 0)
 {
    return 1;
 }
  return n *this.facto(n-1);
         
}

}
module.exports=
{
   bst
} 