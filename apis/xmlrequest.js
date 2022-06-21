/*
//make a request object
const myReq = new XMLHttpRequest();

//attach an onload callback
myReq.onload = function () {
  //converts from json to a js object
  const data = JSON.parse(this.responseText);
  console.log(data);
};

//attach on error callback
myReq.onerror = function (err) {
  console.log('ERROR!', err);
};
//open the request then send it
myReq.open('get', '', true);
myReq.setRequestHeader('Accept', 'application/json');
myReq.send();
*/
const req = new XMLHttpRequest();
req.onload = function () {
  console.log("ALL DONE WITH REQUEST ");
  console.log(this);
};

req.onerror = function () {
  console.log("ERROR!!!");
  console.log(this);
}
req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();