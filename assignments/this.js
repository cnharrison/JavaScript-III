/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.

* 4. window binding - if you invoke a function and there is nothing to the left of the dot. the this keywords defaults to the window object
if we use strict mode, this doesn't work. it returns an error 😬

* write out a code example of each explanation above
*/

// Principle 1

/* 
window binding  - if this is within the scope of a function, the this keyword returns undefined. if the this keyword is in the global scope, it returns the window object, which is useless and a huge barf. if we use strict mode doing either of these actually returns an error 
*/

const barfWindow = function() {
//   "use strict";
// we get an error if we uncomment this ☝
  console.log(this.barf);
};
barfWindow();

// Principle 2

//implicit binding - this references whatever is to the left of the dot when the function is invoked

// code example for Implicit Binding

const cat = {
  name: "Hodge",
  age: 7,
  color: "Black and white",
  statement: "Meow",
  speak: function() {
    console.log(this.statement);
  }
};
cat.speak();

// Principle 3

/*
new binding - we've bult a constructor function. it takes in parameters and expresses those parameters as methods of the this keyword. 
when this constructor function is invoked with the new keyword, the this keyword inside that function is bound to a new object that we have just constructed. 
*/

// code example for New Binding
const CatConstructor = function(name, age, color, statement) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.statement = statement;
};

const cat2 = new CatConstructor("Shadow", 3, "Black", "Meowowowow");
console.log(cat2);

// Principle 4

/* 
explicit binding - we want to take a function containing the this keyword in the global scope and call it in the context of our object. 
when we run the function, we use .call. 
we pass in the name of the object as the first parameter of our function. 
we can use .apply to pass in an array and have its elements be automatically broken out into subsequent parameters. 
.bind is going to do the same thing as call but its going to return a new function that we can call later but still keep the context of the object that we have passed in as the first parameter 
*/

// code example for Explicit Binding

var speak = function() {
  console.log(this.statement);
};

speak.call(cat);
