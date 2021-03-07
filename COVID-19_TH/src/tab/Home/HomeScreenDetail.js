import React, { Component } from "react";
import { SafeAreaView, Text, View, Image, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import data2 from "../../data/data_symptomps";
import data3 from "../../data/data_preventions";
import { CustomHeader } from "../../index";
export class HomeScreenDetail extends Component {
  state = {
    data2: data2,
    data3: data3,
  };

  getSymptompsData = () => {
    return this.state.data2.map((map) => {
      for (var i = 0; i < this.state.data2.length; i++) {
        if (map.id == this.state.data2[i].id) {
          return (
            <View
              style={{
                height: 115,
                width: 115,
                backgroundColor: "#E7F5F5",
                margin: 15,
                top: -5,
                borderRadius: 10,
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flex: 0.75,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 65,
                    height: 65,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,
                  }}
                  source={this.state.data2[i].image}
                />
              </View>
              <View
                style={{
                  flex: 0.25,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "rgb(10,132,255)", fontWeight: "bold" }}>
                  {this.state.data2[i].symptomp}
                </Text>
              </View>
            </View>
          );
        }
      }
    });
  };

  getPreventionData = () => {
    return this.state.data3.map((map) => {
      for (var i = 0; i < this.state.data3.length; i++) {
        if (map.id == this.state.data3[i].id) {
          return (
            <View
              style={{
                height: 115,
                width: 115,
                backgroundColor: "#E7F5F5",
                margin: 15,
                top: -5,
                borderRadius: 10,
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flex: 0.75,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 65,
                    height: 65,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,
                  }}
                  source={this.state.data3[i].image}
                />
              </View>
              <View
                style={{
                  flex: 0.25,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "rgb(10,132,255)", fontWeight: "bold" }}>
                  {this.state.data3[i].prevention}
                </Text>
              </View>
            </View>
          );
        }
      }
    });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#39D5D5" }}>
        <CustomHeader title="Introduction" navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.4, flexDirection: "column" }}>
            <View
              style={{ flex: 0.2, justifyContent: "center", marginLeft: 15 }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                What is Covid-19 ?
              </Text>
            </View>
            <View
              style={{
                flex: 0.8,
                margin: 15,
                top: -10,
                justifyContent: "center",
              }}
            >
              <WebView
                style={{ borderRadius: 10 }}
                allowsFullscreenVideo
                allowsInlineMediaPlayback
                mediaPlaybackRequiresUserAction
                source={{ uri: "https://www.youtube.com/embed/RdWRmGxb_38" }}
              />
            </View>
          </View>
          <View style={{ flex: 0.3, flexDirection: "column" }}>
            <View
              style={{ flex: 0.2, justifyContent: "center", marginLeft: 15 }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Symptomps
              </Text>
            </View>
            <View
              style={{
                flex: 0.8,
                margin: 15,
                top: -10,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {this.getSymptompsData()}
              </ScrollView>
            </View>
          </View>

          <View style={{ flex: 0.3, flexDirection: "column", top: -20 }}>
            <View
              style={{ flex: 0.2, justifyContent: "center", marginLeft: 15 }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Preventions
              </Text>
            </View>
            <View
              style={{
                flex: 0.8,
                margin: 15,
                borderRadius: 10,
                top: -10,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {this.getPreventionData()}
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
