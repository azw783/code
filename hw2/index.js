// Your code goes here:
// let rollDice = function(event) {
//   console.log(event)
//
//   let thumbnailImgs = jQuery("#thumbnailPic")
//   for (let image of diceImages) {
//       rollDie(image)
//     }
// }


let enlargePic = function(imageElement) {
  console.log("Got a click event", jQuery(this))
  let thumbnail = jQuery(event.target)
  let srcValue = thumbnail.attr("src")
  jQuery("#main-image").attr("src", srcValue)
}

jQuery("img").on("click", enlargePic)
