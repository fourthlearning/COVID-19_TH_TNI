// import logo from './logo.svg';
import "../App.css";
import React from "react";
import { Component } from "react";
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
  Table,
  Form,
} from "react-bootstrap";
import axios from "axios";
import Image from "react-bootstrap/Image";
import ReadMoreReact from "read-more-react";
import { ImCopy, ImSearch } from "react-icons/im";
export default class Report extends Component {
  state = {
    detail: [],
    search: null,
  };

  componentDidMount() {
    axios
      .get("https://0f39099385a5.ngrok.io/user")
      .then((response) =>
        this.setState({
          detail: response.data,
        })
      )
      .catch((er) => console.log(er.messagge));
  }

  renderDetail = () => {
    return this.state.detail.map((map) => {
      for (var i = 0; i < this.state.detail.length; i++) {
        if (map.id === this.state.detail[i].id) {
          console.log(i);
          return (
            <tr>
              <td>{this.state.detail[i].id}</td>
              <td>{this.state.detail[i].problem.name}</td>
              <td>{this.state.detail[i].problem.email}</td>
              <td>{this.state.detail[i].problem.tel}</td>
              <td>{this.state.detail[i].problem.description}</td>
              {/* <td>{this.state.detail[i].problem.date}</td> */}
            </tr>
          );
        }
      }
    });
  };

  render() {
    return (
      <div>
        <Card style={{ margin: 30 }}>
          <Card.Header>News </Card.Header>
          <Card.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Tel</th>
                  <th>Description</th>
                  {/* <th>Date</th> */}
                </tr>
              </thead>
              <tbody>{this.renderDetail()}</tbody>
            </Table>
          </Card.Body>
          {/* <Card.Text>
            
          </Card.Text> */}
        </Card>
      </div>
    );
  }
}
