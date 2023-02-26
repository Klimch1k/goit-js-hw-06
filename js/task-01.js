const arrycategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${arrycategories.length}`);

arrycategories.forEach((element) =>
  console.log(
    `Category: ${element.firstElementChild.textContent} 
Elements: ${element.firstElementChild.nextElementSibling.children.length}`
  )
);
