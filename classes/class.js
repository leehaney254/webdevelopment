// function hex(r, g, b) {
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//   return `rgb(${r}, ${g}, ${b})`
// }

//factory constructor

// function makeColor(r, g, b) {
//   const color = {}
//   color.r = r;
//   color.g = g; 
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return rgb(`${r}, ${g}, ${b}`);
//   };
//   color.hex = function () {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
//   return color;
// }


//using with new operator
//creates a js object
// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`
// }

// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgba(${r}, ${g}, ${b} ${a})`
// }

// const color1 = new Color(40, 50, 60);
// const color2 = new Color(40, 60, 60);


//writing the methods as a single class 

// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }

//   innerRGB() {
//     const { r, g, b } = this;
//     return `${r}, ${g}, ${b}`
//   }
//   rgb = function () {
//     return `rgb(${this.innerRGB()})`
//   }

//   hex = function () {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };

//   rgba = function (a = 1.0) {
//     return `rgba(${this.innerRGB()} ,${a})`
//   }
//   greet() {
//     return `Hello from ${this.name}! `
//   }
// }

// const c1 = new Color(255, 67, 89, 'tomato');

//extends and supper

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Pet {
  meow() {
    return "MEOW";
  }
}

class Dog extends Pet {
  bark() {
    return "WOOF!";
  }
}

const wyatt = new Dog("Gambi", 30)