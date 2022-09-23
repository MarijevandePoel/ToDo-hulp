// functions to add new elements to the dom

function createTask() {
	const parent = document.getElementById("taskcontainer");
	const newDiv = document.createElement("div");
	//const input = document.querySelector("#newTaskInput");
	//const task = input;
	parent.appendChild(newDiv);

	// plek om de niewe taak op te slaan input want makkelijker te editen.
	const taskContent = document.createElement("input");
	taskContent.classList.add("text");
	taskContent.type = "text";
	//taskContent.value = `${input}`;
	taskContent.setAttribute("readonly", "readonly");

	newDiv.appendChild(taskContent);

	// done button
	taskDone = document.createElement("input");
	taskDone.setAttribute("type", "checkbox");
	taskDone.classList.add("done");
	// delete button
	const deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
	deleteButton.innerText = "Delete";
	// buttons aan de div toevoegen
	newDiv.appendChild(taskDone);
	newDiv.appendChild(deleteButton);
}
createTask();

//data display
async function toDoDatafunction() {
	let toDoData = await getToDoData();
	toDoData.forEach((task) => {
		let newTask = [task.description, task._id, task.done];
		task.description = task.value;
		task.done = false;
		toDoData.push(newTask);
	});
}
toDoDatafunction();

//new input
function newInput() {
	const userInput = document.getElementById("newTaskInput");
	if (userInput != "") {
		let task = { description: `${userInput}`, id: `${_id}`, done: false };
		postToDoData(task);
	} else {
		alert("please enter a task.");
	}
}

// vullen van de data:

let addbutton = document.getElementById("add");
addbutton.addEventListener("click", (e) => {
	e.preventDefault();
	postToDoData();
	console.log("klik");
});

// delete function

// edit function
// div die de attribute readlonly heeft removeAttribute("readonly")
// weer ophalen van de fetch function
//click = true  falsedefault
