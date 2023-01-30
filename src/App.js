import "./App.css";
import About from "./components/About";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
// import Tours from "./components/Tours";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <BookList/>
      <Footer/>
    </div>
  )
}

export default App;
