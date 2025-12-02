document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  
  if (email === "user@gmail.com" && password === "1234") {
    window.location.href = "Profile.html";
  }else if(email === "admin@gmail.com" && password === "0000"){
    window.location.href = "Admin.html";
  }else {
    document.getElementById("error").style.display = "block";
  }
});