import "react-multi-carousel/lib/styles.css";
import { Row, Col } from "react-bootstrap";

import ProgressBar from "react-bootstrap/ProgressBar";
import { Container } from "react-bootstrap";

export const Skill = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container className="skl">
        <Row>
          <h1 className="h1 text-center">Skills</h1>
          <p className="align-item-center text-center">
            I have the knoledge of working in the languages and tools as a Full
            Stack Developer.
          </p>
        </Row>
        <Row className="p-2 mb-3">
          <h3 className=" heading text-center mb-4">FrontEnd Tools</h3>
          <Col sm={6} xs={12} xl={3} className="mb-2">
            <h4>HTML</h4>
            <ProgressBar animated now={90} />
          </Col>
          <Col sm={6} xs={12} xl={3} className="mb-2">
            <h4>CSS</h4>
            <ProgressBar animated now={85} />
          </Col>
          <Col sm={6} xs={12} xl={3} className="mb-2">
            <h4>JavaScript</h4>
            <ProgressBar animated now={70} />
          </Col>
          <Col sm={6} xs={12} xl={3} className="mb-2">
            <h4>React Js</h4>
            <ProgressBar animated now={88} />
          </Col>
        </Row>
        <Row className="p-2 mb-3">
          <Col sm={6} xs={12} xl={3} className="mb-2">
            <h4>Redux/ReduxTollkit</h4>
            <ProgressBar animated now={60} />
          </Col>
          <Col sm={6} xs={12} xl={3} className="mb-2">
            <h4>React-Bootstrap</h4>
            <ProgressBar animated now={70} />
          </Col>
        </Row>
        <Row className="p-2">
          <h3 className="heading text-center mb-4">BackEnd Tools</h3>
          <Col sm={6} xs={12} xl={3} className="mb-2">
            <h4>MongoDB</h4>
            <ProgressBar animated now={80} />
          </Col>
          <Col sm={6} xs={12} xl={3} className="mb-2">
            <h4>ExpressJs</h4>
            <ProgressBar animated now={82} />
          </Col>
          <Col sm={6} xs={12} xl={3} className="mb-2">
            <h4>Mongoose</h4>
            <ProgressBar animated now={75} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
