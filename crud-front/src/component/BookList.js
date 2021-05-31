import React from "react";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

const BookList = (props) =>{
        console.log(props);

        const deleteBookHandler = (id) => {
            props.getBookId(id);
        };

    const renderBookList = props.books.map((book) => {
        return(
            <BookCard book={book} clickHandler={deleteBookHandler}
            key={book.id}
            ></BookCard>
        );
    })

    return(
      <div className="main">
        <h2>Boooks List
          <Link to="/add">
            <button className="ui button blue right">Add Book</button>
          </Link>
        </h2>
        <div className="ui celled list">{renderBookList}</div>
      </div>
        )
}

export default BookList;