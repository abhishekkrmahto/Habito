import { addedTasks } from "./AllData.js";

const taskToAdd = document.getElementById("taskToAdd");
const taskXP = document.getElementById("taskXP");
const addBtnOfAddHtml = document.getElementById("addBtnOfAddHtml");

addBtnOfAddHtml.addEventListener("click", (e) => {
  e.preventDefault();

  if (Number(taskXP.value) > 10) {
    alert("MAX XP PER TASK IS 10");
    return;
  }

  let task = {
    taskName: taskToAdd.value,
    taskXp: Number(taskXP.value),
  };

  addedTasks.push(task);
  localStorage.setItem("addedTasks", JSON.stringify(addedTasks));
  localStorage.setItem(
    "xpCounter",
    JSON.stringify(
      (Number(localStorage.getItem("xpCounter")) || 0) + Number(taskXP.value)
    )
  );

  taskToAdd.value = "";
  taskXP.value = "";
  alert("Task ADDED");
});
