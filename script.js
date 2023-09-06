document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Here you can implement your authentication logic
    // For example, you can compare the username and password with predefined values
  
    if (username === "your_username" && password === "your_password") {
      alert("Login successful!");
      // Redirect to another page or perform any other action
    } else {
      alert("Login failed. Please check your credentials.");
    }
  });
  