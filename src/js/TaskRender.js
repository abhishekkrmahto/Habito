let allTasks = localStorage.getItem('addedTasks');
let tasks = document.getElementById("tasks");
JSON.parse(allTasks).forEach((task)=>{
    let newTask = document.createElement('div');
    newTask.innerHTML=`<label>
                                <input type="checkbox" id="taskCheck" class="taskCheck">
                                <h2>${task.taskName}</h2>
                            </label>`;
    newTask.classList.add('task');
    tasks.appendChild(newTask)
})


let totalTodaysTaskCount = document.getElementById("totalTodaysTaskCount");
totalTodaysTaskCount.innerText = `${JSON.parse(allTasks).length}`



let xpCount = document.getElementById("xpCount");
xpCount.innerText = `${localStorage.getItem('xpCounter')}`