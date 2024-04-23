"use strict";

var removedElement;
var listToAdd;
var elementToRemove;

const addTask = () => {
	const input = document.getElementById("task");

	if (input.value === "") {
		console.log("Pusto");
		return;
	}

	const input2 = input.value;

	const listChoice = document.getElementById("list-choice");
	const listValue = listChoice.value;

	const taskList = document.getElementById(listValue);
	const listItem = document.createElement("li");
	const listItemSpan = document.createElement("span");
	const deleteButton = document.createElement("button");
	listItemSpan.innerText = `${input2}`;
	deleteButton.classList.add("btn", "btn-danger", "btn-sm");
	deleteButton.innerText = "X";
	deleteButton.addEventListener("click", function () {
		showDeleteModal(listItem);
	});
	listItem.append(deleteButton);
	listItem.append(listItemSpan);
	listItemSpan.addEventListener("click", function () {
		toggleDone(listItem);
	});
	taskList.append(listItem);
};

const toggleDone = (element) => {
	const date = new Date();
	const stringDate = ` ${date.getDate()} - ${
		date.getMonth() + 1
	} - ${date.getFullYear()}`;
	if (!element.childNodes[1].classList.contains("crossed-text")) {
		const dateSpan = document.createElement("span");
		dateSpan.innerText = stringDate;
		dateSpan.classList.add("default-text");
		element.appendChild(dateSpan);
	} else {
		element.removeChild(element.lastChild);
	}
	element.childNodes[1].classList.toggle("crossed-text");
};

const showDeleteModal = (element) => {
	const modal = document.getElementById("my-modal");
	const text = element.childNodes[1].innerText;
	const taskText = document.getElementById("task-text");
	taskText.innerText = text;
	elementToRemove = null;
	elementToRemove = element;
	modal.showModal();
};

const deleteItem = (element) => {
	listToAdd = null;
	listToAdd = element.parentNode.id;
	element.remove();
	removedElement = element;
};

const revert = () => {
	if (removedElement !== null) {
		const taskList = document.getElementById(listToAdd);
		const listItem = removedElement;
		taskList.append(listItem);
		removedElement = null;
	}
};

window.onload = () => {
	const button1 = document.getElementById("yes-button");
	button1.addEventListener("click", () => {
		const modal = document.getElementById("my-modal");
		deleteItem(elementToRemove);
		modal.close();
	});

	const button2 = document.getElementById("no-button");
	button2.addEventListener("click", () => {
		const modal = document.getElementById("my-modal");
		modal.close();
	});
};
