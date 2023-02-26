const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map((ingredient) => {
  const itemLi = document.createElement("li");
  itemLi.textContent = ingredient;
  itemLi.classList.add("item");
  return itemLi;
});
ingredientsList.append(...ingredientsItems);
