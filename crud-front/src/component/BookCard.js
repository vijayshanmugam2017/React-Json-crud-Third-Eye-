import React from "react";
import { Link } from "react-router-dom";

const BookCard = (props) => {
    const { id, title, author, price, category} = props.book;
    return(
        <div className="item">
                <div className="content">
                    <Link to={{pathname:`/book/${id}`, state: {book: props.book}}}>
                        <div className="header">{title}</div>
                        <div>{author}</div>
                        <div>{price}</div>
                        <div>{category}</div>
                    </Link>
                </div>
                <i 
                className="trash alternate outline icon"
                style={{color:"red", float:"right", marginTop:"7px", marginLeft:"10px"}}
                onClick={ () => props.clickHandler(id)}
                ></i>
                <Link to={{pathname:`/edit/${id}`, state: {book: props.book}}}>
                    <i 
                        className="edit alternate outline icon"
                        style={{color:"blue",float:"right", marginTop:"7px"}}
                    ></i>
                </Link>
            </div>
    )
};

export default BookCard;