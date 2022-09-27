// functions to add new elements to the dom
const userInput = document.getElementById("newTaskInput");

async function toDoDatafunction() {
	let toDoData = await getToDoData();
	toDoData.forEach((task) => {
		let newTask = {
			description: task.description,
			id: task._id,
			done: task.done,
		};
		task.description = userInput.value;
		task.done = false;
		toDoData.push(newTask);
	});
}

function createTask() {
	const parent = document.getElementById("taskcontainer");
	const newDiv = document.createElement("div");
	newDiv.classList.add("toDoTask");
	parent.appendChild(newDiv);
	// done button
	taskDone = document.createElement("input");
	taskDone.setAttribute("type", "checkbox");
	taskDone.classList.add("done");
	newDiv.appendChild(taskDone);

	// plek om de niewe taak op te slaan input want makkelijker te editen.
	const taskContent = document.createElement("div");
	taskContent.classList.add("text");
	taskContent.type = "text";
	taskContent.innerHTML = userInput.value;
	taskContent.setAttribute("readonly", "readonly");

	newDiv.appendChild(taskContent);
	// edit
	const editButton = document.createElement("button");
	editButton.classList.add("edit");

	// delete button
	const deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
	deleteButton.innerText = "Delete";
	// buttons aan de div toevoegen
	newDiv.appendChild(editButton);
	newDiv.appendChild(deleteButton);
}
//data display, toevoegen van properties en value

let addbutton = document.getElementById("add");
addbutton.addEventListener("click", (e) => {
	e.preventDefault();
	createTask();
	postToDoData();

	console.log("klik");
});

// delete function

// edit function
// div die de attribute readlonly heeft removeAttribute("readonly")
// weer ophalen van de fetch function
//click = true  falsedefault
