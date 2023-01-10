const toDo = new ToDo();

// State
let isEdit = false;
let editIndex;

function editToggler(index) {
    isEdit = typeof (index) === 'number' ? true : false;
    editIndex = index ?? -1;
}

// DOM
const userInput = document.querySelector("#userInput");
const addBtn = document.querySelector("#addBtn")
const toDoListDom = document.querySelector("#todo-list");

// Event Handlers
function deleteHandler(index) {
    toDo.remove(index);
    renderList();
}

function editHandler(index) {
    editToggler(index);
    renderList();
}

function editData() {
    toDo.edit(new Task(userInput.value), editIndex);
    userInput.value = "";
    editToggler();
    renderList();
}

function addHandler() {
    if(!userInput.value) return
    toDo.add(new Task(userInput.value));
    userInput.value = "";
    renderList();
}

function checkboxHandler(index) {
    toDo.data[index].isChecked = !toDo.data[index].isChecked;
    renderList();
}

// RENDER
function renderList() {
    if (isEdit) {
        addBtn.innerHTML = 'Update';
        userInput.value = toDo.data[editIndex].title;
    }
    else {
        addBtn.innerHTML = 'Add';
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
    toDoListDom.innerHTML = html;
}

renderList();

addBtn.addEventListener('click', () => {
    if (addBtn.innerHTML === 'Update') editData();
    else addHandler();
})