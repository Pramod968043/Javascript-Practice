const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false }); // Ensure completed property is initialized
        taskInput.value = "";
        displayTasks();
    }
}

// Display tasks on the list
function displayTasks() {
    taskList.innerHTML = ""; // Clear current task list
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        
        // Add event listener for checkbox toggle
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

// Toggle task completion status
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed; // Toggle completed status
    displayTasks();
}

// Clear completed tasks
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed); // Remove completed tasks
    displayTasks();
}

// Attach event listeners
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
