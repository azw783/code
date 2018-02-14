// Your JavaScript code goes in this file
let changeColors = function(color) {
   jQuery(".lead").css("background-color", color)
 }

let stopGoingToApple = function(event) {
  event.preventDefault()
  window.alert("You don't actually wanna go there")
}

jQuery("#apple").on("click", stopGoingToApple)

let disappear = function(event) {
  jQuery(this).parent().hide();
}

jQuery(".lead").on("click", disappear)
