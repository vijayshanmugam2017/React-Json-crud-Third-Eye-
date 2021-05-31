import React from "react";
import { Link } from "react-router-dom";

const BookDetail = (props) => {
    const { title, author, price, category } = props.location.state.book
    return(
        <div className="main">
                <div className="ui card centerd">
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="description">{author}</div>
                        <div className="description">{price}</div>
                        <div className="description">{category}</div>
                    </div>
                </div>
                <div className="center-div">
                    <Link to="/">
                    <button className="ui button blue center">Back to Book List</button>
                    </Link>
                </div>
        </div>
    )
};

export default BookDetail;