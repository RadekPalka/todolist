const taskInput = document.querySelector("input");
const form = document.querySelector("form");

const addTask = async e=>{
    e.preventDefault();
    const task = taskInput.value;
    taskInput.value = ""
    console.log(task)
}

form.addEventListener("submit", e => addTask(e))