import React from "react";
import { Link } from "react-router-dom";
import img from "../images/about.jpeg";

const About = () => {
  return (
    <section className="section">
      <div className="section-title">
        <h2>
          about <span>us</span>
        </h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={img} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>audio book platform for kids!</h3>
          <p>
            We believe in the power of imagination and the importance of reading
            to children. Our mission is to bring books to life through engaging
            and entertaining audio experiences.
          </p>
          <p>
            Our audio books are carefully selected and narrated by professional
            voice actors, ensuring that each story is brought to life in a fun
            and captivating way. From classic fairy tales to modern day
            adventures, we have a wide range of stories to cater to children of
            all ages.
          </p>
          {/* <a href="#about" className="btn">read more</a> */}
          <Link to="/about_us" className="btn">
            read more
          </Link>
        </article>
      </div>
    </section>
  );
};

export default About;
