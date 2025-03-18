const user = JSON.parse(localStorage.getItem("loggedInUser")) || { name: "Guest" };
document.getElementById("welcome-message").textContent = `Welcome, ${user.name} (Engineer)!`;

function viewAttendance() { alert("Viewing attendance..."); }
function viewDeliveryReports() { alert("Viewing delivery reports..."); }

const activityList = document.getElementById("activity-list");
const activities = ["Checked attendance", "Reviewed delivery"];
activities.forEach(act => {
    const li = document.createElement("li");
    li.textContent = act;
    activityList.appendChild(li);
});