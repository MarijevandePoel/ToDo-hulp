toDoDatafunction();
const list = document.getElementById("taskcontainer");
function emptyList() {
	list.innerHTML = "";
}
const userInput = document.getElementById("newTaskInput");
const taskContent = document.getElementsByClassName("text");

//krijg data van server met de waarden desc, id en done.
async function toDoDatafunction() {
	emptyList;
	let toDoData = await getToDoData();
	toDoData.forEach((task) => {
		let newTask = {
			description: task.description,
			id: task._id,
			done: task.done,
		};
		// met de data op de server een nieuwe taak aanmaken
		createTask(newTask);
	});
}
// function to add new elements to the dom
function createTask(newTask) {
	//console.log("newTask", newTask.description);
	const parent = document.getElementById("taskcontainer");
	const newDiv = document.createElement("div");
	newDiv.classList.add("toDoTask");
	newDiv.setAttribute("id", newTask.id);
	parent.appendChild(newDiv);
	// done button
	taskDone = document.createElement("input");
	taskDone.setAttribute("type", "checkbox");
	taskDone.classList.add("done", newTask.done);
	taskDone.setAttribute("id", "taskDone");
	newDiv.appendChild(taskDone);

	// plek om de nieuwe taak op te slaan input want makkelijker te editen.
	const taskContent = document.createElement("input");
	taskContent.classList.add("text");
	taskContent.type = "text";
	taskContent.value = newTask.description;
	taskContent.setAttribute("readonly", "readonly");

	newDiv.appendChild(taskContent);
	// edit
	const editButton = document.createElement("button", "i");
	editButton.classList.add("edit");
	editButton.setAttribute("id", "editButton");
	editButton.className = "fa-solid fa-pencil";

	// delete button
	const deleteButton = document.createElement("button", "i");
	deleteButton.classList.add("delete");
	deleteButton.setAttribute("id", "deleteButton");
	deleteButton.className = "fa-solid fa-trash";
	// buttons aan de div toevoegen
	newDiv.appendChild(editButton);
	newDiv.appendChild(deleteButton);
}
// post new task to server. Nieuwe taak moet met deze values worden toegvoegd aan de server.
function newPost() {
	const userInput = document.getElementById("newTaskInput").value;
	//console.log(userInput);

	let task = { description: `${userInput}`, done: false };
	postToDoData(task);
}

add.addEventListener("click", (e) => {
	e.preventDefault;
	//emptyList;
	newPost();
});

// delete function
list.addEventListener("click", function (del) {
	if (del.target.className === "fa-solid fa-trash") {
		console.log("klik");
		const div = del.target.parentElement;
		list.removeChild(div);
		deleteData(div.id);
	}
});
// done function

list.addEventListener("change", function (done) {
	if (done.target.className === "done") {
		let parent = task.target.parentElement;
		let klaar = task.done === true;
		if (e.currentTraget.checked) {
			task.addClassList("done");
			task = parent.lastChild;
			task.done = klaar;
		} else {
			console.log("not checked");
		}
	}
});

// edit function

// list.addEventListener("click", function edit(listItem) {
// 	let editButton = document.getElementById("editButton");
// 	let id = listItem.target.parentElement.id;
// 	let textElement = editButton.target.previousElementSibling;
// 	let textValue = textElement.value;
// 	if ((editButton.className = "fa-solid fa-pencil")) {
// 		console.log("edit");
// 		textElement.removeAttribute("readonly");
// 		textElement.focus();
// 		editButton.classList.remove("edit");
// 		editButton.className.remove("fa-solid fa-pencil");
// 		editButton.addClassList("save");
// 		editButton.addClassName("fa-solid fa-floppy-disk");
// 	} else if ((editButton.className = "fa-solid fa-floppy-disk")) {
// 		console.log("save");

// 		textElement.setAttribute("readonly", "readonly");
// 		editButton.className.remove("fa-solid fa-floppy-disk");
// 		editButton.classList.remove("save");
// 		editButton.addClassName("fa-solid fa-pencil");
// 		editButton.addClassList("edit");
// 		let editItem = { description: textValue };
// 		changeData(editItem, id);
// 	}
// });
