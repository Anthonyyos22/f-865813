// Load data from localStorage or initialize empty
let attendanceRecords = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.attendance)) || [];
let deliveryRecords = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.delivery)) || [];
let paymentRecords = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.payments)) || [];

// Login logic
document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = CONFIG.USERS.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem(CONFIG.STORAGE_KEYS.currentUser, JSON.stringify(user));
        window.location.href = CONFIG.SETTINGS.loginRedirect;
    } else {
        document.getElementById("error").textContent = "Invalid credentials!";
    }
});

// Dashboard logic
if (window.location.pathname.includes("dashboard.html")) {
    const currentUser = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.currentUser));
    if (!currentUser) {
        window.location.href = CONFIG.SETTINGS.logoutRedirect;
        return;
    }

    // Role-based access
    const roleConfig = CONFIG.ROLES[currentUser.role];
    if (!roleConfig) {
        console.error("Invalid role:", currentUser.role);
        return;
    }

    // Hide all tabs by default
    const allTabs = ["attendance", "delivery", "payments"];
    allTabs.forEach(tab => document.getElementById(tab).classList.add("hidden"));

    // Show only allowed tabs
    roleConfig.tabs.forEach(tab => {
        document.getElementById(tab).classList.remove("hidden");
    });

    // Load records
    loadRecords();

    // Logout
    document.getElementById("logout").addEventListener("click", () => {
        localStorage.removeItem(CONFIG.STORAGE_KEYS.currentUser);
        window.location.href = CONFIG.SETTINGS.logoutRedirect;
    });
}

// Functions to add and display records
function addAttendance() {
    const workerName = document.getElementById("workerName").value;
    if (workerName) {
        attendanceRecords.push({ name: workerName, date: new Date().toLocaleString() });
        localStorage.setItem(CONFIG.STORAGE_KEYS.attendance, JSON.stringify(attendanceRecords));
        loadRecords();
        document.getElementById("workerName").value = "";
    }
}

function addDelivery() {
    const item = document.getElementById("deliveryItem").value;
    if (item) {
        deliveryRecords.push({ item, date: new Date().toLocaleString() });
        localStorage.setItem(CONFIG.STORAGE_KEYS.delivery, JSON.stringify(deliveryRecords));
        loadRecords();
        document.getElementById("deliveryItem").value = "";
    }
}

function addPayment() {
    const desc = document.getElementById("paymentDesc").value;
    const amount = document.getElementById("paymentAmount").value;
    if (desc && amount) {
        paymentRecords.push({ desc, amount, date: new Date().toLocaleString() });
        localStorage.setItem(CONFIG.STORAGE_KEYS.payments, JSON.stringify(paymentRecords));
        loadRecords();
        document.getElementById("paymentDesc").value = "";
        document.getElementById("paymentAmount").value = "";
    }
}

function loadRecords() {
    const attendanceList = document.getElementById("attendanceList");
    const deliveryList = document.getElementById("deliveryList");
    const paymentList = document.getElementById("paymentList");

    attendanceList.innerHTML = attendanceRecords.map(r => `<li>${r.name} - ${r.date}</li>`).join("");
    deliveryList.innerHTML = deliveryRecords.map(r => `<li>${r.item} - ${r.date}</li>`).join("");
    paymentList.innerHTML = paymentRecords.map(r => `<li>${r.desc}: $${r.amount} - ${r.date}</li>`).join("");
}