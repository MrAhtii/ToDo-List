let form = document.querySelector(".input-field");
let formtext = document.querySelector('.input-field input[type="text"]');
let taskCounter = document.querySelector("#task-counter");
let taskList = document.querySelector("#task-list");

let tcounter = 0;

form.addEventListener("submit" , (e) => {
    e.preventDefault();

    const taskText = formtext.value.trim();
    if(taskText === ""){
        alert("Write Any Task First!");
        return;
    }
let list = document.createElement("li");
list.className = "task-item";
list.innerHTML = `<div class="task-content">
            <input type="checkbox" class="task-check">
            <span class="task-text">${taskText}</span>
        </div>
        <div class="task-actions">
            <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="delete-btn"><i class="fa-solid fa-trash-can"></i></button>
        </div>`;
        taskList.appendChild(list);
        tcounter++;

        taskCounter.textContent = tcounter;

        formtext.value = "";
const checkbox = list.querySelector(".task-check");
checkbox.addEventListener("change" , () => {
    if(checkbox.checked){
        list.classList.add("completed");
        if(tcounter > 0){
            tcounter--;
        }

    }else{
        list.classList.remove("completed");
        tcounter++;
    }
    taskCounter.textContent = tcounter;
});
    const editBtn = list.querySelector(".edit-btn");
    editBtn.addEventListener("click", () => {
        const taskTextSpan = list.querySelector(".task-text");
        const newText = prompt("Edit your task:", taskTextSpan.textContent);
        if (newText !== null && newText.trim() !== "") {
            taskTextSpan.textContent = newText.trim();
        }
    });
const deleteBtn = list.querySelector(".delete-btn");
deleteBtn.addEventListener("click" , () => {
    if(!list.classList.contains("completed") && tcounter > 0){
        tcounter--;
    }
    list.remove();
    taskCounter.textContent = tcounter;
});
});