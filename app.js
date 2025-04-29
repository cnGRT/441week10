// Created by Grant

// Initialize the local database
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

// Dynamically load navigation bars and user states
function loadCommon() {
    const user = sessionStorage.currentUser;
    document.getElementById('nav').innerHTML = `
        <a href="index.html">Home</a>
        <a href="cart.html">Cart</a>
        ${user ? `
            <span>Welcome, ${user}</span>
            <a href="logout.html">Logout</a>
        ` : ''}
    `;
    document.getElementById('footer').innerHTML = "© 2023 Your Name";
}
// Dynamically load public components
function loadCommon() {
    const user = sessionStorage.currentUser;
    
    // Navigation bar template
    const navHTML = `
        <div class="navbar">
            <a href="index.html">Home</a>
            <a href="cart.html">Cart</a>
            ${user ? `
                <span class="user-status">Welcome, ${user}</span>
                <a href="logout.html">Logout</a>
            ` : ''}
        </div>
    `;
    
    // Footer template
    const footerHTML = `
        <div class="footer">
            <p>© 2024 Grant | E-Commerce Project</p>
        </div>
    `;

    // Inject to all pages
    if (document.getElementById('nav')) {
        document.getElementById('nav').innerHTML = navHTML;
    }
    if (document.getElementById('footer')) {
        document.getElementById('footer').innerHTML = footerHTML;
    }
}

// Automatically on page load
document.addEventListener('DOMContentLoaded', loadCommon);
// Sign-up features
function register() {
    const users = JSON.parse(localStorage.users);
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    users.push({ username, password });
    localStorage.users = JSON.stringify(users);
    alert('Registration successful!');
}

// Sign-in function
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

// Initialize the page
loadCommon();
