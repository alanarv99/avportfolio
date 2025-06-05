import React from "react";
import "../pagecomponents/footer.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import copy from "copy-to-clipboard";
import LinkedIn from "../Images/linkedin.png";
import Github from "../Images/github.png";
import Email from "../Images/email.png";

export default function Footer() {
  function copyEmail() {
    let emailAddress = "alanarv99@gmail.com";
    copy(emailAddress);
    alert(
      `You just copied my email, ${emailAddress}! I hope to hear from you soon!`
    );
  }
  return (
    <Container fluid className="footerContainer">
      <footer>
        <h6>
          This SPA is <a href="https;//google.com">open-sourced</a> coded by me,
          Alana Vazquez!
        </h6>
        <Container className="socials">
          <Row>
            <Col>
              <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">
                <Image fluid src={LinkedIn} alt="LinkedIn Logo" width={50} />
              </a>
            </Col>
            <Col>
              <a href="https://github.com/alanarv99">
                <Image fluid src={Github} alt="Github Logo" width={50} />
              </a>
            </Col>
            <Col>
              <Image
                onClick={copyEmail}
                fluid
                src={Email}
                alt="Envelope"
                width={50}
              />
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
}
