const tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function renderList () {}

function markTaskAsComplete (taskId) {

}

function deleteTask (taskId) {
    // Function to delete a task from the list
    const newTasks = tasks.filter((task)=> {
        return task.id !== taskId;
    })

    tasks = newTasks;
    renderList();
    showNotification("A Task have been removed from the list")
}

function addTask (task) {
    // Function to add a new task to the list
    if(task){
        tasks.push(task);
        renderList();
        showNotification("Task '" + task.text + "' is added to the list.")
    }
}

function showNotification(text) {
    //Function to show notifications
    alert(text);
}

function handleInputKeyPress(event) {
    //Function to handle keypress
    if (event.key === "Enter"){
        const text = event.target.value;

        if (!text){
            showNotification("This Message cannot be empty!!!");
            return;
        }
        const task = {
            text,
            id: Date.now().toString(),
            done: false
        }

        addTask(task);
        event.target.value = "";
    }
}

addTaskInput.addEventListener("keypress",handleInputKeyPress)