const value = document.getElementById("value");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

let currentValueAsNum = parseInt(value.textContent);

decrease.addEventListener("click", function () {
  value.textContent = --currentValueAsNum;
  if (currentValueAsNum < 0) {
    value.style.color = "red";
  }

  if (currentValueAsNum === 0) {
    value.style.color = "#223";
  }
});

reset.addEventListener("click", function () {
  currentValueAsNum = 0;
  value.textContent = currentValueAsNum;
  value.style.color = "#223";
});

increase.addEventListener("click", function () {
  value.textContent = ++currentValueAsNum;
  if (currentValueAsNum > 0) {
    value.style.color = "green";
  }

  if (currentValueAsNum === 0) {
    value.style.color = "#223";
  }
});
