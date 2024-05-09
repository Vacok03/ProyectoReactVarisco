import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navegation.module.css";
import canosur from "../../../assets/canosur.png"
import { CardWidget } from "../../CardWidget/CardWidget";
import { Link, NavLink } from "react-router-dom";


export const Navegation = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={canosur} alt="" className={styles.navbar__logo} />
        </Navbar.Brand>
        <Nav className="me-auto gap-3">
          <Link to="/">Home</Link>
          <Link to="/category/Gas">Gas</Link>
          <Link to="/category/Cloaca">Cloaca</Link>
          <Link to="/category/Agua">Agua</Link>
          <Link to="/cart">Cart</Link>
        </Nav>
      </Container>
      <CardWidget />
    </Navbar>
  );
};