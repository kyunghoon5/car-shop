





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



