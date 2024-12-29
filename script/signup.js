document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://dent-clover-bottom.glitch.me/users');
    const users = await response.json();

    if (users.some(user => user.email === email)) {
        alert('Email already exists. Please log in.');
        return;
    }

    await fetch('https://dent-clover-bottom.glitch.me/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    alert('Signup successful. Please log in.');
    window.location.href = './login.html';
});