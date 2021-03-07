import React, { Component } from "react";
import { Image, View, Text, SafeAreaView } from "react-native";
import { CustomHeader } from "../../index";
import datas from "../../data/data_map";
import axios from "axios";

import MapView, { Marker, Callout } from "react-native-maps";
export class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arraydata: [],
      arraydata2: [],
      datas: datas,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    await axios
      .get("https://covid19.th-stat.com/api/open/cases/sum")
      .then((res) => {
        var dataprovince = res.data.Province;
        var arrayProvince = [];
        for (var i in dataprovince)
          arrayProvince.push({ Province: i, Number: dataprovince[i] });
        this.setState({
          arraydata: arrayProvince,
        });
      })
      .catch((er) => console.log(er.messagge));
  }

  renderprovince = () => {
    return this.state.arraydata.map((map) => {
      for (var i = 0; i < this.state.datas.length; i++) {
        if (map.Province == this.state.datas[i].province) {
          return (
            <Marker
              coordinate={{
                latitude: this.state.datas[i].latitude,
                longitude: this.state.datas[i].longitude,
              }}
            >
                <Image		
                 source={this.state.datas[i].image}		
                 style={{ width: 80, height: 50, borderRadius: 5 }}		
                 resizeMode="contain"		
               />
              <Callout tooltip>
                <View>
                  <View
                    style={{
                      flexDirection: "column",
                      alignSelf: "flex-start",
                      backgroundColor: "#fff",
                      borderRadius: 6,
                      borderColor: "#ccc",
                      borderWidth: 0.5,
                      padding: 15,
                      width: 300,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        marginBottom: 5,
                        fontWeight: "bold",
                      }}
                    >
                      {this.state.datas[i].name}
                    </Text>
                    <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                      borderTopColor: "orange",
                      borderWidth: 16,
                      alignSelf: "center",
                      marginTop: -0.5,
                    }}
                  />
                </View>
              </Callout>
            </Marker>
          );
        }
      }
    });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#39D5D5" }}>
        <CustomHeader
          title="MAPS"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 13.75,
              longitude: 100.517,
              latitudeDelta: 1.5,
              longitudeDelta: 1.0,
            }}
          >
            {this.renderprovince()}
          </MapView>
        </View>
      </SafeAreaView>
    );
  }
}
