import React from "react";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <>
     <div className="container">
      <Header />
      <section className="hero-section">
        <h1>Ready to Build Something Awesome?</h1>
        <p>Your journey starts here.</p>
        <form>
          <input type="text" className="search-input" placeholder="Search..." />
        </form>
      </section>

      <section className="projects-section">
        <h2>Practical Projects to Get You Ahead</h2>
        <div className="projects-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            reprehenderit minima, tenetur necessitatibus laborum{" "}
          </p>
          <button className="btn-primary">Browse Library</button>
        </div>
      </section>

      <section className="image-description-section">
        <div className="image-content">
          <img src="person.jpg" alt="Person" className="person-image" />
          <div className="description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
              deserunt ad! Molestiae sit quos facilis, asperiores minus
              aspernatur incidunt unde consequatur cum accusamus dolores
              perferendis culpa delectus? In, architecto modi!
            </p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default App;
