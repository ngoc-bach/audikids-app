import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import BookList from "./pages/BookList";
import Error from "./pages/Error";
import SharedLayout from "./components/SharedLayout";
import { useEffect, useState } from "react";

const url = 'http://demo3553789.mockable.io/'

function App() {
  const [books, setBooks] = useState([])

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
        <Route index element={<HomePage />} />
        <Route path='about_us' element={<AboutUs />}/>
        <Route path='books' element={<BookList books={books}/>}/>
        <Route path='*' element={<Error />}/>
      </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
