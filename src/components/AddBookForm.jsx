import { useState } from 'react'
function AddBookForm(onAddBook) {
    const [newBook, setNewBook] = useState({ title: "", author: "", genre: "" });
    const [errorMessage, setErrorMessage] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();
        if (newBook.title === "" || newBook.author === "" || newBook.genre === "") {
            setErrorMessage("Please fill in all required fields.");}
        else {
            addTask(newBook);
            setNewBook({ title: "", author: "", genre: "" });
            setErrorMessage("");
        }
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewBook({ ...newBook, [name]: value });
    }
  return (
    <>
    <h1>Add Book</h1>
    <form onSubmit={handleFormSubmit}>
        <label>Title: <input type="text" name="title" value={newBook.title} onChange={handleInputChange} /></label>
        <br />
        <label>Author: <input type="text" name="author" value={newBook.author} onChange={handleInputChange} /></label>
        <br />
        <label>Genre: <input type="text" name="genre" value={newBook.genre} onChange={handleInputChange} /></label>
        <br />
        <button type="submit">Add Book</button>
        {errorMessage && <p>{errorMessage}</p>}
    </form>
    </>
  );
}

export default AddBookForm