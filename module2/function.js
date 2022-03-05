let a =function sub(n1,n2)
    {return n1-n2;}
console.log(a(10,5));



function sum(n1,n2)
{
    let add=n1+n2;
    console.log("addition of numbers is:"+add);
}
sum(3,5);

(function sum(n1,n2)
{
    console.log(n1%n2);
})(10,6);

(function()
{
    console.log("hello");
})();