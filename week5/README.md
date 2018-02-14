# Week 5

The theme for this week is:

> In software development, there is no One True Way.

Start by opening this folder in Atom, and then open `index.html` in Chrome.

### Arrays

JavaScript Arrays are documented well on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

You should become familiar with how to:

* Create an array
* Add elements to an array
* Remove elements from an array

### Functions

We can define our own functions like this:

```
let f = function() {
  // Code here will be stored in the variable 'f'
  // and will only be triggered when other code
  // invokes the function.
}
```

Once a function has been defined, we can trigger the function like this:

```
f()
```

Functions can accept "input parameters" like this:

```
let greet = function(name, salutation) {
  let greeting = salutation + ", " + name
  console.log(greeting)
}
```

If we now call the function like this:

```
greet("Cookie Monster", "Hello")
```

we would expect to see `Hello, Cookie Monster` displayed in the console.

Functions can also return data back to the code that called it:

```
let greet = function(name, salutation) {
  let greeting = salutation + ", " + name
  return greeting
}
```

And now we can use it like this:

```
let sentence = greet("Cookie Monster", "Howdy")
console.log(sentence)
```

Try it!

### Loops

We can _loop over_ an array like this:

```
let cities = ["London", "Chicago", "Paris"]

for (city of cities) {
  // Inside the braces, the variable 'city' will refer to
  // one of the elements of the array
  window.alert("I'm going to " + city)
  window.alert("I'm back!")

  // When we reach the ending brace, the 'city' variable
  // will automatically advance to the next element in the list
  // and the loop will start over.
}


We are also using the popular [jQuery](http://jquery.com/) library to modify the DOM:

* [Attributes](http://api.jquery.com/category/attributes/)
* [Effects](http://api.jquery.com/category/effects/)
* [CSS](http://api.jquery.com/category/css/)
* [Mouse Events](http://api.jquery.com/category/events/mouse-events/)
* [DOM Elements](http://api.jquery.com/category/manipulation/)


### jQuery's `this` variable

Often we define functions so that the browser can notify our code of an event.
Such functions are often called _callback_ functions or _event handler_ functions.  

```
let handleClick = function(event) {
  // your code goes here
}
```

Sometimes, we would like to determine exactly which DOM element caused the event.
We can use `jQuery(this)` to grab the element on the page that's responsible:

```
let handleClick = function(event) {
  let element = jQuery(this)
  console.log("The element that raised this event was:", element)
}
```
