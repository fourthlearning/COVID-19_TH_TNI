import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { CustomHeader } from "../../index";
import { IMAGE } from "../../constants/image";
export class InfoScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#39D5D5" }}>
        <CustomHeader
          title="INFO"
          isHome={true}
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={{ flex: 1, alignItems: "center" }}>
            <TouchableOpacity
              style={{
                height: 200,
                width: "90%",
                position: "relative",
                borderRadius: 20,
                margin: 10,
                alignItems: "stretch",
              }}
              onPress={() => this.props.navigation.navigate("Assessment")}
            >
              <ImageBackground
                source={IMAGE.IMAGE_EVA}
                style={{
                  height: 200,
                  width: "100%",
                  position: "absolute",
                  opacity: 0.9,
                }}
              />
              <View
                style={{
                  flex: 0.2,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FF8336",
                  top: 160,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "600" }}
                >
                  COVID SELF ASSESSMENT
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 200,
                width: "90%",
                position: "relative",
                borderRadius: 20,
                margin: 10,
                alignItems: "stretch",
              }}
              onPress={() => this.props.navigation.navigate("Thaichana")}
            >
              <ImageBackground
                source={IMAGE.IMAGE_THCHANA}
                style={{
                  height: 200,
                  width: "100%",
                  position: "absolute",
                  opacity: 0.9,
                }}
              />
              <View
                style={{
                  flex: 0.2,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FF8336",
                  top: 160,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "600" }}
                >
                  THAICHANA
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 200,
                width: "90%",
                position: "relative",
                borderRadius: 20,
                margin: 10,
                alignItems: "stretch",
              }}
              onPress={() => this.props.navigation.navigate("Report")}
            >
              <ImageBackground
                source={IMAGE.IMAGE_REPORT}
                style={{
                  height: 200,
                  width: "100%",
                  position: "absolute",
                  opacity: 0.9,
                }}
              />
              <View
                style={{
                  flex: 0.2,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FF8336",
                  top: 160,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "600" }}
                >
                  REPORT PROBLEM
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={{ alignItems: "center", top: -10 }}>
          <Text style={{ color: "white" }}>Version 1.0</Text>
        </View>
      </SafeAreaView>
    );
  }
}
