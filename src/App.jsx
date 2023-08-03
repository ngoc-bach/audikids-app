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
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about_us" element={<AboutUs />} />
          <Route path="books" element={<BookList />} />
          <Route path="books/:bookId" element={<SingleBook />} />
          <Route path="cart" element={<CartContainer />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
