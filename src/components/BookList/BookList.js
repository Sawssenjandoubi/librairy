import React from "react";
import BookItem from "../BookItem/BookItem";
import "./BookList.css";
function BookList(props) {
  
  return (
    <div className="container">
      {props.books
        .filter((book) => {
          return (book.title.toLowerCase().includes(props.search.toLowerCase())|| book.categorie===props.search) ;
        })
        .map((book) => {
          return <BookItem key={book.id} book={book} />;
        })}
    </div>
  );
}

export default BookList;
