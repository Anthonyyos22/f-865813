const CONFIG = {
    USERS: [
        { username: "admin", password: "admin123", role: "admin" },
        { username: "delivery1", password: "pass123", role: "delivery" },
        { username: "worker1", password: "pass123", role: "worker" }
    ],
    ROLES: {
        admin: {
            tabs: ["attendance", "delivery", "payments"],
            displayName: "Administrator"
        },
        delivery: {
            tabs: ["delivery"],
            displayName: "Delivery Personnel"
        },
        worker: {
            tabs: ["attendance"],
            displayName: "Worker"
        }
    },
    STORAGE_KEYS: {
        currentUser: "currentUser",
        attendance: "attendance",
        delivery: "delivery",
        payments: "payments"
    },
    SETTINGS: {
        loginRedirect: "dashboard.html",
        logoutRedirect: "index.html"
    }
};

if (typeof module !== "undefined") {
    module.exports = CONFIG;
}