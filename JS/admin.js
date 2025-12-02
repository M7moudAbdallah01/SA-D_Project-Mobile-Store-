const nameInput = document.querySelector('input[placeholder="Type product name"]');
const priceInput = document.querySelector('input[placeholder="Product price"]');
const imgInput = document.querySelector('input[placeholder="Product image link"]');
const addBtn = document.querySelector('.btn-add');
const tableBody = document.querySelector('.products-table tbody');

let editRow = null;

addBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const price = priceInput.value.trim();
    const img = imgInput.value.trim();

    if (!name || !price || !img) {
        alert("Please fill all fields");
        return;
    }

    if (editRow) {
        editRow.children[0].textContent = name;
        editRow.children[1].textContent = `$${price}`;
        editRow.children[2].querySelector("img").src = img;

        addBtn.textContent = "➕ Add Product";
        editRow = null;

    } else {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>$${price}</td>
            <td><img src="${img}" class="product-img"></td>
            <td>
                <button class="btn-small blue">Edit</button>
                <button class="btn-small red">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    }

    nameInput.value = "";
    priceInput.value = "";
    imgInput.value = "";
});

tableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("blue")) {
        editRow = e.target.closest("tr");

        nameInput.value = editRow.children[0].textContent;
        priceInput.value = editRow.children[1].textContent.replace("$", "");
        imgInput.value = editRow.children[2].querySelector("img").src;

        addBtn.textContent = "Save Changes";
    }

    if (e.target.classList.contains("red")) {
        e.target.closest("tr").remove();
    }
});
