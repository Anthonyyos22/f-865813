const user = JSON.parse(localStorage.getItem("loggedInUser")) || { name: "Guest" };
document.getElementById("welcome-message").textContent = `Welcome, ${user.name} (Admin)!`;

function manageUsers() { alert("Managing users..."); }
function viewReports() { alert("Viewing all reports..."); }
function checkFinance() { alert("Checking finance..."); }

const activityList = document.getElementById("activity-list");
const activities = ["User added", "Delivery completed"];
activities.forEach(act => {
    const li = document.createElement("li");
    li.textContent = act;
    activityList.appendChild(li);
});