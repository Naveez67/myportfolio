import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experstyele.css";
const Expernice = () => {
    return (
        <div id="experience">
              <hr />
             <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <h3>Studing Software Engineering</h3>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center"> Software Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    Looking for  experience
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
        </div>
     
     );
}
 
export default Expernice;