import { Col, Container, Nav, Row } from "react-bootstrap";
import LinksNav from "./links/LinksNav";
import { Link } from "react-router-dom";
import MobileNav from "./mobileNav/MobileNav";
import RightNav from "./right/RightNav";

const TopNav = () => {
  return (
    <Container className="container-links ">
      <Row className="d-flex align-items-center">
        <Col xs={6} className="d-flex gap-5">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <LinksNav />
          <MobileNav />
        </Col>
        <Col xs={6}>
        <RightNav />
        </Col>
        
      </Row>
    </Container>
  );
};

export default TopNav;
