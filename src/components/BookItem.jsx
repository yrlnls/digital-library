import React from 'react'

function BookItem({ bookItem }) {
  return (
    <li>
      <strong>Title:</strong> {bookItem.title}
      <br />
      <strong>Author:</strong> {bookItem.author}
      <br />
      <strong>Genre:</strong> {bookItem.genre}
    </li>
  );
}

export default BookItem