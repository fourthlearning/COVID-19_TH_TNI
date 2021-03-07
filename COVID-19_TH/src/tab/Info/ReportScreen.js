import React, { Component } from "react";
import { SafeAreaView, View, Text , Alert} from "react-native";
import { CustomHeader } from "../../index";
import axios from "axios";
import {
  Button,
  Card,
  TextInput, 
} from "react-native-paper";
export class ReportScreen extends Component {
  state={
    name:'',
    email:'',
    tel:'',
    description:'',

  }
  handleSubmit = event => {
    event.preventDefault();
    const problem = {
      name:this.state.name,
      email:this.state.email,
      tel:this.state.tel,
      description : this.state.description
    };
    axios.post('https://0f39099385a5.ngrok.io/user', { problem })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      Alert.alert('Complete!!!');
      this.props.navigation.navigate("Info")
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#39D5D5" }}>
        <CustomHeader title="REPORT" navigation={this.props.navigation} />
        <View style={{ margin: 20 }}>
          <Card style={{ marginBottom: 10, height: 80 }}>
            <Card.Title
              title="Report Problem"
              subtitle="แจ้งปัญหาหรือสามารถสอบถามได้ที่นี่"
            />
            <Card>
              <Card.Content>
              <TextInput
                  style={{ marginBottom: 10, height: 60 , borderTopLeftRadius:10, borderTopRightRadius:10}}
                  label="Name"
                  name="name"
                  value={this.state.name}
                  onChangeText={(name) => { this.setState({ name}) }}
                />
                <TextInput
                  style={{ marginBottom: 10, height: 60 , borderTopLeftRadius:10, borderTopRightRadius:10}}
                  label="Email"
                  name="email"
                  value={this.state.email}
                  onChangeText={(email) => { this.setState({ email}) }}
                />
                <TextInput
                  style={{ marginBottom: 10, height: 60 , borderTopLeftRadius:10, borderTopRightRadius:10}}
                  label="Tel"
                  name="tel"
                  value={this.state.tel}
                  onChangeText={(tel) => { this.setState({ tel}) }}
                />
                <TextInput
                  style={{ marginBottom: 10, height: 80 , borderTopLeftRadius:10, borderTopRightRadius:10}}
                  multiline={true}
                  label="Description"
                  name="description"
                  value={this.state.description}
                  onChangeText={(description) => { this.setState({ description}) }}
                />
                <Button color='orange' dark={true} mode="contained" 
                onPress={this.handleSubmit}
                >
                  OK
                </Button>
              </Card.Content>
            </Card>
          </Card>
        </View>
      </SafeAreaView>
    );
  }
}
