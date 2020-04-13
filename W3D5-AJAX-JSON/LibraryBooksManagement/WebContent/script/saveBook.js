window.onload = function(){
	document.querySelector("#newBookForm").addEventListener("submit", saveBook);
};

function saveBook(event){
	event.preventDefault();
	let formData={
			isbn:document.getElementById("isbn").value,
			title: document.getElementById("title").value,
			overdueFee:document.getElementById("overdueFee").value,
			publisher: document.getElementById("publisher").value,
			datePublished: document.getElementById("datePublished").value
	}
	console.log(formData)

	fetch('https://elibraryrestapi.herokuapp.com/elibrary/api/book/add', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	})
	.then((response) => response.json())
	.then((data) => {
		document.getElementById("success").innerHTML="Book Saved Successfuly <br/>"+ JSON.stringify(data);
		document.getElementById("newBookForm").reset();
	})
	.catch((error) => {
		console.error('Error:', error);
		document.getElementById("error").innerHTML= JSON.stringify(error);
	});
}