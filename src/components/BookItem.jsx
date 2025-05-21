import React from 'react'

function BookItem({ bookItem, onDelete }) {
  return (
    <li className="bookitem-card">
      <div className="bookitem-info">
        <p><strong>Title:</strong> {bookItem.title}</p>
        <p><strong>Author:</strong> {bookItem.author}</p>
        <p><strong>Genre:</strong> {bookItem.genre}</p>
      </div>
      <button className="bookitem-delete-button" onClick={() => onDelete(bookItem.id)}>Delete</button>
    </li>
  );
}

export default BookItem;
