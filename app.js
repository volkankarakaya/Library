const headerBtn = document.getElementById("header-btn");
const closeBtn = document.getElementById("close-btn");
const addBtn = document.getElementById("add-btn");


let bookContainer = document.querySelector(".book-container");

headerBtn.addEventListener("click", toggleForm);
closeBtn.addEventListener("click", toggleForm);
window.addEventListener('load', ()=>{
  myLibrary.forEach((item)=>{
    updateBook(item);
  })
});




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
  updateBook(bookInstance);
}

function updateBook(item){
  const bookCard = document.createElement('div');
  bookCard.setAttribute('class','book-card');
  
  const titleP = document.createElement('p');
  const titleText = document.createTextNode('Title: '+item.title);
  titleP.appendChild(titleText);

  const authorP = document.createElement('p');
  const authorText = document.createTextNode('Author: '+item.author);
  authorP.append(authorText);

  const pageP = document.createElement('p');
  const pageText = document.createTextNode('Page: '+item.page);
  pageP.appendChild(pageText);

  const readP = document.createElement('p');
  const readText = document.createTextNode('Read: '+item.read);
  readP.appendChild(readText);

  const removeBtn = document.createElement('button');
  const removeText = document.createTextNode('Remove');
  removeBtn.appendChild(removeText);
  removeBtn.setAttribute('class','remove-btn')


  bookCard.appendChild(titleP);
  bookCard.appendChild(authorP);
  bookCard.appendChild(pageP);
  bookCard.appendChild(readP);
  bookCard.appendChild(removeBtn);

  bookContainer.appendChild(bookCard);

  removeBtn.addEventListener('click', (e)=>{
    const parentDiv = e.target.parentElement;
    parentDiv.remove()

    myLibrary.splice(myLibrary.indexOf(item), 1);
  })


};


const removeBtns = document.querySelectorAll(".remove-btn");
removeBtns.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    let parent = e.parentElement;
    console.log('clicked')
  })
})


function validateFormInputs(){
  
};