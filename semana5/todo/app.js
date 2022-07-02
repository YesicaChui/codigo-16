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

function checkTask(checkbox) {
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
}





















