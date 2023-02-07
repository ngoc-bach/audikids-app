import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import BookList from "./pages/BookList";
import Error from "./pages/Error";
import SharedLayout from "./components/SharedLayout";


function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path='about_us' element={<AboutUs />}/>
        <Route path='books' element={<BookList />}/>
        <Route path='*' element={<Error />}/>
      </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
