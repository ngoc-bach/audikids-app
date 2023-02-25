import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedBooks from "../components/FeaturedBooks";

const HomePage = ({ books }) => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedBooks books={books} />
    </>
  );
};

export default HomePage;
