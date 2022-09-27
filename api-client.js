const baseUrl = `http://localhost:3000/`;

// GET data from server

const getToDoData = async () => {
	try {
		const response = await fetch(baseUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();

		console.log("dit is het Get request", data);
		return data;
	} catch (err) {
		console.log(err, "geen data beschikbaar");
	}
};

// post data to sever
const postToDoData = async () => {
	try {
		const response = await fetch(baseUrl, {
			method: "POST",
			body: JSON.stringify(postToDoData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = response.json().then((data) => {
			let itemDescription = data.description;
			let itemId = data._id;
			let done = data.done;
			toDoDatafunction(itemDescription, itemId, done);
			createTask();
			console.log(`Taak is op de server gepost`);
		});

		return data;
	} catch (err) {
		console.log(err, "dit lukt me niet");
	}
};
postToDoData();

// change data on server with PUT

// delete data from server

/*const deleteData = async () => {
	try {
		const response = await fetch(baseUrl, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(fetch),
		});
		const data = await response.json();
		console.log("deleted", data);
	} catch (err) {
		console.log(err, "sorry, wat?");
	}
};
deleteData();*/
