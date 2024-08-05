document.addEventListener('DOMContentLoaded', () => {
    const newTaskForm = document.getElementById('new-task-form');
    const newTaskInput = document.getElementById('new-task-input');
    const tasksList = document.getElementById('tasks');

    newTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task');

        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = '<i class="bi bi-check-circle"></i>';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
            if (taskSpan.classList.contains('completed')) {
                alert('Tarea completada: ' + taskText);
            } else {
                alert('Tarea marcada como incompleta: ' + taskText);
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
                tasksList.removeChild(taskItem);
                alert('Tarea eliminada: ' + taskText);
            }
        });

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(completeBtn);
        taskItem.appendChild(deleteBtn);
        tasksList.appendChild(taskItem);
    }
});
