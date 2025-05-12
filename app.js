// Created by Grant

// Initialize local database
if (!localStorage.users) localStorage.users = JSON.stringify([]);
if (!localStorage.products) {
    localStorage.products = JSON.stringify([
        { 
            id: 1, 
            name: "Laptop", 
            price: 799, 
            description: "High-performance laptop",
            image: "Laptop-computer.jpg" 
        },
        { 
            id: 2, 
            name: "Laptop", 
            price: 1099, 
            description: "Laptop",
            image: "laptop.jpg" 
        }
    ]);
}

// Dynamically load the navigation bar and user status
function loadCommon() {
    const user = sessionStorage.currentUser;
    
    // Navigation Bar Template
    const navHTML = `
        <div class="navbar">
            <a href="index.html">Home</a>
            <a href="cart.html">Cart</a>
            <a href="confirm.html">confirm</a>
            <a href="order-management.html">order-management</a>
            <a href="logout.html">logout</a>
            ${user ? `
                <a href="order-management.html">Order Management</a>
                <span class="user-status">Welcome, ${user}</span>
                <a href="logout.html">Logout</a>
            ` : ''}
        </div>
    `;
    document.getElementById('footer').innerHTML = "© 2024 grant";

    
    // Footer template
    const footerHTML = `
        <div class="footer">
            <p>© 2024 Grant | E-Commerce Project</p>
        </div>
    `;

    // Inject into all pages
    if (document.getElementById('nav')) {
        document.getElementById('nav').innerHTML = navHTML;
    }
    if (document.getElementById('footer')) {
        document.getElementById('footer').innerHTML = footerHTML;
    }
}

// Automatically execute when the page loads
document.addEventListener('DOMContentLoaded', loadCommon);
// Registration function
function register() {
    const users = JSON.parse(localStorage.users);
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    users.push({ username, password });
    localStorage.users = JSON.stringify(users);
    alert('Registration successful!');
}

// Login function
function login() {
    const users = JSON.parse(localStorage.users);
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        sessionStorage.currentUser = username;
        window.location.href = 'cart.html';
    } else {
        alert('Invalid credentials!');
    }
}

// Initialize page
loadCommon();
