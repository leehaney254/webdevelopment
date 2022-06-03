//nested functions
function hero()
{
  let heros = ["Lee", "Mugaks", "Onjude", "Chege"];
  function help()
  {
    for (let helpHand of heros)
    {
      console.log(`Help us ${helpHand}`);
    }
  }
  help();
}
hero();

//functions expression
let sum = function(x)
{
  return x * x;
}

sum(3);

//higher order functions
//functions that acccept functions as argument
//functions that return functions as arguments

// function calltwice(func)
// {
//   func();
//   func();
// }

// function print()
// {
//   console.log("I am a higher order function.");
// }

// //will be executed in the second function
// calltwice(print);
// //will be executed instantly then passed to the function
// calltwice(print());


function function_return()
{
  const value = Math.random();

  if(value > 0.5)
  {
    return function()
    {
      console.log("Congrats you have won");
    }
  }
  else
  {
    return function()
    {
      alert("Looser");
    }
  }
}

//methods

const math = 
{
  PI : 3.142,
  square: function(num)
  {
    return num * num;
  },
  cube: function(num)
  {
    return num * num * num;
  },
  //better way to define
  add(num, num1)
  {
    return num + num1;
  }
}

//keyword this
const cat = 
{
  name: "myCat",
  color: "Grey",
  words()
  {
    console.log("Meow meow meow");
    console.log(`${this.name} says meow`); 
  }
}

//try catch used to spot errors early
try
{
  hello.toUpperCase();
}
catch (e)
{
  console.log("Error in code");
  console.log(e);
}