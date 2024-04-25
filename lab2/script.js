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
	const div1 = document.createElement("div");
	div1.classList.add("button-div");
	const div2 = document.createElement("div");
	div2.classList.add("text-div");
	const listItemPara = document.createElement("p");
	const deleteButton = document.createElement("button");
	listItemPara.innerText = `${input2}`;
	deleteButton.classList.add("btn", "btn-danger", "btn-sm", "btn-x");
	deleteButton.innerText = "X";
	deleteButton.addEventListener("click", function () {
		showDeleteModal(listItem);
	});
	listItemPara.classList.add("default-text");
	listItem.classList.add("list-group-item");
	listItem.classList.add("list-item");
	div1.append(deleteButton);
	div2.append(listItemPara);
	listItem.append(div1);
	listItem.append(div2);
	listItem.addEventListener("click", function () {
		toggleDone(listItem);
	});
	taskList.append(listItem);
};

const toggleDone = (element) => {
	const date = new Date();
	const stringDate = ` ${date.getDate()} - ${
		date.getMonth() + 1
	} - ${date.getFullYear()}`;
	const div = element.getElementsByClassName("text-div")[0];
	if (!div.childNodes[0].classList.contains("crossed-text")) {
		const dateSpan = document.createElement("p");
		dateSpan.innerText = stringDate;
		dateSpan.classList.add("default-text");
		div.appendChild(dateSpan);
	} else {
		div.removeChild(div.lastChild);
	}
	div.childNodes[0].classList.toggle("crossed-text");
	div.childNodes[0].classList.toggle("default-text");
};

const showDeleteModal = (element) => {
	toggleDone(element);
	const modal = document.getElementById("my-modal");
	const text = element.childNodes[1].childNodes[0].innerText;
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

const toggleList = (elementId) => {
	let newId;
	switch (elementId) {
		case "pilne-text":
			newId = "pilne-list";
			break;
		case "wazne-text":
			newId = "wazne-list";
			break;
		case "niewazne-text":
			newId = "niewazne-list";
			break;
		default:
			return;
	}
	const list = document.getElementById(newId);
	list.hidden = !list.hidden;
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

	const titles = document.getElementsByTagName("h2");
	for (let element of titles) {
		element.addEventListener("click", () => {
			toggleList(element.id);
		});
	}
};
