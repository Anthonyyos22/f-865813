// Retrieve logged-in user info from localStorage (links to login.js)
const user = JSON.parse(localStorage.getItem("loggedInUser")) || { name: "Guest" };
document.getElementById("welcome-message").textContent = `Welcome, ${user.name} (Hardware)!`;

// Action button functions
function viewDeliveryReport() {
    alert("Viewing Hardware Delivery Report...");
}

function viewHardwareRequests() {
    alert("Viewing Hardware Requests...");
}

function viewMaterialsAvailable() {
    alert("Viewing Hardware Materials Available...");
    // Could expand to show more details or refresh the table
}

// Logout functionality (links back to login.html)
document.querySelector(".logout-btn").addEventListener("click", () => {
    if (confirm("Are you sure you want to logout?")) {
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    }
});

// Simulate dynamic stats update
function updateStats() {
    document.getElementById("delivery-report").textContent = Math.floor(Math.random() * 10) + 1; // Random 1-10 deliveries
    document.getElementById("hardware-requests").textContent = Math.floor(Math.random() * 5); // Random 0-4 requests
}

// Hardware materials data (simulated)
const materials = [
    { name: "Cement Bags", quantity: 100 },
    { name: "Sand (Tons)", quantity: 50 },
    { name: "Ballast (Tons)", quantity: 75 }
];

// Function to display and update materials
function updateMaterials() {
    const materialsList = document.getElementById("materials-list");
    materialsList.innerHTML = ""; // Clear existing rows

    materials.forEach(material => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${material.name}</td>
            <td>${material.quantity + Math.floor(Math.random() * 10) - 5}</td> <!-- Random fluctuation +/- 5 -->
        `;
        materialsList.appendChild(row);
    });
}

// Auto-update activity feed
const activityList = document.getElementById("activity-list");
const activityTemplates = [
    "Processed delivery: 5 cement bags",
    "New request for 2 tons of sand",
    "Stock updated: 75 tons of ballast",
    "Delivery completed: 10 cement bags",
    "Request processed for 3 tons of ballast"
];

function addActivity() {
    const timestamp = new Date().toLocaleTimeString();
    const randomActivity = activityTemplates[Math.floor(Math.random() * activityTemplates.length)];
    const newActivity = document.createElement("li");
    newActivity.textContent = `${randomActivity} - ${timestamp}`;
    activityList.insertBefore(newActivity, activityList.firstChild);
    if (activityList.children.length > 5) {
        activityList.removeChild(activityList.lastChild);
    }
}

// Initial setup
addActivity();
addActivity();
updateMaterials();

// Auto-update every 10 seconds
setInterval(() => {
    addActivity();
    updateMaterials();
}, 10000);

// Update stats every 5 seconds
setInterval(updateStats, 5000);
updateStats(); // Initial call