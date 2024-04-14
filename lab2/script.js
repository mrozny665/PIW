"use strict";

const addTask = () => {
    const input = document.getElementById("task");

    if (input.value === ""){
        console.log("Pusto");
        return;
    }

    const input2 = input.value;

    const taskList = document.getElementById("task-list");
    const listItem = document.createElement("li");
    const listItemSpan = document.createElement("span");
    const deleteButton = document.createElement("button");
    listItemSpan.innerText = `${input2}`;
    deleteButton.classList.add("btn", "btn-danger", "btn-sm");
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", function(){
        deleteItem(listItem);
    })
    listItem.append(deleteButton);
    listItem.append(listItemSpan);
    listItem.addEventListener("click", function(){
        toggleDone(listItem);
    })
    taskList.append(listItem);
}

const toggleDone = (element) => {
    const date = new Date();
    const stringDate = ` ${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`;
    if (!element.childNodes[1].classList.contains('crossed-text')){
        const dateSpan = document.createElement("span");
        dateSpan.innerText = stringDate;
        dateSpan.classList.add('default-text');
        element.appendChild(dateSpan);
    } else {
        element.removeChild(element.lastChild);
    }
    element.childNodes[1].classList.toggle('crossed-text');
}

const deleteItem = (element) => {
    element.remove();
}