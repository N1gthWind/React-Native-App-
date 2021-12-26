import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ajax from "../test/services/fetchCity";
import MySqlConnection from 'react-native-my-sql-connection';

let config = {
  host: "127.0.0.1",
  database: "tourismo",
  user: "root",
  password: "",
  port: 3306,
  params: "?zeroDateTimeBehavior=convertToNull",
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  mainText: {
    color: "#fff",
    fontSize: 24,
  },
});

const Human = (props) => {
  return <Text style={props.style}>Hello,My name is: {props.name}!</Text>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  async componentDidMount() {
    const result = await ajax.loadcities();
    await this.setState({
      isLoaded: true,
      items: result,
    });
  }

  render() {
    if (this.state.items[0] == null) {
      return <Text style={styles.mainText}>Loading</Text>;
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.mainText}>{this.state.items[0][0].name}</Text>
        </View>
      );
    }
  }
}

export default App;
