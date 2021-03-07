import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Text,
  Linking,
} from "react-native";
import { CustomHeader } from "../../index";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import axios from "axios";

export class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://0f39099385a5.ngrok.io/news")
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
            <View>
              <Card style={{ marginBottom: 10 }}>
                <Card.Title title={this.state.detail[i].news.title} />
                <Card.Content>
                  <Text numberOfLines={2} style={{ marginBottom: 10 }}>
                    {"      "}
                    {this.state.detail[i].news.description}
                  </Text>
                </Card.Content>
                <Card.Cover
                  source={{ uri: this.state.detail[i].news.photoURL }}
                />
                <Card.Actions>
                  <Button
                    mode="contained"
                    style={{ padding: 5, height: 45 }}
                    onPress={() => {
                      Linking.openURL(this.state.detail[i].news.url);
                    }}
                  >
                    Read more.
                  </Button>
                </Card.Actions>
              </Card>
            </View>
          );
        }
      }
    });
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#39D5D5" }}>
        <CustomHeader
          title="NEWS"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View style={{ flex: 1, margin: 20 }}>
          <ScrollView>{this.renderDetail()}</ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
