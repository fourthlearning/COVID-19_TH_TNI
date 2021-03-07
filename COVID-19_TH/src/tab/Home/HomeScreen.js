import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import { CustomHeader } from "../../index";
import axios from "axios";

export class HomeScreen extends Component {
  state = {
    confirmed: "0",
    recovered: "0",
    hospitalized: "0",
    death: "0",
    newconfirmed: "0",
    newrecovered: "0",
    newhospitalized: "0",
    newdeath: "0",
    date: "0",
  };
  componentDidMount() {
    axios
      .get("https://covid19.th-stat.com/api/open/today")
      .then((res) =>
        this.setState({
          confirmed: res.data.Confirmed,
          recovered: res.data.Recovered,
          hospitalized: res.data.Hospitalized,
          death: res.data.Deaths,
          newconfirmed: res.data.NewConfirmed,
          newrecovered: res.data.NewRecovered,
          newhospitalized: res.data.NewHospitalized,
          newdeath: res.data.NewDeaths,
          date: res.data.UpdateDate,
        })
      )
      .catch((er) => console.log(er.messagge));
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#39D5D5" }}>
        <CustomHeader
          title="HOME"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View style={{ flex: 1, backgroundColor: "#E7F5F5" }}>
          {/* Top Block */}
          <View
            style={{
              flex: 0.5,
              backgroundColor: "#39D5D5",
              flexDirection: "column",
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{ flex: 0.05, justifyContent: "center", marginLeft: 10 }}
              >
                <Text style={{ fontWeight: "bold", color: "#FFFFFF" }}>
                  WELCOME TO
                </Text>
              </View>
              <View
                style={{ flex: 0.08, justifyContent: "center", marginLeft: 10 }}
              >
                <Text
                  style={{ fontSize: 23, fontWeight: "bold", color: "white" }}
                >
                  COVID-19 TH
                </Text>
              </View>
              <View
                style={{ flex: 0.08, justifyContent: "center", marginLeft: 10 }}
              >
                <Text
                  style={{ fontSize: 25, fontWeight: "bold", color: "white" }}
                >
                  STATISTICS
                </Text>
              </View>
              <View
                style={{ flex: 0.08, justifyContent: "center", marginLeft: 10 }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: "white" }}
                >
                  Update : {this.state.date}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 0.7,
                  marginTop: 5,
                  top: -3,
                }}
              >
                <View style={{ flex: 0.5 }}>
                  <View
                    style={{
                      flex: 0.5,
                      backgroundColor: "#E7F5F5",
                      margin: 8,
                      borderRadius: 10,
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      style={{
                        margin: 8,
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "rgb(99,99,102)",
                      }}
                    >
                      Confirmed
                    </Text>
                    <Text
                      style={{
                        margin: 6,
                        fontWeight: "bold",
                        fontSize: 25,
                        top: -3,
                      }}
                    >
                      {Number(this.state.confirmed).toLocaleString("en")}
                    </Text>
                    <Text
                      style={{
                        margin: 8,
                        fontWeight: "bold",
                        fontSize: 10,
                        top: -8,
                      }}
                    >
                      (+{this.state.newconfirmed})
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      backgroundColor: "#E7F5F5",
                      margin: 8,
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        margin: 8,
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "rgb(10,132,255)",
                      }}
                    >
                      Hospitalized
                    </Text>
                    <Text
                      style={{
                        margin: 6,
                        fontWeight: "bold",
                        fontSize: 25,
                        top: -3,
                      }}
                    >
                      {Number(this.state.hospitalized).toLocaleString("en")}
                    </Text>
                    <Text
                      style={{
                        margin: 8,
                        fontWeight: "bold",
                        fontSize: 10,
                        top: -8,
                      }}
                    >
                      ({this.state.newhospitalized})
                    </Text>
                  </View>
                </View>
                <View style={{ flex: 0.5 }}>
                  <View
                    style={{
                      flex: 0.5,
                      backgroundColor: "#E7F5F5",
                      margin: 8,
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        margin: 8,
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "rgb(48,209,88)",
                      }}
                    >
                      Recovered
                    </Text>
                    <Text
                      style={{
                        margin: 6,
                        fontWeight: "bold",
                        fontSize: 25,
                        top: -3,
                      }}
                    >
                      {Number(this.state.recovered).toLocaleString("en")}
                    </Text>
                    <Text
                      style={{
                        margin: 8,
                        fontWeight: "bold",
                        fontSize: 10,
                        top: -8,
                      }}
                    >
                      (+{this.state.newrecovered})
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      backgroundColor: "#E7F5F5",
                      margin: 8,
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        margin: 8,
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "rgb(255,69,58)",
                      }}
                    >
                      Deaths
                    </Text>
                    <Text
                      style={{
                        margin: 6,
                        fontWeight: "bold",
                        fontSize: 25,
                        top: -3,
                      }}
                    >
                      {Number(this.state.death).toLocaleString("en")}
                    </Text>
                    <Text
                      style={{
                        margin: 8,
                        fontWeight: "bold",
                        fontSize: 10,
                        top: -8,
                      }}
                    >
                      (+{this.state.newdeath})
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* Introduction */}
          <View
            style={{
              flex: 0.15,
              backgroundColor: "white",
              margin: 10,
              borderRadius: 10,
              flexDirection: "column",
              top: 10,
            }}
          >
            <View style={{ flex: 0.33, justifyContent: "center" }}>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#FF8336",
                  marginTop: 5,
                }}
              >
                Learning
              </Text>
            </View>
            <View style={{ flex: 0.33, justifyContent: "center" }}>
              <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: "400" }}>
                Introduction Covid-19 Thailand
              </Text>
            </View>
            <View style={{ flex: 0.4, flexDirection: "row-reverse" }}>
              <TouchableOpacity
                style={{
                  flex: 0.3,
                  backgroundColor: "#FFBF00",
                  margin: 5,
                  borderRadius: 8,
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => this.props.navigation.navigate("HomeDetail")}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Get Started!!!
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Report */}
          <View
            style={{
              flex: 0.3,
              backgroundColor: "white",
              margin: 10,
              borderRadius: 10,
              flexDirection: "column",
              top: 10,
            }}
          >
            <View style={{ flex: 0.4, justifyContent: "center" }}>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "rgb(10,132,255)",
                  top: -10,
                }}
              >
                Are you feeling sick?
              </Text>
            </View>
            <View style={{ flex: 0.15, justifyContent: "center" }}>
              <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: "400" }}>
                If you feel sick with any of covid-19 symptomps
              </Text>
              <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: "400" }}>
                please call and search agency us immediately help.
              </Text>
            </View>
            <View
              style={{
                flex: 0.4,
                flexDirection: "row",
                margin: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.5,
                  backgroundColor: "rgb(255,69,58)",
                  margin: 5,
                  borderRadius: 50,
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                }}
                onPress={() => this.props.navigation.navigate("Emergency")}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Call Now
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.5,
                  backgroundColor: "rgb(10,132,255)",
                  margin: 5,
                  borderRadius: 50,
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                }}
                // onPress={() => this.props.navigation.navigate("Agency")}>
                onPress={() => {
                  Linking.openURL(
                    "https://ddc.moph.go.th/viralpneumonia/index.php"
                  );
                }}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Search Agency
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
