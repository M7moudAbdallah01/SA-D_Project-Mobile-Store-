document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cartContainer");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function displayCart() {
        cartContainer.innerHTML = ""; // امسح المحتوى القديم

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
            itemDiv.classList.add("cart-item");

            itemDiv.innerHTML = `
                <img src="${item.img || item.image}" alt="${item.name}" class="cart-image">
                <div class="cart-details">
                    <h3>${item.name}</h3>
                    <p>Price: EGP ${item.price.toFixed(2)}</p>
                    <div class="qty-box">
                        <button class="qty-btn decrease">-</button>
                        <span class="qty-number">${item.quantity}</span>
                        <button class="qty-btn increase">+</button>
                    </div>
                    <button class="delete-btn">Remove</button>
                </div>
            `;

            // زرار +
            itemDiv.querySelector(".increase").addEventListener("click", () => {
                cart[index].quantity++;
                updateCart();
            });

            // زرار -
            itemDiv.querySelector(".decrease").addEventListener("click", () => {
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1);
                }
                updateCart();
            });

            // زرار Remove
            itemDiv.querySelector(".delete-btn").addEventListener("click", () => {
                cart.splice(index, 1);
                updateCart();
            });

            cartContainer.appendChild(itemDiv);
        });

        // عرض التوتال وزر Checkout
        const totalDiv = document.createElement("div");
        totalDiv.classList.add("cart-total");
        totalDiv.innerHTML = `
            <h3>Total: EGP ${total.toFixed(2)}</h3>
            <button class="checkout-btn">Checkout</button>
        `;
        cartContainer.appendChild(totalDiv);

        totalDiv.querySelector(".checkout-btn").addEventListener("click", checkout);
    }

    function updateCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }

    function checkout() {
        if(cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        alert("Proceeding to payment ✅");
        window.location.href = "order.html";
    }

   
    displayCart();
});
