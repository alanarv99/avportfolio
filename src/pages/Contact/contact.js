import React from "react";
import NavigationBar from "../../pagecomponents/navigationbar";
import Footer from "../../pagecomponents/footer";
import { Form, Button, Image, FigureCaption, Figure } from "react-bootstrap";

import LinkedIn from "../../Images/linkedin.png";
import Github from "../../Images/github.png";

import "./contact.css";

export default function Contact() {
  return (
    <div>
      <NavigationBar />
      <Form className="FormContainer">
        <h4 className="ReachOut">
          Please don't hesitate to reach out to me via the form below, or any of
          my other contact points, and I will try and get back to you as soon as
          possible! I look forward to hearing from you!
        </h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="Label">Your Name</Form.Label>
          <Form.Control
            className="Input"
            type="text"
            placeholder="Enter your name"
          />
          <Form.Label className="Label">Email Address</Form.Label>
          <Form.Control
            className="Input"
            type="email"
            placeholder="Enter email"
          />
          <Form.Label className="Label">Your Message</Form.Label>
          <Form.Control
            className="Input"
            type="text"
            placeholder="Enter your message"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send It
        </Button>
      </Form>
      <hr />
      <div className="Socials">
        <Figure className="figure">
          <a href="https://github.com/alanarv99">
            <Image
              fluid
              src={Github}
              alt="Github Logo"
              className="SocialImage"
            />
            <FigureCaption className="caption">
              Check Out My Github
            </FigureCaption>
          </a>
        </Figure>
        <Figure className="figure">
          <a href="https://github.com/alanarv99">
            <Image
              fluid
              src={LinkedIn}
              alt="LinkedIn Logo"
              className="SocialImage"
            />
            <FigureCaption className="caption">
              Check out my LinkedIn
            </FigureCaption>
          </a>
        </Figure>
      </div>
      <Footer />;
    </div>
  );
}
