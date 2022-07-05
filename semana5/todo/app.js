/* // let tareas=["abrazar  a  karen", "dar comida a mi gatita karen","limpiar popo mi gatita karen"];
let tareas=[];
let sectiontareas=document.querySelector("#tareas");
function cargarTareas(mistareas){
    sectiontareas.innerHTML="";
    for(let tarea of mistareas){
        sectiontareas.innerHTML+=`
        <p class="task">
            <input type="checkbox" name="" id="">
            <span>${tarea}</span>
            <a href="">❌</a>
        </p>
    `
    }    
}
// let botonAgregarTarea=document.getElementById("agregarTarea");
let botonAgregarTarea=document.querySelector("#agregarTarea");
let input =document.querySelector("#input_newtask");
botonAgregarTarea.onclick=function(){
    tareas.push(input.value);
    input.value="";
    cargarTareas(tareas)
}
cargarTareas(tareas); */

/* class Task{
    constructor(_text){
        this.id = '_'+Math.random().toString(36).slice(2);
        this.text=_text;
        this.status = 'todo';
        this.created_at = new Date();
        this.done_at = null;
        this.delete_at=null;
    }
    done(){
        this.status = 'done';
        this.done_at= new Date();
    }
    delete(){
        this.status='delete';
        this.delete_at=new Date();
    }
    createNode(){
        const element = document.createElement('p')
        element.setAttribute('id', this.id);
        element.setAttribute('class', 'task');
        element.innerHTML=`
            <input type="checkbox" onchange="checkTask(this);">
            <span>${this.text}</span
            a href="">❌</a>
        `;
        return element;
    }
}

const listTasks= document.querySelector("#list");
const inputTask=document.querySelector('#input_newtask');

const arrayTasks=[];

function addTask(){
    if(inputTask.value==""){
        alert("Ingresa un texto para la tarea");
        return;
    }
    const task = new Task(inputTask.value);
    arrayTasks.push(task);
    document.querySelector('.form').before(task.createElement());
    inputTask.value="";
    inputTask.focus();
}

function checkTask(checkbox){
    if(checkbox.checked){
        const task_id=checkbox.parentElement.id;
        console.log(task_id)
    }
} */


// DOM:
const listTasks = document.querySelector("#list");
const inputTask = document.querySelector('#input_newtask');
inputTask.focus();

const arrayTasks = [];

// Funciones para las tareas:
function addTask() {
    if (inputTask.value == "") {
        alert("Ingresa un texto para la tarea.");
        return;
    }
    // Creamos la nueva tarea:
    const task = new Task(inputTask.value);
    // Agregamos al arreglo de tareas:
    arrayTasks.push(task);
    // Agregamos la tarea al DOM:
    document.querySelector('.form').before(task.createElement());
    inputTask.value = "";
    inputTask.focus();
}

/* function checkTask(checkbox) {
    if (checkbox.checked) {
        const task_id = checkbox.parentElement.id;
        const task = arrayTasks.find(task=>task.id==task_id);
        task.done();
        checkbox.setAttribute('disabled', true);
        // console.log(task_id);
    }
}

function deleteTask(anchor) {
    const task_id = anchor.parentElement.id;
    const task = arrayTasks.find(task => task.id == task_id);
    task.delete();
} */

function checkTask(checkbox) {
    if (checkbox.checked) {
      parentTask(checkbox).done();
      checkbox.setAttribute("disabled", true);
    }
  }
  
  function deleteTask(anchor) {
    parentTask(anchor).delete();
  }
  
  function updateTask(anchor) {
    const newText = prompt("Ingrese el nuevo nombre de su tarea");
    parentTask(anchor).update(newText);
  }
  
  function parentTask(element) {
    return arrayTasks.find(
        (task) => task.id == element.parentElement.parentElement.id
      );
  }

/* const chxTaskDone = document.querySelector("#chx_task_done");

// Checkbox tiene el evento onchange
chxTaskDone.onchange = function () {
  const taskTodo = document.querySelectorAll(".todo");
  const taskDelete = document.querySelectorAll(".delete");
  console.log(taskTodo);
  if (this.checked) {
    // recurden que taskTodo es una lista de elementos HTML
    taskTodo.forEach((todo) => (todo.style.display = "none"));
    taskDelete.forEach((task) => (task.style.display = "none"));
    // vamos a mostrar solo la tareas terminadas
    // por ende vamos a buscar la tareas que tengan la clase todo y la clase delete
    // y las vamos a ocultar
    // querySelectarAll
  } else {
    taskTodo.forEach((todo) => (todo.style.display = "block"));
    taskDelete.forEach((task) => (task.style.display = "block"));
  }
};

const chxTaskTodo = document.querySelector("#chx_task_todo");

// Checkbox tiene el evento onchange
chxTaskTodo.onchange = function () {
  const taskDone = document.querySelectorAll(".done");
  const taskDelete = document.querySelectorAll(".delete");
//   console.log(taskTodo);
  if (this.checked) {
    // recurden que taskTodo es una lista de elementos HTML
    taskDone.forEach((todo) => (todo.style.display = "none"));
    taskDelete.forEach((task) => (task.style.display = "none"));
    // vamos a mostrar solo la tareas terminadas
    // por ende vamos a buscar la tareas que tengan la clase todo y la clase delete
    // y las vamos a ocultar
    // querySelectarAll
  } else {
    taskDone.forEach((todo) => (todo.style.display = "block"));
    taskDelete.forEach((task) => (task.style.display = "block"));
  }
};

const chxTaskDelete = document.querySelector("#chx_task_delete");

// Checkbox tiene el evento onchange
chxTaskDelete.onchange = function () {
  const taskTodo = document.querySelectorAll(".todo");
  const taskDone = document.querySelectorAll(".done");
  console.log(taskTodo);
  if (this.checked) {
    // recurden que taskTodo es una lista de elementos HTML
    taskTodo.forEach((todo) => (todo.style.display = "none"));
    taskDone.forEach((task) => (task.style.display = "none"));
    // vamos a mostrar solo la tareas terminadas
    // por ende vamos a buscar la tareas que tengan la clase todo y la clase delete
    // y las vamos a ocultar
    // querySelectarAll
  } else {
    taskTodo.forEach((todo) => (todo.style.display = "block"));
    taskDone.forEach((task) => (task.style.display = "block"));
  }
}; */

const chxTaskDone = document.querySelector("#chx_task_done");
const chxTaskDelete = document.querySelector("#chx_task_delete");
const chxTaskTodo = document.querySelector("#chx_task_todo");

// Checkbox tiene el evento onchange
chxTaskDone.onchange = function () {
  showOrHideElement(this.checked, ".todo", ".delete");
};

chxTaskDelete.onchange = function () {
  showOrHideElement(this.checked, ".todo", ".done");
};

chxTaskTodo.onchange = function () {
  showOrHideElement(this.checked, ".delete", ".done");
};

function showOrHideElement(checked, typeOne, typeTwo) {
  const elementsOne = document.querySelectorAll(typeOne);
  const elementsTwo = document.querySelectorAll(typeTwo);

  if (checked) {
    elementsOne.forEach((todo) => (todo.style.display = "none"));
    elementsTwo.forEach((task) => (task.style.display = "none"));
  } else {
    elementsOne.forEach((todo) => (todo.style.display = "block"));
    elementsTwo.forEach((task) => (task.style.display = "block"));
  }
}




















