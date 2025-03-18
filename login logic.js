document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const selectedRole = document.getElementById("role").value;
    const errorElement = document.getElementById("error");

    const user = window.userConfig.users.find(
        u => u.username === username && u.password === password && u.role === selectedRole
    );

    if (user) {
        errorElement.textContent = "";
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = user.dashboard;
    } else {
        errorElement.textContent = "Invalid username, password, or role";
    }
});