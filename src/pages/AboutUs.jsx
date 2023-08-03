import React from "react";

const AboutUs = () => {
  return (
    <section className="section">
      <div className="section-title">
        <h2>
          <span>About Us</span>
        </h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src="https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHMlMjByZWFkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="about-photo"
            alt="reading"
          />
        </div>
        <article className="about-info">
          <p>
            <strong>At Audi Kids</strong>, we believe that every child deserves
            access to a world of imagination and learning through stories.
            That's why we've created a platform filled with over 1,000 audio
            books specifically tailored for children of all ages.
          </p>
          <p>
            Our team of experts works tirelessly to curate a diverse selection
            of captivating tales, from classic fairy tales to modern
            best-sellers, to ensure that every child can find a story they love.
            With easy-to-use navigation and high-quality audio recordings, Audi
            Kids makes it simple for children to explore and enjoy books on
            their own.
          </p>
          <p>
            We are dedicated to providing a safe and educational platform for
            kids, so parents can rest assured that their children are engaging
            with age-appropriate content. Whether they're being read to or
            listening on their own, children will develop a love of reading and
            a lifelong appreciation for the power of stories.
          </p>
          <p>
            Join the Audi Kids community today and let your child's imagination
            soar!
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutUs;
