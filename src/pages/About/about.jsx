import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
const About = () => {
    return ( 
        <div id="about" >
        <div className="about">
          <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
          <Container>
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className=" align-items-start p-2 my-details rounded">
                  Hi there! I am <strong>&nbsp;Naveez Munir</strong>
                  <br />A passionate programmer , born and brought up in Pakistan. I am a Full Stack Web Developer with React.js,Express.js, Node.js, and Mongodb as my tech stack.
                  <br />
                  In 2021, Hope to complete my Software Engineering with specialization in 'Web Technologies'.
                  
                  <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                  <br /> <br />
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <a href="#contact">
                        <Button className="m-2" variant="outline-primary">
                          Let's talk
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://drive.google.com/file/d/1QU71Lh49DjFdXM_3wMd1yCRyipR7uPNW/view?usp=sharing">
                        <Button className="m-2" variant="outline-success">
                          My Resume
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Naveez67" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-dark">
                          GitHub
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/naveez-ahmad-08660517b/" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-info">
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  };
 
export default About;