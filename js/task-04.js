const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const counterEl = document.querySelector("#value");

let counterValue = 0;

buttonDecrement.addEventListener("click", onButtonDecrementClick);

buttonIncrement.addEventListener("click", onButtonIncrementClick);

function onButtonDecrementClick() {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}

function onButtonIncrementClick() {
  counterValue += 1;
  counterEl.textContent = counterValue;
}
