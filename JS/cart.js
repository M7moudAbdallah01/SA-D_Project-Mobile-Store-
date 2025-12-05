document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cartContainer");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function displayCart() {
        cartContainer.innerHTML = ""; // امسح القديم

        if (cart.length === 0) {
            const empty = document.createElement("h3");
            empty.textContent = "Your cart is empty 🛒";
            cartContainer.appendChild(empty);
            return;
        }

        let total = 0;

        cart.forEach((item, index) => {
            total += item.price * item.quantity;

            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");

            itemDiv.innerHTML = `
                <img src="${item.img}">
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <p>Quantity: <span class="qty">${item.quantity}</span></p>
                    <div class="buttons">
                        <button class="increase">+</button>
                        <button class="decrease">-</button>
                        <button class="delete">Delete</button>
                    </div>
                </div>
            `;

            // زرار +
            itemDiv.querySelector(".increase").addEventListener("click", () => {
                cart[index].quantity++;
                updateCart();
            });

            // زرار -
            itemDiv.querySelector(".decrease").addEventListener("click", () => {
                if(cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1);
                }
                updateCart();
            });

            // زرار Delete
            itemDiv.querySelector(".delete").addEventListener("click", () => {
                cart.splice(index, 1);
                updateCart();
            });

            cartContainer.appendChild(itemDiv);
        });

        // التوتال و Checkout
        const totalP = document.createElement("p");
        totalP.classList.add("total");
        totalP.textContent = `Total: $${total}`;
        cartContainer.appendChild(totalP);

        const checkoutBtn = document.createElement("button");
        checkoutBtn.classList.add("checkout-btn");
        checkoutBtn.textContent = "Checkout";
        checkoutBtn.addEventListener("click", checkout);
        cartContainer.appendChild(checkoutBtn);
    }

    function updateCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }

    function checkout() {
        alert("Checkout successful ✅");
        localStorage.removeItem("cart");
        cart = [];
        displayCart();

        window.location.href = "order.html";

    }

    // Load cart initially
    displayCart();
});
