let a = 25;
console.log("This variable 'a' is having globle scope");
console.log("a = "+a);

function sum()
{
    var b = 20;
    var c = 30;
    console.log(`Variable b = ${b} and c = ${c} are having their scope inside sum function only`);
    console.log("Sum : "+(b+c));
}
sum();