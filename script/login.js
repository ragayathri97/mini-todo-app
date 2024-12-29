document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://dent-clover-bottom.glitch.me/users');
    const users = await response.json();

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        alert('Login successful.');
        window.location.href = './todos.html';
    } else {
        alert('Invalid credentials.');
    }
});