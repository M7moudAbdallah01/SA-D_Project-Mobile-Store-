document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm").value;

    // Check valid email format
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
        alert("Invalid email format");
        return;
    }

    // Check passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Load users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already registered
    if (users.some(u => u.email === email)) {
        alert("Email already registered");
        return;
    }

    // Create new user
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    window.location.href = "home.html";
});
