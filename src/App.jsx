import { useRef } from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react"; 

function App() {
  const headlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(headlineRef.current, {
      y:40,
      opacity:0,
      duration:1,
      ease:'power3.out',
    });

    tl.from(descriptionRef.current, {
      y:20,
      opacity:0,
      duration:0.8,
      ease:'power2.out',
    });

    tl.from(buttonRef.current, {
      y:15,
      opacity:0,
      duration:0.6,
      ease:'power2.out',
    });

    tl.from(imageRef.current, {
      clipPath: "inset(0 0 100% 0)",
      duration:1.4,
      ease:'power3.inOut',
    }, 0);
  });

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

          <h1 ref={headlineRef}>Stories after dark.</h1>
          <p className="hero-description" ref={descriptionRef}>
            Cinema for things we cannot explain.
          </p>

          <a href="#films" className="hero-link" ref={buttonRef}>
            Explore our films
          </a>
        </div>

        <div className="hero-image" ref={imageRef}>
          <img className="film-still"
          src="/noir-hero.png"
          alt="A woman overlooking a moonlit lake from a shadowy villa"
          />
        </div>
      </section>

      <footer className="site-footer">
        <p>Independent stories. Lasting impressions</p>
        <p>Scroll to discover.</p>
      </footer>
    </main>
  );
}

export default App;