/*
  Instructions:

  Create a simple library system with TypeScript:

  1. Interface Book: 
     - Define an interface 'Book' with the following properties:
       - 'title' (string)
       - 'author' (string)
       - 'isbn' (string)
       - 'publishedYear' (number)
       - An optional 'genre' property (string)

  2. Class Library:
     - Create a class 'Library' with:
       - A private property 'books' (array of Book).
       - A public method 'addBook' to add a new book to the library.
       - A public method 'getBookDetails' that returns details of a book based on the isbn.

  3. Class DigitalLibrary:
     - Create a class 'DigitalLibrary' that extends 'Library' and adds:
       - A readonly property 'website' (string) for the library’s website.
       - A public method 'listBooks' that returns a list of all book titles in the library.

  4. Create an instance of 'DigitalLibrary', add some books to it, and then print out the details of the books and the list of all book titles.
*/

// Interface for the Book
interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string; // Optional property
}

// Class Library
class Library {
  // Private property to store books
  private books: Book[] = [];

  // Method to add a new book to the library
  public addBook(book: Book): void {
    this.books.push(book);
  }

  // Method to get the details of a book by ISBN
  public getBookDetails(isbn: string): Book | undefined {
    return this.books.find(book => book.isbn === isbn);
  }

  // Protected getter to access books array in child classes
  protected getBooks(): Book[] {
    return this.books;
  }
}

// Class DigitalLibrary that extends Library
class DigitalLibrary extends Library {
  // Readonly property for the library's website
  public readonly website: string;

  // Constructor to initialize the website property
  constructor(website: string) {
    super(); // Call the parent class (Library) constructor
    this.website = website;
  }

  // Method to list all book titles in the library
  public listBooks(): string[] {
    return this.getBooks().map(book => book.title);
  }
}

// Example usage:
// Create an instance of DigitalLibrary
const myDigitalLibrary = new DigitalLibrary("https://mylibrary.com");

// Add some books to the library
myDigitalLibrary.addBook({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "123456789",
  publishedYear: 1925,
  genre: "Classic"
});

myDigitalLibrary.addBook({
  title: "1984",
  author: "George Orwell",
  isbn: "987654321",
  publishedYear: 1949
});

// Get the details of a specific book by ISBN
const bookDetails = myDigitalLibrary.getBookDetails("123456789");
if (bookDetails) {
  console.log("Book Details:", bookDetails);
} else {
  console.log("Book not found.");
}

// List all book titles in the library
const allTitles = myDigitalLibrary.listBooks();
console.log("All Book Titles:", allTitles);
