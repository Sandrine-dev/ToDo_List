const form = document.querySelector("form");

//Storage
function saveTask() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur une tache pour la supprimer </li>`;
  }
}

document.addEventListener("submit", (e) => {
  //console.log("Ok");
  e.preventDefault();
  //console.log(task.value);

  list.innerHTML += `<li> ${task.value} </li>`;
  task.value = "";

  saveTask();
});

list.addEventListener("click", (e) => {
  //console.log(e.target);

  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  saveTask();
});

getTodos();
