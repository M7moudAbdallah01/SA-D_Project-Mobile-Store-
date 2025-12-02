let cartContainer = document.getElementById("cartContainer");
let totalEl = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<h3>Your cart is empty 🛒</h3>";
        return;
    }

    let total = 0;

    cart.forEach((item , index) => {

        total += item.price * item.quantity;

        cartContainer.innerHTML += `
        <div class="item">
            <img src="${item.img}">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <p>Quantity: <span class="qty">${item.quantity}</span></p>

                <div class="buttons">
                    <button onclick="increase(${index})">+</button>
                    <button onclick="decrease(${index})">-</button>
                    <button onclick="deleteItem(${index})">Delete</button>
                </div>
            </div>
        </div>
        `;
    });

    cartContainer.innerHTML += `
        <p class="total">Total: $${total}</p>
        <button class="checkout-btn" onclick="checkout()">Checkout</button>
    `;
}

function increase(index){
    cart[index].quantity++;
    updateCart();
}

function decrease(index){
    if(cart[index].quantity > 1){
        cart[index].quantity--;
    } else {
        cart.splice(index , 1);
    }
    updateCart();
}

function deleteItem(index){
    cart.splice(index , 1);
    updateCart();
}

function updateCart(){
    localStorage.setItem("cart" , JSON.stringify(cart));
    displayCart();
}

function checkout(){
    alert("Checkout successful ✅");
    localStorage.removeItem("cart");
    cart = [];
    displayCart();
}

// load cart on page open
displayCart();
