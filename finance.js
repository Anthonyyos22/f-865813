const user = JSON.parse(localStorage.getItem("loggedInUser")) || { name: "Guest" };
document.getElementById("welcome-message").textContent = `Welcome, ${user.name} (Delivery)!`;

function viewDeliveries() { alert("Viewing deliveries..."); }

const activityList = document.getElementById("activity-list");
const activities = ["Delivered package #123"];
activities.forEach(act => {
    const li = document.createElement("li");
    li.textContent = act;
    activityList.appendChild(li);
});