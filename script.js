toDoDatafunction();

const userInput = document.getElementById("newTaskInput");

//krijg data van server met de waarden desc, id en done.
async function toDoDatafunction() {
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
function createTask(description, id, done) {
	//console.log(newTask);
	const parent = document.getElementById("taskcontainer");
	const newDiv = document.createElement("div");
	newDiv.classList.add("toDoTask", id);
	parent.appendChild(newDiv);
	// done button
	taskDone = document.createElement("input");
	taskDone.setAttribute("type", "checkbox");

	taskDone.classList.add("done", done);
	newDiv.appendChild(taskDone);

	// plek om de niewe taak op te slaan input want makkelijker te editen.
	const taskContent = document.createElement("input");
	taskContent.classList.add("text");
	taskContent.type = "text";
	(taskContent.innerHTML = userInput.value), description;
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
// post new task to server. Nieuwe taak moet met deze values worden toegvoegd aan de server.
function newPost() {
	const userInput = document.getElementById("newTaskInput");
	let task = { description: `${userInput}`, done: false };
	postToDoData(task);
}

let addbutton = document.getElementById("add");
addbutton.addEventListener("click", (e) => {
	e.preventDefault();
	createTask();

	console.log("klik");
});

// delete function
let deleteAllButton = document.getElementById("deleteAll");
deleteAllButton.addEventListener("click", (e) => {
	e.preventDefault();
	console.log(e);
	//deleteData(e);
});

// edit function
// div die de attribute readlonly heeft removeAttribute("readonly")
// weer ophalen van de fetch function
//click = true  falsedefault
