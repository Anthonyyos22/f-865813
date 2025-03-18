// Simulate admin name (replace with actual login data in a real system)
const adminName = "Alex";
document.getElementById("welcome-message").textContent = `Welcome, ${adminName} (Project Owner)!`;

// Placeholder functions for action buttons
function manageUsers() {
    alert("Opening user management panel...");
    // In a real system, this could redirect to a user management page or open a modal
}

function viewReports() {
    alert("Generating system reports...");
    // Could load a reports page or fetch data dynamically
}

function checkLogs() {
    alert("Displaying system logs...");
    // Could fetch and display logs in the activity feed or a new section
}

// Logout functionality (placeholder)
document.querySelector(".logout-btn").addEventListener("click", () => {
    if (confirm("Are you sure you want to logout?")) {
        alert("Logging out...");
        // Redirect to login page or clear session in a real app
    }
});

// Simulate dynamic stats update (optional, could be fetched from a backend)
function updateStats() {
    document.getElementById("active-users").textContent = Math.floor(Math.random() * 20) + 5; // Random 5-25
    document.getElementById("pending-deliveries").textContent = Math.floor(Math.random() * 10); // Random 0-9
    document.getElementById("system-uptime").textContent = (99 + Math.random()).toFixed(1) + "%"; // Random 99.0-99.9%
}

// Update stats every 5 seconds (for demo purposes)
setInterval(updateStats, 5000);
updateStats(); // Initial call