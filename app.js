// Created by Grant

// 初始化本地数据库
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

// 动态加载导航栏和用户状态
function loadCommon() {
    const user = sessionStorage.currentUser;
    
    // 导航栏模板
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

    
    // 页脚模板
    const footerHTML = `
        <div class="footer">
            <p>© 2024 Grant | E-Commerce Project</p>
        </div>
    `;

    // 注入到所有页面
    if (document.getElementById('nav')) {
        document.getElementById('nav').innerHTML = navHTML;
    }
    if (document.getElementById('footer')) {
        document.getElementById('footer').innerHTML = footerHTML;
    }
}

// 页面加载时自动执行
document.addEventListener('DOMContentLoaded', loadCommon);
// 注册功能
function register() {
    const users = JSON.parse(localStorage.users);
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    users.push({ username, password });
    localStorage.users = JSON.stringify(users);
    alert('Registration successful!');
}

// 登录功能
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

// 初始化页面
loadCommon();
