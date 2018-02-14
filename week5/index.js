// Your JavaScript code goes in this file

let changeColors = function(color) {
  jQuery(".lead").css("background-color", color)
}

let stopGoingToApple = function(event) {
  event.preventDefault()
  window.location.href = "http://www.microsoft.com"
  // window.alert("Wazzzzzup!")
}

let removeSection = function(event) {
  jQuery(this).parent().slideUp(3000);
}

jQuery(".lead").on("click", removeSection)
jQuery("#apple").on("click", stopGoingToApple)
