const sliderEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

sliderEl.addEventListener("input", onSliderElInput);

function onSliderElInput(event) {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
