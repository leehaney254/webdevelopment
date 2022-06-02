//use javascript mdn for reference
let color = ["Red", "Orange", "Green"];
let color1 = ["Pink", "Purple", "Yellow"];

color[0] = "Green";
console.log(color);

// to add somwthing to the end of an array
color.push("White");
console.log(color);

//to remove an element form the end
color.pop();
console.log(color);

//to add to the start
color.unshift("Purple");
console.log(color);

//to add to the start
color.shift();
console.log(color);

//Concating an array
let color2 = color.concat(color1);
console.log(color2);

//to check for an element in an array
console.log(color2.includes("Pink"));

//to find the position of something
console.log(color2.indexOf("Purple"));

//to reverse
color2.reverse();
console.log(color2);

//take a portion
color2.slice(2,4);

//add or delete form a specific point
color2.splice(2,0,"Grey");
console.log(color2);

//nested arrays
const game = [["X", null, "O"], ["X", null, "O"], ["X", null, "O"]];
console.log(game[1][2]);