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
const postToDoData = async (task) => {
	try {
		const response = await fetch(baseUrl, {
			method: "POST",
			body: JSON.stringify(task),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = response.json().then((info) => {
			//console.log(`Taak is op de server gepost`, info);
			createTask(info);

			// 	return data;
		});
	} catch (err) {
		console.log(err, "dit lukt me niet");
	}
};

// change data on server with PUT

const changeData = async (description) => {
	try {
		const response = await fetch(baseUrl + id, {
			methode: "PUT",
			body: JSON.stringify(description), //change description
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = response.json(data).then(() => {
			console.log("de taak is gewijzigd");
			// hier de editfunction()
		});
	} catch (error) {
		console.log("de taak kon niet worden aagepast");
	}
};

// delete data from server

const deleteData = async (id) => {
	try {
		const response = await fetch(baseUrl + id, {
			method: "DELETE",
		});
		console.log("deleted");
	} catch (err) {
		console.log(err, "sorry, wat?");
	}
};
