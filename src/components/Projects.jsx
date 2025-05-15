import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
       <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="employee">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="employee">Employee<br />Management System</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="auth">User Login<br />System</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="grocery">Grocery<br />Website</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="employee">
                        <li>Full Stack Application: Developed a comprehensive Employee Management System using Java, Spring Boot, ReactJS, and MySQL.</li>
                        <li>CRUD Operations: Integrated functionality for Create, Read, Update, and Delete operations with a responsive frontend UI.</li>
                        <li>Secure Database Integration: Leveraged Spring Boot with MySQL for backend operations.</li>
                      </Tab.Pane>

                      <Tab.Pane eventKey="auth">
                        <li>Spring Boot with JWT Authentication: Built a secure login system using Spring Boot with JWT token handling.</li>
                        <li>Frontend: Designed a ReactJS-based frontend with user-friendly forms for registration and login.</li>
                        <li>Token-based Authorization: Only authenticated users can access protected routes.</li>
                      </Tab.Pane>

                      <Tab.Pane eventKey="grocery">
                        <li>Static Frontend Project: Designed a responsive grocery website using HTML and CSS.</li>
                        <li>Features intuitive layout and mobile-friendly design for better user experience.</li>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}