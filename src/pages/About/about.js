import React from "react";
import "../About/about.css";
import NavigationBar from "../../pagecomponents/navigationbar";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardText,
  Carousel,
  Image,
} from "react-bootstrap";
import Footer from "../../pagecomponents/footer";
import WillowandCeleste from "../../Images/WillowandCeleste.jpg";
import AlphonseandEdward from "../../Images/AlphonseandEdward.jpg";
import Korea from "../../Images/Korea.jpg";
import AdvancedPython from "../../Images/AdvancedPythonDevelopment.png";
import AdvancedReact from "../../Images/AdvancedReactDevelopment.png";
import AdvancedResponsive from "../../Images/AdvancedResponsiveWebDevelopment.png";
import AdvancedWeb from "../../Images/AdvancedWebDevelopment.png";
import IntroAI from "../../Images/IntrotoAI.png";
import IntroCoding from "../../Images/IntrotoCoding.png";
import IntroPython from "../../Images/IntrotoCoding.png";
import IntroWeb from "../../Images/IntrotoWebDevelopment.png";
import ReactDev from "../../Images/ReactDevelopment.png";
import ResponsiveWeb from "../../Images/ResponsiveWebDevelopment.png";
import WebDev from "../../Images/WebDevelopment.png";
import AVResume from "../../Images/AV Resume.jpg";

export default function About() {
  return (
    <div className="About">
      <NavigationBar />
      <Container className="aboutBody">
        <Card className="card">
          <CardHeader className="CardHeader">About My Life</CardHeader>
          <CardBody>
            <Carousel>
              <Carousel.Item>
                <Image
                  fluid
                  src={WillowandCeleste}
                  text="Willow and Celeste (respectively)"
                  alt="My bunnies Willow and Celeste"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  src={AlphonseandEdward}
                  text="Willow and Celeste (respectively)"
                  alt="My guinea pigs Edward and Alphonse"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  src={Korea}
                  text="Me in Korea"
                  alt="Me in Korea in January 2023"
                />
              </Carousel.Item>
            </Carousel>
            <CardText>
              I grew up in Central New Jersey - yes, it does exist - and try to
              travel as often as I can! I received my Bachelors of Science in
              Animal Science from University of Delaware. I am a huge animal
              lover and have two guinea pigs and two bunnies. They are absolute
              demons, but I love them. I have always had an interest in coding
              and began learning with the SheCodes Online Coding Workshops. I
              hope to expand my knowledge of coding languages beyond HTML, CSS,
              Javascript, Python, and React.
            </CardText>
          </CardBody>
        </Card>
        <hr />
        <p>
          {" "}
          Check out my{" "}
          <a href={AVResume} target="_blank">
            Resume
          </a>
        </p>
        <hr />

        <Card className="card">
          <CardHeader className="CardHeader">
            My Coding Certifications
          </CardHeader>
          <CardBody>
            <Carousel>
              <Carousel.Item>
                <Image
                  fluid
                  src={AdvancedPython}
                  alt="Advanced Python Development Certificate"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  src={AdvancedReact}
                  alt="Advanced React Development Certificate"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  src={AdvancedResponsive}
                  alt="Advanced Responsive Web Development Certificate"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  src={AdvancedWeb}
                  alt="Advanced Web Development Certificate"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image fluid src={IntroAI} alt="Intro to AI Certificate" />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  src={IntroPython}
                  alt="Intro to Python Development Certificate"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  src={IntroWeb}
                  alt="Intro to Web Development Certificate"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  src={ReactDev}
                  alt="React Development Certificate"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  src={ResponsiveWeb}
                  alt="Responsive Web Development Certificate"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image fluid src={WebDev} alt="Web Development Certificate" />
              </Carousel.Item>
            </Carousel>
          </CardBody>
        </Card>
        <hr />

        <p>
          Learn more about {""}
          <a href="https://shecodes.io" target="_blank">
            SheCodes Online Coding Workshops
          </a>{" "}
        </p>
        <hr />
      </Container>
      <Footer />
    </div>
  );
}
