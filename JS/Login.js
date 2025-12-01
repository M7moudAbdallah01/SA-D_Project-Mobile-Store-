document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  
  if (email === "user@gmail.com" && password === "1234") {
    window.location.href = "Profile.html";
  } else {
    document.getElementById("error").style.display = "block";
  }
});