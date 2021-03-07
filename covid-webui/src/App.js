import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Home from "./component/home";
import News from "./component/news";
import CreateNews from "./component/createnews";
import Report from "./component/report";
import { Navbar, Nav } from "react-bootstrap";
import {
  Card,
  Badge,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Accordion,
} from "react-bootstrap";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar variant="dark" bg="primary">
          <Navbar.Brand href="/">COVID-19 TH</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/" active component={Home}>
              Home
            </Nav.Link>
            <Nav.Link href="/news/" active component={News}>
              News
            </Nav.Link>
            <Nav.Link href="/report/" active component={Report}>
              Report Problem
            </Nav.Link>
            <Nav.Link href="/create/" active component={CreateNews}>
              <Button
                className="btn btn-sm"
                variant="warning"
                style={{ float: "right" }}
              >
                เพิ่มข้อมูลข่าว
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar>
        <Route path="/report/" component={Report} />
        <Route path="/create/" component={CreateNews} />
        <Route path="/news/" component={News} />
        <Route path="/" exact component={Home} />
      </div>
    );
  }
}
