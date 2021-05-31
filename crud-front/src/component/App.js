import React,{ useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/books";
import './App.css';
import Header from "./Header";
import AddBook from "./AddBook";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import EditBook from "./EditBook";

function App() {
  const LOCAL_STORAGE_KEY = "books";
  const [books, setBooks] = useState([]);
  
// Reterive Books
const retriveBooks = async () =>{
  const response = await api.get("/books");
  return response.data;
}  

  const addBookHandler = async (book) => {
    console.log(book);
    const request = {
      id: uuid(),
      ...book
    }

    const response = await api.post("/books", request)
    console.log(response);
    setBooks([...books, response.data]);
  };

  const updateBookHandler = async (book) => {
    const response = await api.put(`/books/${book.id}`, book)
    const { id, title, author, price, category} = response.data;
    setBooks(books.map((book)=>{
      return book.id === id ? { ...response.data} : book;
    }));
  };

  const removeBookHandler = async (id) => {
    await api.delete(`/books/${id}`);
    const newBookList = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(newBookList);
  };

  useEffect(() => {
    // const retriveBooks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retriveBooks) setBooks(retriveBooks);

    const getAllBooks = async() =>{
      const allBooks = await retriveBooks();
      if (allBooks) setBooks(allBooks);
    }

    getAllBooks();
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));
  },[books]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route 
          path="/" 
          exact 
          render={(props) => (
            <BookList
            {...props}
            books={books}
            getBookId={removeBookHandler}
            />
          )}
          />
          <Route 
          path="/add"
          render={(props) => (
            <AddBook 
            {...props}
            addBookHandler={addBookHandler}
            />
          )}
          />
          
          <Route 
          path="/edit"
          render={(props) => (
            <EditBook 
            {...props}
            updateBookHandler={updateBookHandler}
            />
          )}
          />

          <Route path="/book/:id" component={BookDetail} />
        </Switch>
        
        {/* <AddBook addBookHandler={addBookHandler} />
        <BookList books={books} getBookId={removeBookHandler}/> */}
      </Router>
    </div>
  );
}

export default App;
