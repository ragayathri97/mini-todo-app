document.getElementById('add-todo-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const todo = document.getElementById('todo').value;

    await fetch('https://dent-clover-bottom.glitch.me/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ todo, userId: JSON.parse(localStorage.getItem('user')).id })
    });

    alert('Todo added.');
    loadTodos();
});

async function loadTodos() {
    const response = await fetch('https://dent-clover-bottom.glitch.me/todos');
    const todos = await response.json();
    const userTodos = todos.filter(todo => todo.userId === JSON.parse(localStorage.getItem('user')).id);

    document.getElementById('todo-list').innerHTML = userTodos.map(todo => `
        <li>${todo.todo} <button onclick="deleteTodo(${todo.id})">Delete</button></li>
    `).join('');
}

async function deleteTodo(id) {
    await fetch(`https://dent-clover-bottom.glitch.me/todos/${id}`, { method: 'DELETE' });
    alert('Todo deleted.');
    loadTodos();
}

loadTodos();