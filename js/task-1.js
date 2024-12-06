const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);
console.log(categories);

categories.forEach((category => {
    const title = category.querySelector("h2").textContent;
    const itemsQuantity = category.querySelectorAll("ul li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsQuantity}`);
}
))