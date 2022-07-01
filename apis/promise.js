//creating promises
// new Promise((resolve, reject) => {
//   resolve();
// })

//promise with colors

// const delayColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.background = color;
//       resolve();
//     }, delay)
//   })
// }

// delayColorChange('red', 1000)
//   .then(() => {
//     return delayColorChange('orange', 1000)
//   })
//   .then(() => {
//     delayColorChange('green', 1000)
//   })

//async

// const login = async (userName, password) => {
//   if (!userName || !password) throw 'Missing credentials'
//   if (password === "Leehaney") return 'WELCOME'
//   throw 'Invalid password'
// }

// login("Lee", "Leehaney")
//   .then(msg => {
//     console.log("LOGGED IN!")
//     console.log(msg)
//   })
//   .catch(err => {
//     console.log("ERROR!")
//     console.log(err)
//   })

//wait

const delayColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.background = color;
      resolve();
    }, delay)
  })
}

async function rainbow() {
  await delayColorChange('red', 1000)
}