const person = 
{
    firstName:"Leehaney", 
    lastName:"George"
};

//Accessing the object
console.log(person["firstName"]);
//or
console.log(person.firstName);

//how to update data
person.firstName = "Lee";
person["lastName"] = "Gee";
console.log(person);