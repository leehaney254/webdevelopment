//to spread the numbers in an array
let nums = [1,2,3,4,5,6,7,8,9];

Math.max(...nums)

//copying values
//can also be used with objects
const cats = ["meaow", "meaow1", "meaow2"];
const dogs = ["woof", "woof1", "woof2"];

const all = [...cats, ...dogs];

//destructuring an array
const [one, two, three] = nums;
//in object literals order does not matter