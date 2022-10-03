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
	const editButton = document.createElement("button");
	editButton.classList.add("edit");
	editButton.setAttribute("id", "editButton");

	// delete button
	const deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
	deleteButton.setAttribute("id", "deleteButton");
	deleteButton.innerText = "Delete";
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
	if (del.target.className === "delete") {
		console.log("klik");
		const div = del.target.parentElement;
		list.removeChild(div);
		deleteData();
	}
});
// done fucntion

// edit function
let taskInput = document.getElementsByClassName("text");
list.addEventListener("click", function (edit) {
	if (edit.target.className === "edit") {
		console.log("edit");
		editButton.innertext = "save";
		taskInput.removeAttribute("readonly");
		taskInput.focus();
	} else {
		editButton.innerText = "Edit";
		taskInput.setAttribute("readonly", "readonly");
	}
});

// div die de attribute readlonly heeft removeAttribute("readonly")
// weer ophalen van de fetch function
//click = true  falsedefault
