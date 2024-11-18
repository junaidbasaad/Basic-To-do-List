document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskValue = taskInput.value.trim();

  if (taskValue === '') {
    alert('Please enter a task!');
    return;
  }

  const taskList = document.getElementById('taskList');

  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${taskValue}</span>
    <button class="delete-btn">Delete</button>
  `;

  // Add delete functionality
  listItem.querySelector('.delete-btn').addEventListener('click', () => {
    taskList.removeChild(listItem);
  });

  taskList.appendChild(listItem);

  // Clear the input
  taskInput.value = '';
}
