// import logo from './logo.svg';
import "../App.css";
import React from "react";
import { Component } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
export default class CreateNews extends Component {
  state = {
    title: "",
    description: "",
    photoURL: "",
    url: "",
  };

  handletitleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handledesChange = (event) => {
    this.setState({ description: event.target.value });
  };
  handlephotoChange = (event) => {
    this.setState({ photoURL: event.target.value });
  };
  handleurlChange = (event) => {
    this.setState({ url: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const news = {
      title: this.state.title,
      description: this.state.description,
      photoURL: this.state.photoURL,
      url: this.state.url,
      date:
        new Date().getDate() +
        "/" +
        new Date().getMonth() +
        "/" +
        new Date().getFullYear(),
    };

    axios.post(`https://0f39099385a5.ngrok.io/news`, { news }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    alert("เพิ่มข่าวสารสำเร็จ!!!");
  };

  render() {
    return (
      <div>
        <Card style={{ margin: 30 }}>
          <Card.Header>Create News</Card.Header>
          <Card.Body style={{ alignItems: "center" }}>
            <form onSubmit={this.handleSubmit}>
              <label>
                Title&nbsp;:&nbsp;
                <input
                  type="text"
                  name="title"
                  onChange={this.handletitleChange}
                />
              </label>
              <label>
                &nbsp; Description&nbsp;:&nbsp;
                <input
                  type="text"
                  name="description"
                  onChange={this.handledesChange}
                />
              </label>
              &nbsp;
              <label>
                PhotoURL&nbsp;:&nbsp;
                <input
                  type="text"
                  name="photoURL"
                  onChange={this.handlephotoChange}
                />
              </label>
              &nbsp;
              <label>
                URL&nbsp;:&nbsp;
                <input type="text" name="url" onChange={this.handleurlChange} />
              </label>
              &nbsp;&nbsp;
              <button type="submit">Create News</button>
            </form>
          </Card.Body>
        </Card>
      </div>
    );
  }
  // state = {
  //   title:'',
  //   description:'',
  //   photoURL:'',
  //   url:'',
  // };

  // handleSubmit = event => {
  //   event.preventDefault();

  //   const news = {
  //     title: this.state.title,
  //     description: this.state.description,
  //     photoURL: this.state.photoURL,
  //     url: this.state.url,
  //     date : new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear()
  //   };

  //   axios.post('https://c1e8fdb8ee72.ngrok.io/news', { news })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  //     alert("เพิ่มข่าวสารสำเร็จ!!!")
  // }

  // render() {
  //   return (
  //     <div>
  //       <Card style={{ margin: 30 }}>
  //         <Card.Header>Create News</Card.Header>
  //         <Card.Body style={{alignItems:'center'}}>
  //           <form onSubmit={this.handleSubmit}>
  //             <label>
  //               Title &nbsp;: &nbsp;
  //               <input type="text" id="title" name="title"  onChangeText={(title) => { this.setState({title}) }} />
  //             </label>&nbsp;
  //             <label>
  //               Description &nbsp;: &nbsp;
  //               <input type="text" name="description" onChangeText={(description) => { this.setState({description}) }} />
  //             </label>&nbsp;
  //             <label>
  //               PhotoURL &nbsp;:&nbsp;
  //               <input type="text" name="photoURL" onChangeText={(photoURL) => { this.setState({photoURL}) }} />
  //             </label>&nbsp;
  //             <label>
  //               URL &nbsp;: &nbsp;
  //               <input type="text" name="url" onChangeText={(url) => { this.setState({url}) }} />
  //             </label>&nbsp;&nbsp;
  //             <button type="submit">Create News</button>
  //           </form>

  //         </Card.Body>
  //       </Card>
  //     </div>
  //   );
  // }
}
