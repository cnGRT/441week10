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
            image: "https://cdn.britannica.com/s:700x500/77/170477-050-1C747EE3/Laptop-computer.jpg" 
        },
        { 
            id: 2, 
            name: "Laptop", 
            price: 1099, 
            description: "Laptop",
            image: "https://i5.walmartimages.com/asr/299c9aef-fd6d-426d-bcbc-f1945574730a.7933d342c6d74b4bb3f11a6cf10c4115.jpeg" 
        }
    ]);
}

// 动态加载导航栏和用户状态
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