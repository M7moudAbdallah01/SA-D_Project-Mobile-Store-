document.addEventListener("DOMContentLoaded", () => {
    const addButtons = document.querySelectorAll(".add-to-cart");

    addButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const product = {
                name: btn.dataset.name,
                price: parseFloat(btn.dataset.price),
                img: btn.dataset.img,
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existing = cart.find(item => item.name === product.name);
            if(existing) {
                existing.quantity++;
            } else {
                cart.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(product.name + " added to cart ✅");
        });
    });
});
