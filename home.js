document.addEventListener("DOMContentLoaded", function () {
  const categoryCards = document.querySelectorAll(".category-card");
  const productCards = document.querySelectorAll(".product-card");

  categoryCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Get the category name from the clicked card
      const categoryName = this.querySelector(".icon-p").innerText.toLowerCase();

      // Show/hide products based on category
      productCards.forEach((productCard) => {
        const productCategory = productCard.dataset.category?.toLowerCase();

        if (productCategory && productCategory === categoryName) {
          productCard.style.display = "block";
        } else {
          productCard.style.display = "none";
        }
      });
    });
  });
});
