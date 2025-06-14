import formatNumber from "./formatNumber.js";
import { addBAsket } from "./basket.js";

const template = document.querySelector("template");
const productsList = document.getElementById("products-list");

export function renderUi(products) {
  productsList.textContent = "";
  products.forEach((product) => {
    const clone = template.content.cloneNode(true);

    const {
      title,
      description: _description,
      thumbnail,
      price: _price,
      discountPercentage,
      rating: _rating,
      comments: _comments,
    } = product;

    const cardImage = clone.querySelector(".card-image");
    const cardTitle = clone.querySelector(".card-title");
    const rating = clone.querySelector(".rating");
    const description = clone.querySelector(".description");
    const price = clone.querySelector(".price");
    const discountPrice = clone.querySelector(".discount-price");
    const comments = clone.querySelector(".comments");
    const buyButton = clone.querySelector(".buy-button");

    buyButton.addEventListener("click", () => {
      addBAsket({...product,amount:1});
    });

    cardTitle.textContent = title;
    description.textContent = _description;
    cardImage.src = thumbnail;
    rating.textContent = `⭐${_rating}`;
    price.textContent = formatNumber(_price);
    discountPrice.textContent = formatNumber(_price, discountPercentage);
    comments.textContent = `(${_comments}comments)`;

    productsList.appendChild(clone);
  });
}
