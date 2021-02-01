import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import acdemy from "../../assets/img/projects/acdemy.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";

import L_HTML5 from "../../assets/img/skills/html-5.svg";

import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import "./projects.css";

const Projects = () => {
    return ( 

        <div id="projects">
            <hr />
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: Todo List With MUI */}
        <ImageEvent
            date="01/10/2020"
            className="text-center"
            text="Academy of Excellence"
            src={acdemy}
            alt="Academy managment system"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Its a Academy management system created using MERN stack
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Keeps track of Courses  </li>
                          <li>Powered by React and Material UI</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Mongodb
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://completeapbynaveez.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Naveez67/Complete-app-react-node"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>
          </Events>
          </Timeline>
        </div>
     );
}
 
export default Projects;

