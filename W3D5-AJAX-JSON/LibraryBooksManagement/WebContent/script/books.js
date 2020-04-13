window.onload = function(){
	loadTable();
};

function loadTable(){
	fetch('https://elibraryrestapi.herokuapp.com/elibrary/api/book/list')
	.then((response) => {
		return response.json();;
	})
	.then((books) => {
		for(let book of books){
			addRow(book);
		}
	});
}

function addRow(book){
	var table = document.getElementById("books-table");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);

	cell1.innerHTML = book.bookId;
	cell2.innerHTML = book.isbn;
	cell3.innerHTML = book.title;
	cell4.innerHTML = book.overdueFee;
	cell5.innerHTML = book.publisher;
	cell6.innerHTML = book.datePublished;
}