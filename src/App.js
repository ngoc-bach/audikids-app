import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import BookList from "./pages/BookList";
import SingleBook from "./pages/SingleBook";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import SharedLayout from "./components/SharedLayout";
import { useEffect, useState } from "react";

const url = 'http://demo3553789.mockable.io/'

function App() {
  const [books, setBooks] = useState([])
  const [user, setUser] = useState(null)

  const fetchBooks = async () => {

  const response = await fetch(url);
  const books = await response.json();
  setBooks(books);
}
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<SharedLayout />}>
        <Route index element={<HomePage books={books}/>} />
        <Route path='about_us' element={<AboutUs />}/>
        <Route path='books' element={<BookList books={books}/>}/>
        <Route path='books/:bookId' element={<SingleBook books={books}/>}/>
        <Route path='login' element={<Login setUser={setUser}/>}/>
        <Route path='dashboard' element={<Dashboard user={user}/>}/>
        <Route path='*' element={<Error />}/>
      </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
