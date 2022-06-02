let subtitle = ["Moss", "Mess", "Miss", "Mass", "Muss"];

// for (let i=0; i < subtitle.length; i++)
// {
//     console.log(`Visit www.reddit.com/${subtitle[i]}`);
// }

for (let sub of subtitle)
{
    console.log(sub); 
}

//iterating over objects 
let peopleMarks =
{
    Lee : 80,
    Gambi: 50,
    Shanza: 60,
    Gladwell: 40,
    Sam: 70
}

for (let pep in peopleMarks)
{
    console.log(`${pep} scored ${peopleMarks[pep]}`);
}

//change object to array
//Objects.Keys(peopleMarks);

//Get values of each key
//Objects.Keys(peopleMarks);


for (let sub of Object.keys(peopleMarks))
{
    console.log(sub); 
}