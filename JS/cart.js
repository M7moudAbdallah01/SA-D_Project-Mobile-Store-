window.onload = function () {
  updateTotal();
};

function updateTotal() {
  let items = document.querySelectorAll(".item");
  let total = 0;

  items.forEach((item) => {
    let price = parseInt(item.getAttribute("data-price"));
    let qty = parseInt(item.querySelector(".qty").innerText);

    total += price * qty;
  });

  document.querySelector(".total").innerText = "Total: $" + total;
}

function add(button) {
  let qty = button.parentElement.parentElement.querySelector(".qty");
  qty.innerText = parseInt(qty.innerText) + 1;

  updateTotal();
}

function removeOne(button) {
  let qty = button.parentElement.parentElement.querySelector(".qty");

  if (parseInt(qty.innerText) > 1) {
    qty.innerText = parseInt(qty.innerText) - 1;
  }

  updateTotal();
}

function deleteItem(button) {
  let item = button.closest(".item");
  item.remove();

  updateTotal();
}
function checkout() {
    alert("Checkout completed successfully ✅");
}
