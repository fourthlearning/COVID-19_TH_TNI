// import logo from './logo.svg';
import "../App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button, Image } from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <div>
        <Card body style={{ alignItems: "center", borderWidth: 0 }}>
          <Image
            src="https://www.thairath.co.th/media/dFQROr7oWzulq5Fa4VWnQHlUR0qeBNPVY7h6pW4gMEIotdD0ym4LdA0KvedtaOmqpV1.jpg"
            fluid
          />
        </Card>
        <Card body style={{ alignItems: "center", margin: 20 }}>
          <Card.Text>Welcome to Covid-19 TH Project Website.</Card.Text>
        </Card>
      </div>
    );
  }
}
