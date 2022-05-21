console.log("************** DELIVERABLE 04 *********************");

interface Book {
    title: string,
    isRead: boolean
}

function isBookRead(books: Book[], titleToSearch: string): boolean {
    let findex = books.findIndex(book => book.title === titleToSearch)
    if (findex === -1){
        return false
    } else {
        if(books[findex].isRead === true){
            return true;
        } else {
            return false
        }
    }
    I
  }
  
  // Ejemplo:
  var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];
  
  console.log(isBookRead(books, "Devastación")); // true
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false