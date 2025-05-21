import { useState } from 'react'
function AddBookForm({ onAddBook }) {
    const [newBook, setNewBook] = useState({ title: "", author: "", genre: "" });
    const [errorMessage, setErrorMessage] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();
        if (newBook.title === "" || newBook.author === "" || newBook.genre === "") {
            setErrorMessage("Please fill in all required fields.");}
        else {
            onAddBook(newBook);
            setNewBook({ title: "", author: "", genre: "" });
            setErrorMessage("");
        }
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewBook({ ...newBook, [name]: value });
    }


  return (
    <div className="addbookform-container">
      <h1 className="addbookform-title">Add Book</h1>
      <form onSubmit={handleFormSubmit} className="addbookform-form">
          <label className="addbookform-label">Title:
            <input 
              type="text" 
              name="title" 
              value={newBook.title} 
              onChange={handleInputChange} 
              className="addbookform-input"
            />
          </label>
          <label className="addbookform-label">Author:
            <input 
              type="text" 
              name="author" 
              value={newBook.author} 
              onChange={handleInputChange} 
              className="addbookform-input"
            />
          </label>
          <label className="addbookform-label">Genre:
            <input 
              type="text" 
              name="genre" 
              value={newBook.genre} 
              onChange={handleInputChange} 
              className="addbookform-input"
            />
          </label>
          <button type="submit" className="addbookform-button">Add Book</button>
          {errorMessage && <p className="addbookform-error">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default AddBookForm
