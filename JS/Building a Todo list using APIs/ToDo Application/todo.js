let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

let addTaskToDOM = (task) => {
    // Function to add a new task to the DOM
    const li = document.createElement('li');
    li.innerHTML = `          
    <input type="checkbox" id="${task.id}" ${task.done ? 'checked':''} class="custom-checkbox">
    <label for="${task.id}">${task.text}</label>
    <img src="images/delete_btn.jfif" class="delete" data-id="${task.id}" />
    `
    taskList.append(li)
}

function renderList () {
    // function to render the list
    taskList.innerHTML = ''
    for (let i in tasks){
        addTaskToDOM(tasks[i]);
    }
}

function markTaskAsComplete (taskId) {
    // function to mark the task as complete/uncomplete
    const task = tasks.filter((task)=>{
        return task.id===taskId;
    });
    if (task.length>0) {
        const currentTask = task[0];
        currentTask.done = !currentTask.done;
        renderList();
        showNotification('Task toggled successfully');
        return;
    }
    showNotification('Could not toggle the task');
}

function deleteTask(taskId) {
    // Function to delete a task from the list
    const newTasks = tasks.filter((task) => {
        return task.id !== taskId;
    });

    tasks = newTasks;
    renderList();
    showNotification("A Task has been removed from the list");
}

function addTask (task) {
    // Function to add a new task to the list
    if(task){
        tasks.push(task);
        renderList();
        showNotification("Task '" + task.text + "' is added to the list.")
        tasksCounter.innerText = tasks.length
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

let handleClickListener = (e) => {
    // Function to handle clicking on the screen
    const target = e.target;
    console.log(target)
    if (target.className === 'delete') {
        const taskId = target.dataset.id;       // a "dataset" refers to the custom data attributes that can be added to HTML elements to store additional information
        deleteTask(taskId);
        return;

    } else if (target.className === 'custom-checkbox') {
        const taskId = target.id; 
        markTaskAsComplete(taskId)
        return;
    }
}

addTaskInput.addEventListener("keypress",handleInputKeyPress);
document.addEventListener("click", handleClickListener)