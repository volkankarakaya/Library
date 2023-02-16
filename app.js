const headerBtn = document.getElementById("header-btn");
const closeBtn = document.getElementById("close-btn");
const addBtn = document.getElementById("add-btn");

let bookContainer = document.querySelector(".book-container");

headerBtn.addEventListener("click", toggleForm);
closeBtn.addEventListener("click", toggleForm);

function toggleForm() {
  document.body.classList.toggle("activeForm");
}

let myLibrary = [
  {
    title: "Clean Code",
    author: "Robert Martin",
    page: "464",
    read: "no",
  },
  {
    title: "Eloquent Javascript",
    author: "Marjin Haverbeke",
    page: "472",
    read: "no",
  },
];

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBtn.addEventListener("click", saveBook);

function clearInput(target) {
  if (target.value != "") {
    target.value = "";
  }
}

function saveBook() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let page = document.getElementById("page").value;
  let read = document.getElementById("read").value;
  const inputs = document.querySelectorAll(".form-input");

  let bookInstance = new Book(title, author, page, read);
  addBookToLibrary(bookInstance);
  toggleForm();
  inputs.forEach(clearInput);
  updateBooks()
}

function updateBooks(){
  let htmlString = ''
  for(let i=0; i<myLibrary.length; i++){
    htmlString += `<div class="book-card">
    <p>Title: ${myLibrary[i].title}</p>
    <p>Author: ${myLibrary[i].author}</p>
    <p>Page: ${myLibrary[i].page}</p>
    <p>Read: ${myLibrary[i].read}</p>
    <button class="edit-btn">Edit</button>
    <button class="remove-btn">Remove</button>
</div>`

  }
  bookContainer.innerHTML = htmlString;
}