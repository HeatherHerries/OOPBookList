// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
// UI Constructor
function UI() {}

// Add Book to List
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");

  // Create <tr> Element
  const row = document.createElement("tr");

  // Insert Columns
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</td>
  `;

  list.appendChild(row);
};

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};
// Event Listeners
document.getElementById("book-form").addEventListener("submit", function(e) {
  //Get Form Values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // Instantiate Book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Add Book to List
  ui.addBookToList(book);

  // Clear Fields
  ui.clearFields();

  e.preventDefault();
});
