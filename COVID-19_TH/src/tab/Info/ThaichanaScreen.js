import React, { Component } from "react";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native";
import { CustomHeader } from "../../index";
export class ThaichanaScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#39D5D5" }}>
        <CustomHeader title="THAICHANA" navigation={this.props.navigation} />
        <WebView source={{ uri: "https://merchant.thaichana.com" }} />
      </SafeAreaView>
    );
  }
}
