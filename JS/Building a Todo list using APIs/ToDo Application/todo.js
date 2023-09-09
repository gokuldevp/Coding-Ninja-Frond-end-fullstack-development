let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

// let fetchToDos = () => {
//     // GET Requret
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => {
//         return response.json();
//     }).then((data) => {
//         tasks = data.slice(0, 20);
//         renderList()
//     }).catch((error) => {
//         console.log(error);
//     })
// }

let fetchToDos = async () => {
    // GET Requret using async await
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos');
        let data = await response.json();
        tasks = data.slice(0, 20);       
        renderList()   
    } catch (error) {
        console.log(error);
    }
}

let addTaskToDOM = (task) => {
    // Function to add a new task to the DOM
    const li = document.createElement('li');
    li.innerHTML = `          
    <input type="checkbox" id="${task.id}" ${task.completed ? 'checked':''} class="custom-checkbox">
    <label for="${task.id}">${task.title}</label>
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
        return task.id=== Number(taskId);
    });
    if (task.length>0) {
        const currentTask = task[0];
        currentTask.completed = !currentTask.completed;
        renderList();
        showNotification('Task toggled successfully');
        return;
    }
    showNotification('Could not toggle the task');
}

function deleteTask(taskId) {
    // Function to delete a task from the list
    const newTasks = tasks.filter((task) => {
        return task.id !== Number(taskId);
    });

    tasks = newTasks;
    renderList();
    showNotification("A Task has been removed from the list");
}

async function addTask (task) {
    // Function to add a new task to the list, this won't work currently as post is not part of the given api
    try {
        if(task){
            const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
                method: "POST", // or 'PUT'
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });
    
            const result = await response.json();
            console.log("Success:", result);
            // tasks.push(task);
            renderList();
            showNotification("Task '" + task.title + "' is added to the list.")
            tasksCounter.innerText = tasks.length
        }
    } catch (error) {
        console.error("Error:", error);
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
            title: text,
            id: Date.now(),
            Completed: false
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

fetchToDos();
addTaskInput.addEventListener("keypress",handleInputKeyPress);
document.addEventListener("click", handleClickListener)