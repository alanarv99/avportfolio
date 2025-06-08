import React from "react";
import NavigationBar from "../../pagecomponents/navigationbar";
import Footer from "../../pagecomponents/footer";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import Dictionary from "../../Images/Dictionary.png";
import Ireland from "../../Images/Ireland.png";
import Weather from "../../Images/Weather.png";
import Clock from "../../Images/Worldclock.png";

import "./portfolio.css";
export default function Portfolio() {
  return (
    <div className="Portfolio">
      <NavigationBar />
      <Container>
        <h2 className="Port">
          These are a few projects I created while learning to code that
          exemplify various skills.
        </h2>
        <Row className="Row TopRow">
          <Col className="ColOne">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Clock} />
              <Card.Body>
                <Card.Title className="CardTitle">
                  Javascript World Clock
                </Card.Title>
                <a href="https://worldclockbyalana.netlify.app/">
                  <Button variant="primary" className="CardButton">
                    Explore this App
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className="ColTwo">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Dictionary} />
              <Card.Body>
                <Card.Title className="CardTitle">React Dictionary</Card.Title>
                <a href="https://dictionaryofreact.netlify.app/">
                  <Button variant="primary" className="CardButton">
                    Explore this App
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="Row BottomRow">
          <Col className="ColOne">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Ireland} />
              <Card.Body>
                <Card.Title className="CardTitle">
                  React Travel Project
                </Card.Title>
                <a href="https://ireland-adventures.netlify.app/">
                  <Button variant="primary" className="CardButton">
                    Explore this App
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className="ColTwo">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Weather} />
              <Card.Body>
                <Card.Title className="CardTitle">
                  Javascript Weather
                </Card.Title>
                <a href="https://vanillaweatheritrainsorshine.netlify.app/">
                  <Button variant="primary" className="CardButton">
                    Explore this App
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
