import BookItem from './BookItem'
import AddBookForm from './AddBookForm'
import { useState } from 'react'
import { useEffect } from 'react';

function BookList() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/books")
          .then((response) => response.json())
          .then((data) => setBooks(data))
          .catch((error) => console.error("Error fetching books:", error));
      }, []);

      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
      );

      function handleAddBook(newBook) {
        console.log("Adding book:", newBook);
        setBooks([...books, newBook]);

        fetch("http://localhost:3000/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBook),
        })
          .then((response) => response.json())
          .then((data) => setBooks([...books, data]))
          .catch((error) => console.error("Error adding book:", error));
      }

  return (
    <>
    <input 
    type="text"
     placeholder="Search by title or genre"
     value={searchTerm} 
     onChange={(e) => setSearchTerm(e.target.value)} 
     />
    <h1>e-Library</h1>
    <ul>
      {filteredBooks.map((book) => (
        <BookItem key={book.title} bookItem={book} />
      ))}
    </ul>
    <AddBookForm onAddBook={handleAddBook} />
    </>
  )
}

export default BookList