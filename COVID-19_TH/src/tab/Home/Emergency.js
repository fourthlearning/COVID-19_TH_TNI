import React, { Component } from "react";
import { View, Text, SafeAreaView, ScrollView, Linking } from "react-native";
import { CustomHeader } from "../../index";
import data1 from "../../data/data_emergency";

export class Emergency extends Component {
  state = {
    data1: data1,
  };
  getEmergencyData = () => {
    return this.state.data1.map((map) => {
      for (var i = 0; i < this.state.data1.length; i++) {
        if (map.id == this.state.data1[i].id) {
          return (
            <View
              style={{
                width: 380,
                height: 85,
                backgroundColor: "white",
                margin: 10,
                borderRadius: 8,
              }}
            >
              <View style={{ flex: 0.4, justifyContent: "center" }}>
                <Text style={{ marginLeft: 15, fontSize: 16, color: "blue" }}>
                  {this.state.data1[i].company}
                </Text>
              </View>
              <View style={{ flex: 0.6, justifyContent: "center" }}>
                <Text
                  style={{
                    marginLeft: 15,
                    fontSize: 23,
                    fontWeight: "bold",
                    top: -5,
                  }}
                  onPress={() => {
                    Linking.openURL("tel:" + this.state.data1[i].tel);
                  }}
                >
                  {this.state.data1[i].tel}
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
        <CustomHeader title="EMERGENCY" navigation={this.props.navigation} />
        <View style={{ flex: 1, alignItems: "center" }}>
          <ScrollView>{this.getEmergencyData()}</ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
