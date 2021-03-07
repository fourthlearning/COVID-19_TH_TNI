import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import {
  HomeScreen,
  HomeScreenDetail,
  NewsScreen,
  ThaichanaScreen,
  Emergency,
  MapScreen,
  InfoScreen,
  AssessmentScreen,
  ReportScreen,
} from "../../src/tab";

import { IMAGE } from "../constants/image";

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const StackHome = createStackNavigator();
function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="Emergency"
        component={Emergency}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
}

const StackMap = createStackNavigator();
function MapStack() {
  return (
    <StackMap.Navigator initialRouteName="Maps">
      <StackMap.Screen
        name="Maps"
        component={MapScreen}
        options={navOptionHandler}
      />
    </StackMap.Navigator>
  );
}

const StackNews = createStackNavigator();
function NewsStack() {
  return (
    <StackNews.Navigator initialRouteName="News">
      <StackNews.Screen
        name="News"
        component={NewsScreen}
        options={navOptionHandler}
      />
    </StackNews.Navigator>
  );
}

const StackInfo = createStackNavigator();
function InfoStack() {
  return (
    <StackInfo.Navigator initialRouteName="Info">
      <StackInfo.Screen
        name="Info"
        component={InfoScreen}
        options={navOptionHandler}
      />
      <StackInfo.Screen
        name="Thaichana"
        component={ThaichanaScreen}
        options={navOptionHandler}
      />
      <StackInfo.Screen
        name="Assessment"
        component={AssessmentScreen}
        options={navOptionHandler}
      />
      <StackInfo.Screen
        name="Report"
        component={ReportScreen}
        options={navOptionHandler}
      />
    </StackInfo.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? IMAGE.ICON_HOME2 : IMAGE.ICON_HOME1;
          } else if (route.name === "Maps") {
            iconName = focused ? IMAGE.ICON_MAP2 : IMAGE.ICON_MAP1;
          } else if (route.name === "News") {
            iconName = focused ? IMAGE.ICON_NEW1 : IMAGE.ICON_NEW2;
          } else if (route.name === "Info") {
            iconName = focused ? IMAGE.ICON_INFO2 : IMAGE.ICON_INFO1;
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{ width: 25, height: 25, resizeMode: "contain" }}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Maps" component={MapStack} />
      <Tab.Screen name="News" component={NewsStack} />
      <Tab.Screen name="Info" component={InfoStack} />
    </Tab.Navigator>
  );
}
const StackApp = createStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Basic">
        <StackApp.Screen
          name="HomeApp"
          component={TabNavigator}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
