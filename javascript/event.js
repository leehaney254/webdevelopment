const btn = document.querySelector('#v2');

btn.onclick = function () {
  console.log("You clicked me");
  console.log("I hope it worked");
}

function scream() {
  console.log("AAAAAAAHHH");
  console.log("Stop touching me!!");
}
btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', function () {
  alert("Clicked")
})