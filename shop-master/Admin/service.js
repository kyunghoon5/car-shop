//     // api url
// const api_url =
// 	"http://localhost:3000/getcars";

// // Defining async function
// async function getapi(url) {
// 	alert("ok")
// 	// Storing response
// 	const response = await fetch(url);

// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	console.log(response);
// 	if (response) {
// 		hideloader();
// 	}
// 	show(data);
// }
// // Calling that async function
// getapi(api_url);

// // Function to hide the loader
// function hideloader() {
// 	document.getElementById('loading').style.display = 'none';
// }
// Function to define innerHTML for HTML table




const BASE_URL = 'http://localhost:3000/getservices';

const getTodoItems = async () => {
	try {
		const response = await axios.get(BASE_URL);

		const todoItems = response.data;
		if (response) {
			hideloader();
		}
		show(todoItems);

		console.log(`GET: Here's the list of todos`, todoItems);

		return todoItems;
	} catch (errors) {
		console.error(errors);
	}
};

getTodoItems();

function show(data) {
	let tab =
		`<tr>
		<th>Brand</th>
		<th>Model</th>
		<th>Year</th>
		<th>Time variant</th>
		<th>Transmission</th>
		<th>Mileage</th>
		<th>Registration</th>
		<th>Mobile Number</th>
		</tr>`;
		
		// <th>Action</th>
	// Loop to access all rows
	for (let r of data) {
		tab += `<tr>
			<td>${r.brand} </td>
			<td>${r.model}</td>
			<td>${r.year}</td>		
			<td>${r.time_variant}</td>
			<td>${r.transmission}</td>		
			<td>${r.mileage}</td>		
			<td>${r.registration}</td>		
	        <td>${r.number}</td>		
			</tr>`;
		}
		// <td><button onclick="DeleteFun(${r.model})">Delete</button></td>
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}

function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function DeleteFun(model) {
alert(model)
}


// fetch('http://localhost:3000/getcars').then(function (response) {
// 	// The API call was successful!
// 	console.log('success!', response);
// }).catch(function (err) {
// 	// There was an error
// 	console.warn('Something went wrong.', err);
// });