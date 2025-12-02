let addButtons = document.querySelectorAll(".add-to-cart");


addButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let product = {
            name: btn.dataset.name,
            price: parseFloat(btn.dataset.price),
            img: btn.dataset.img,
            quantity: 1
        };

        // جلب الـ cart الحالي من localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // لو المنتج موجود بالفعل نزود الكمية
        let existing = cart.find(item => item.name === product.name);
        if (existing) {
            existing.quantity++;
        } else {
            cart.push(product);
        }

        // حفظ الـ cart في localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(product.name + " added to cart ✅");
    });
});
