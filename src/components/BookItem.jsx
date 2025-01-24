import React from 'react'

function BookItem({ bookItem, onDelete }) {
  return (
    <li>
      <strong>Title:</strong> {bookItem.title}
      <br />
      <strong>Author:</strong> {bookItem.author}
      <br />
      <strong>Genre:</strong> {bookItem.genre}
      <br />
      <button onClick={() => onDelete(bookItem.id)}>Delete</button>
    </li>
  );
}

export default BookItem;
