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




const BASE_URL = 'http://localhost:3000/getcars';

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
		<th>Name</th>
		<th>Model</th>
		<th>Price</th>
		<th>Year</th>
		<th>Brand</th>
		<th>Mileage</th>
		<th>City</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data) {
		tab += `<tr>
	<td>${r.name} </td>
	<td>${r.model}</td>
	<td>${r.price}</td>
	<td>${r.year}</td>		
	<td>${r.brand}</td>		
	<td>${r.mileage}</td>		
	<td>${r.city}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}

function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table



// fetch('http://localhost:3000/getcars').then(function (response) {
// 	// The API call was successful!
// 	console.log('success!', response);
// }).catch(function (err) {
// 	// There was an error
// 	console.warn('Something went wrong.', err);
// });