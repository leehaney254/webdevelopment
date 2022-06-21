const button = document.querySelectorAll('button');

function makerRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`
}

for (let btn of button) {
  btn.addEventListener('click', colorize)
}

function colorize() {
  this.style.backgroundColor = makerRandomColor();
  this.style.color = makerRandomColor();
}

