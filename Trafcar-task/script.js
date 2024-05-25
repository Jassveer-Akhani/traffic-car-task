// GETTING ELEMENTS FROM HTML
var car = document.querySelector(".car");
var redLight = document.querySelector(".redLight");
var signalTwoRed = document.querySelector(".signalTwoRed");
var greenLight = document.querySelector(".greenLight");
var signalTwoGreen = document.querySelector(".signalTwoGreen");
var yellowLight = document.querySelector(".yellowLight");
var startBtn = document.querySelector(".startBtn");
var stopBtn = document.querySelector(".stopBtn");
var count = 0;
var refId = "";

function moveCar(event) {
  if (refId) {
    clearInterval(refId); // Clear any existing interval
  }
  count = 0; // Reset the position
  car.style.left = count + "%"; // Reset car position
  redLight.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
  signalTwoRed.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
  signalTwoGreen.style.backgroundColor = "green";
  startBtn.style.backgroundColor = "rgb(2, 92, 2)";
  stopBtn.style.backgroundColor = "red";

  refId = setInterval(() => {
    car.style.left = count + "%";
    if (count <= 75) {
      count += 1;
    } else {
      stopCar();
    }
    if (count >= 65) {
      signalTwoRed.style.backgroundColor = "red";
      signalTwoGreen.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
    }
  }, 50);
}

function stopCar() {
  clearInterval(refId);
  refId = ""; // Reset refId
  stopBtn.style.backgroundColor = "rgb(182, 3, 3)";
  startBtn.style.backgroundColor = "green";
}