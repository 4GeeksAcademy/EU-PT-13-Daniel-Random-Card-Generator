/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
function generate() {
  // Simbols
  let symbol = Math.floor(Math.random() * 4);
  if (symbol == 0) {
    document.querySelectorAll(".potato")[0].innerHTML =
      '<p class="display-2 text-danger">&hearts;</p>';
    document.querySelectorAll(".potato")[1].innerHTML =
      '<p class="display-2 text-danger">&hearts;</p>';
  }
  if (symbol == 1) {
    document.querySelectorAll(".potato")[0].innerHTML =
      '<p class="display-2 text-danger">&diams;</p>';
    document.querySelectorAll(".potato")[1].innerHTML =
      '<p class="display-2 text-danger">&diams;</p>';
  }
  if (symbol == 2) {
    document.querySelectorAll(".potato")[0].innerHTML =
      '<p class="display-2 text-dark">&spades;</p>';
    document.querySelectorAll(".potato")[1].innerHTML =
      '<p class="display-2 text-dark">&spades;</p>';
  }
  if (symbol == 3) {
    document.querySelectorAll(".potato")[0].innerHTML =
      '<p class="display-2 text-dark">&clubs;</p>';
    document.querySelectorAll(".potato")[1].innerHTML =
      '<p class="display-2 text-dark">&clubs;</p>';
  }
  console.log(symbol);
  // numbers
  let number = Math.floor(Math.random() * 10) + 2;
  if (number == 8) {
    document.querySelector("#carta").innerHTML = '<p class="display-1">J</p>';
  } else if (number == 9) {
    document.querySelector("#carta").innerHTML = '<p class="display-1">Q</p>';
  } else if (number == 10) {
    document.querySelector("#carta").innerHTML = '<p class="display-1">K</p>';
  } else if (number == 11) {
    // ACES
    if (symbol == 0) {
      document.querySelector("#carta").innerHTML =
        '<p class="display-1 text-danger">&hearts;</p>';
    }
    if (symbol == 1) {
      document.querySelector("#carta").innerHTML =
        '<p class="display-1 text-danger">&diams;</p>';
    }
    if (symbol == 2) {
      document.querySelector("#carta").innerHTML =
        '<p class="display-1 text-dark">&spades;</p>';
    }
    if (symbol == 3) {
      document.querySelector("#carta").innerHTML =
        '<p class="display-1 text-dark">&clubs;</p>';
    }
  } else
    document.querySelector("#carta").innerHTML =
      '<p class="display-1">' + number + "</p>";
  console.log(number);
}
let ok = document.querySelector("#gerar");
window.onload = generate();
ok.addEventListener("click", generate);
window.setInterval(generate, 10000);
