let ToDoList = [
    { title: "Dummy Title01", isDone: false },
    { title: "Dummy Title02", isDone: true }
];

let isEdit = false;
let EditIndex;

function toggleEdit(index) {
    isEdit = !isEdit;
    EditIndex = index;
}

function addTask(title) {
    if (!title) return
    ToDoList.push({ title: title, isDone: false });
    renderList();

}

function deleteTask(index) {
    ToDoList.splice(index, 1);
    renderList();
}

function editTask(title, index) {
    console.log("Edit Before", title, index)
    ToDoList[index].title = title
    toggleEdit();
}



// DOM 

const InputTitle = document.querySelector("#toDoInput");
const SubmitButton = document.querySelector("#toDoSubmit");
const ToDoListHTML = document.querySelector(".toDoList");

function onSubmitHandle() {
    const userTask = InputTitle.value;
    addTask(userTask);
}


function onEditSubmitHandler(index) {
    const title = document.querySelector("#editInput").value;
    console.log("working");
    console.log(title);

    if (!title) return;
    editTask(title, index);
    renderList();
    console.log(ToDoList)
}

function editHandler(index) {
    toggleEdit(index);
    renderList();
    console.log(index)
}

function renderList() {
    const toDoMappedToHTML = ToDoList?.map((item, index) => {
        return `
        <li class="toDoItem">
        ${(isEdit && EditIndex === index) ? `<div class="editForm">
        <input onChange="" type="text" id="editInput">
        <button onClick="onEditSubmitHandler(${index})">Update</button>
        </div>`: ""}
         <div class="list-data">
            <input type="checkbox" ${item.isDone && "checked"}>
                <p>${item.title}</p>
                <div class="toDo-actions">
                    <button onclick="editHandler(${index})">Edit</button>
                    <button onclick="deleteTask(${index})">Delete</button>
                </div>
                </div>
            </li>
        `
    });

    ToDoListHTML.innerHTML = toDoMappedToHTML;
}


SubmitButton.addEventListener("click", onSubmitHandle);

console.log(ToDoList);
renderList();

