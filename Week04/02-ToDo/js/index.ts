import { ToDo, Task } from "./toDoCore";

const toDo = new ToDo();

// State
let isEdit = false;
let editIndex:number | undefined;

function editToggler(index?:number) {
    isEdit = typeof (index) === 'number' ? true : false;
    editIndex = index ?? -1;
}

// DOM
const userInput:HTMLInputElement = document.querySelector("#userInput")!;
const addBtn: HTMLButtonElement = document.querySelector("#addBtn")!;
const toDoListDom:HTMLElement  = document.querySelector("#todo-list")!;

// Event Handlers
function deleteHandler(index:number) {
    toDo.remove(index);
    renderList();
}

function editHandler(index:number) {
    editToggler(index);
    renderList();
}

function editData() {
    const inputData: string = userInput!.value! as string;
    if(typeof(editIndex) ==="number")
    toDo.edit(new Task(inputData), editIndex);
    userInput!.value = "";
    editToggler();
    renderList();
}

function addHandler() {
    if(!userInput!.value) return
    toDo.add(new Task(userInput!.value));
    userInput!.value = "";
    renderList();
}

function checkboxHandler(index:number) {
    toDo.data[index].isChecked = !toDo.data[index].isChecked;
    renderList();
}

// RENDER
function renderList() {
    if (isEdit) {
        addBtn!.innerHTML = 'Update';
        if(typeof(editIndex) === 'number')
        userInput!.value = toDo.data[editIndex].title!;
    }
    else {
        addBtn!.innerHTML = 'Add';
    }
    let html = '';
    toDo.data?.forEach((item, index) => {
        html = html + `
        <li class="flex justify-between border p-4 rounded text-gray-700">
                <div class="flex items-center gap-4">
                    <input onchange="checkboxHandler(${index})" ${item.isChecked ? 'checked': ''} type="checkbox" class="w-5 h-5">
                    
                    <p class="text-xl font-semibold ${item.isChecked ? 'line-through' : ""} ">${item.title}</p>
                </div>
                <div class="flex gap-6 font-semibold">
                    <button onclick="editHandler(${index})" class="text-blue-400">edit</button>
                    <button onclick='deleteHandler(${index})' class="text-red-400">delete</button>
                </div>
            </li>
            `
    })
    toDoListDom!.innerHTML = html;
}

renderList();

addBtn!.addEventListener('click', () => {
    if (addBtn!.innerHTML === 'Update') editData();
    else addHandler();
})