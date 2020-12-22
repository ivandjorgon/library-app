let myLibrary = [];

// Constructor for making Book objects
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages // number of pages

    this.info = function() {
        console.log(title + ", " + author + ", " + pages)
    }
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages')
const book2 = new Book('Beginning JavaScript', 'Jeremy McPeak', '768 pages')
book1.info()
book2.info()

function addBookToLibrary() {
  // do stuff here
}