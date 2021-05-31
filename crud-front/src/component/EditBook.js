import React from "react";

class EditBook extends React.Component {
    constructor(props) {
        super(props);
        const { id, title, author, price, category } = props.location.state.book;
        this.state = {
            id,
            title,
            author,
            price,
            category,
        };
    }
    
    update = (e) => {
        e.preventDefault();
        if(this.state.title ==="" || this.state.author ==="" || this.state.price ==="" || this.state.category === "") {
            alert("All the fields are mandatory");
            return
        }
        this.props.updateBookHandler(this.state);
        this.setState({ title: "", author: "", price: "", category: ""});
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="ui main">
                <h2>Edit Book</h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Title" 
                        value={this.state.title}
                        onChange={ (e) => this.setState({title: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Author</label>
                        <input type="text" name="author" placeholder="Author" 
                        value={this.state.author}
                        onChange={ (e) => this.setState({author: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Price</label>
                        <input type="number" name="price" placeholder="350" 
                        value={this.state.price}
                        onChange={ (e) => this.setState({price: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Category</label>
                        <input type="text" name="category" placeholder="Eg: Fiction" 
                        value={this.state.category}
                        onChange={ (e) => this.setState({category: e.target.value })}
                        />
                    </div>
                    <button className="ui button blue">Update</button>
                </form>
            </div>
        )
    }
}

export default EditBook;