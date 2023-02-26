const inputEl = document.querySelector("#name-input");
const greetingEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  event.currentTarget.value === ""
    ? (greetingEl.textContent = "Anonymous")
    : (greetingEl.textContent = event.currentTarget.value);
});
