const container = document.querySelector(".container");
const movie = document.getElementById("movie");
const count = document.getElementById("count");
const total = document.getElementById("total");
let priceValue = movie.value;

function updateSeclectedCount() {
  const selected = document.querySelectorAll(".row .seat.selected");
  const selectedLength = selected.length;
  count.innerText = selectedLength;

  const price = +priceValue;
  total.innerText = selectedLength * price;
}

movie.addEventListener("change", e => {
  priceValue = e.target.value;
  updateSeclectedCount();
});
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSeclectedCount();
  }
});
