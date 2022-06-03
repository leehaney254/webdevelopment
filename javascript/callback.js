let num = [1,2,3,4,5,6,7,8,9,10];

function print(elements)
{
  console.log(elements);
}

//function with call back
num.forEach(print);

//map function
const doubles = num.map(function(element)
{
  return element *2;
})

console.log(doubles);

//declaring functions using variables
const newfunc = (x, y) =>
{
  return x+y;
}

//impicit return of arrow functions
//used when the body has only one statement
const newfuncs = (x, y) =>
(
  x+y
)

//delays in javascript
setTimeout(()=>
{
  console.log("Hellooooooo!");
}, 3000)

//timers in js
const id = setInterval(()=>
{
  console.log(Math.random())
},2000)
//use clear interval to stop
//there is a filter method

//every returns true when everything passes the condition
//some returns true when some passes the condition

const person = 
{
  fistName : "Leehaney",
  lastName : "George",
  fullName :function ()
  {
    return `${this.firstNamer} ${thid.lastName}` 
  }
}