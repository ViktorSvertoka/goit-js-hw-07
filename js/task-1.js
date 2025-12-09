const categoriesList = document.getElementById("categories");
const items = categoriesList.getElementsByClassName("item");

console.log(`Number of categories: ${items.length}`);

Array.from(items).forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const subItems = item.querySelectorAll("ul li");

  console.log(`Category: ${title}`);
  console.log(`Elements: ${subItems.length}`);
});
