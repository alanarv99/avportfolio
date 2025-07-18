import React, { useEffect } from "react";
import NavigationBar from "../../pagecomponents/navigationbar";
import Footer from "../../pagecomponents/footer";
import { Container } from "react-bootstrap";
import WebFont from "webfontloader";
import { Link } from "react-router";
import "../Homepage/homepage.css";

export default function Homepage() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Pixelify Sans"],
      },
    });
  }, []);
  return (
    <div className="Homepage">
      <NavigationBar />
      <Container className="Header">
        <h4 className="Hello">Hello, my name is</h4>
        <h1 className="font-loader">Alana R. Vazquez</h1>
        <h4>Junior Front-End Developer</h4>
        <h4>based in New Jersey, USA</h4>
      </Container>
      <div>
        <h3 className="Howdy">
          Welcome to my self built website, please take your time looking around
          and getting aquainted with me. My hope is that I can utilize my
          current skills in HTML, CSS, Python, Javascript, and React.js while
          continuing to grow my knowledge and understanding of these languages.
          I have basic experience with building responsive webpages, hosting on
          Netlify, drafting on Figma, importing Bootstrap, writing in VS Code,
          and deploying on github. I am always looking for more tools and
          resources and excited to build fun and cool new projects!
        </h3>
      </div>
      <div className="AlmostFooter">
        <Link className="PageLink" to="./About">
          More About Me
        </Link>
        <Link className="PageLink" to="./Portfolio">
          Check Out My Other Projects
        </Link>
        <Link className="PageLink" to="./Contact">
          Lets Chat
        </Link>
      </div>
      <Footer />
    </div>
  );
}
