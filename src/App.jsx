function App() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#">
          NOIR PICTURES
        </a>

        <nav className="navigation">
          <a href="#films">Films</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Independent Cinema Est. 2021</p>

          <h1>Stories after dark.</h1>
          <p className="hero-description">
            Cinema for things we cannot explain.
          </p>

          <a href="#films" className="hero-link">
            Explore our films
          </a>
        </div>

        <div className="hero-image"></div>
      </section>

      <footer className="site-footer">
        <p>Independent stories. Lasting impressions</p>
        <p>Scroll to discover.</p>
      </footer>
    </main>
  );
}

export default App;