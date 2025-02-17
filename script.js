var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    soundplay(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  soundplay(event.key);
  buttonAnimation(event.key);
});

function soundplay(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;

    case "b":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      break;
    case "c":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
     
      break;
    case "e":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    case "f":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "g":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    default:
      console.log(buttonInnerHTML);
      break;
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
