// fetch('https://api.cryptonator.com/api/ticker/btc-usd').then
//   (res => {
//     console.log("RESPONSE, WAITING TO PARSE...", res)
//     return res.json()
//   })
//   //to have the data
//   .then(data =>{
//     console.log("DATA PARSED...", data)
//   })
//   .catch(e => {
//     console.log("OH NO! ERROR", e)
//   })


/*Using Fetch*/

// const fetchBitcoinPrice = async () => {
//   try {
//     const res = await fetch()
//     const data = await res.json()
//     console.log(data.ticker.price)
//   } catch (e) {
//     console.log("SOMETHING went wrong!!", e)
//   }
// }

//axios
axios.get('https://api.cryptonator.com/api/full/btc-usd')
