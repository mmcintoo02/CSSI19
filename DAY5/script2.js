function f(x)

{
    return 3*x+7;
}

console.log(f(2));
console.log(f(12));
console.log(f(7));

function g(x)

{
    return 5*x+5;
}
console.log(f(3));
console.log(f(150));
console.log(f(-150));

function 1(x,y)
{
    return x*x - y*y;

}
console.log("\n");
console.log(1(3,4));
console.log(1(5,2));
 
function k(r)
{ return 2 * Math.PI * r;
}

console.log("\n");
console.log(k(1));
console.log(k(1.5));

function 1(a,b,c)
{
    var d = b**2 - 4 * a * c;

    if (d >= 0)

    var srd = Math.sqrt(d);
    return(-1 * b + srd)/(2*a);



    else

    {
    return NaN;
    }

}
console.log(1(1,4,4));
console.log(1(1,1,-1));